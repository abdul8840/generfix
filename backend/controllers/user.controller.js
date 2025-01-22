import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
import User from '../models/user.model.js';
import nodemailer from 'nodemailer';
import jwt from 'jsonwebtoken'

export const updateUser = async (req, res, next) => {
  if (req.user.id !== req.params.userId && !req.user.isAdmin) {
    return next(errorHandler(403, 'You are not allowed to update this user'));
  }

  if (req.body.password) {
    if (req.body.password.length < 6) {
      return next(errorHandler(400, 'Password must be at least 6 characters'));
    }
    req.body.password = bcryptjs.hashSync(req.body.password, 10);
  }

  if (req.body.username) {
    if (req.body.username.length < 7 || req.body.username.length > 20) {
      return next(errorHandler(400, 'Username must be between 7 and 20 characters'));
    }
    if (req.body.username.includes(' ')) {
      return next(errorHandler(400, 'Username cannot contain spaces'));
    }
    if (req.body.username !== req.body.username.toLowerCase()) {
      return next(errorHandler(400, 'Username must be lowercase'));
    }
    if (!req.body.username.match(/^[a-zA-Z0-9]+$/)) {
      return next(errorHandler(400, 'Username can only contain letters and numbers'));
    }
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.userId,
      {
        $set: {
          name: req.body.name,
          username: req.body.username,
          email: req.body.email,
          profilePicture: req.body.profilePicture,
          password: req.body.password,
          isAdmin: req.body.isAdmin, // Update admin status
        },
      },
      { new: true }
    );

    const { password, ...rest } = updatedUser._doc;
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
    if (!req.user.isAdmin && req.user.id !== req.params.userId) {
      return next(errorHandler(403, 'You are not allowed to delete this user'));
    }
    try {
      await User.findByIdAndDelete(req.params.userId);
      res.status(200).json('User has been deleted');
    } catch (error) {
      next(error);
    }
  };

  export const signout = (req, res, next) => {
    try {
      res
        .clearCookie('access_token')
        .status(200)
        .json('User has been signed out');
    } catch (error) {
      next(error);
    }
  };

  export const getUsers = async (req, res, next) => {
    if (!req.user.isAdmin) {
      return next(errorHandler(403, 'You are not allowed to see all users'));
    }
    try {
      const startIndex = parseInt(req.query.startIndex) || 0;
      const limit = parseInt(req.query.limit) || 9;
      const sortDirection = req.query.sort === 'asc' ? 1 : -1;
  
      const users = await User.find()
        .sort({ createdAt: sortDirection })
        .skip(startIndex)
        .limit(limit);
  
      const usersWithoutPassword = users.map((user) => {
        const { password, ...rest } = user._doc;
        return rest;
      });
  
      const totalUsers = await User.countDocuments();
  
      const now = new Date();
  
      const oneMonthAgo = new Date(
        now.getFullYear(),
        now.getMonth() - 1,
        now.getDate()
      );
      const lastMonthUsers = await User.countDocuments({
        createdAt: { $gte: oneMonthAgo },
      });
  
      res.status(200).json({
        users: usersWithoutPassword,
        totalUsers,
        lastMonthUsers,
      });
    } catch (error) {
      next(error);
    }
  };

  export const forgotPassword = async (req, res, next) => {
    const { email } = req.body;
  
    if (!email) {
        return next(new Error('Email is required'));
    }
  
    try {
        const user = await User.findOne({ email });
  
        if (!user) {
            return next(new Error('User with this email does not exist'));
        }
  
        // Generate a JWT reset token (expiry time: 15 minutes)
        const resetToken = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET,  // Use the JWT_SECRET from your .env
            { expiresIn: '15m' }
        );
  
        // Save the token to the user document (optional)
        user.resetPasswordToken = resetToken;
        await user.save();
  
        // Send the reset email
        const resetUrl = `${process.env.CLIENT_URL}/reset-password/${resetToken}`;
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });
  
        const mailOptions = {
            to: user.email,
            subject: 'Password Reset Request',
            text: `You requested to reset your password. Use the following link: ${resetUrl}`,
        };
  
        await transporter.sendMail(mailOptions);
  
        res.status(200).json('Password reset link sent to your email');
    } catch (error) {
        next(error);
    }
  };

// Reset Password Controller
export const resetPassword = async (req, res, next) => {
  const { token, password } = req.body;

  if (!token || !password) {
      return next(new Error('Token and password are required'));
  }

  if (password.length < 6) {
      return next(new Error('Password must be at least 6 characters'));
  }

  try {
      // Verify the JWT token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(decoded.userId);

      if (!user) {
          return next(new Error('User not found'));
      }

      // Hash the new password
      const hashedPassword = bcryptjs.hashSync(password, 10);
      user.password = hashedPassword;

      // Clear the reset token and expiration (optional)
      user.resetPasswordToken = undefined;
      await user.save();

      res.status(200).json('Password reset successful');
  } catch (error) {
      return next(new Error('Invalid or expired token'));
  }
};



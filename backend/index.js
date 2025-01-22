import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import authRoutes from "./routes/auth.route.js";
import appointmentRoutes from "./routes/appointment.route.js";
import userRoutes from "./routes/user.route.js";
import cookieParser from "cookie-parser";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Mongodb is connected");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use(express.json());
app.use(cookieParser());


const __dirname = path.resolve();
// app.use(express.static(path.join(__dirname, '../client/dist')));

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/appointments", appointmentRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});
// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, '../client', 'dist', 'index.html')); // Updated path for Vite
//   });

app.listen(process.env.PORT, () => {
  console.log(`Server is running on ${process.env.PORT}`);
});

app.use((err, req, res, next) => {
    console.error('Error:', err);  // Log the error object
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });
});


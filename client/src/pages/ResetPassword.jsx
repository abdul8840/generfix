import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TextInput, Button, Alert } from 'flowbite-react';

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');
    
    // Client-side validation
    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    setIsLoading(true); // Start loading

    try {
      const res = await fetch('/api/users/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token, password }),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage('Password reset successful. Redirecting...');
        setTimeout(() => navigate('/login'), 3000);
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false); // End loading
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow-md rounded">
      <h1 className="text-xl font-semibold mb-4">Reset Password</h1>
      <form onSubmit={handleSubmit}>
        <TextInput
          id="password"
          type="password"
          placeholder="Enter new password"
          required
          onChange={(e) => setPassword(e.target.value)}
          className="mb-4"
        />
        {error && <Alert color="failure" className="mb-4">{error}</Alert>}
        {message && <Alert color="success" className="mb-4">{message}</Alert>}
        <Button type="submit" color="blue" className="w-full" disabled={isLoading}>
          {isLoading ? 'Resetting...' : 'Reset Password'}
        </Button>
      </form>
    </div>
  );
};

export default ResetPassword;

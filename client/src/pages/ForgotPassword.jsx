import React, { useState } from 'react';
import { TextInput, Button, Alert } from 'flowbite-react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    try {
      const res = await fetch('/api/users/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage(data);
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow-md rounded">
      <h1 className="text-xl font-semibold mb-4">Forgot Password</h1>
      <form onSubmit={handleSubmit}>
        <TextInput
          id="email"
          type="email"
          placeholder="Enter your email"
          required
          onChange={(e) => setEmail(e.target.value)}
          className="mb-4"
        />
        {error && <Alert color="failure" className="mb-4">{error}</Alert>}
        {message && <Alert color="success" className="mb-4">{message}</Alert>}
        <Button type="submit" color="blue" className="w-full">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ForgotPassword;

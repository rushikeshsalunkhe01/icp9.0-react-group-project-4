import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreateAccount() {
  const [username, setUsername] = useState('');
  const [fullname, setFullname] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate inputs
    if (!username || !fullname || !password || !confirmPassword || !email || !mobile) {
      setError('Please fill all fields.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // Validate email format
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // Validate mobile number format (example: (123) 456-7890 or 1234567890)
    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(mobile)) {
      setError('Please enter a valid mobile number.');
      return;
    }

    // Check if username or email already exists
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const isUsernameTaken = storedUsers.some(user => user.username === username);
    const isEmailTaken = storedUsers.some(user => user.email === email);
    if (isUsernameTaken) {
      setError('Username is already taken.');
      return;
    }
    if (isEmailTaken) {
      setError('Email is already registered.');
      return;
    }

    // Store new user data
    const newUser = { username, fullname, password, email, mobile };
    storedUsers.push(newUser);
    localStorage.setItem('users', JSON.stringify(storedUsers));

    alert('Account created successfully!');
    localStorage.setItem('loggedInUser', JSON.stringify(newUser));
    navigate('/home');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8F9FA] mt-33">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">
        <h2 className="text-[32px] font-bold text-[#333333] text-center mb-4">CREATE ACCOUNT</h2>
        <form onSubmit={handleSubmit}>
          {error && <div className="text-red-500 text-center mb-4">{error}</div>}

          <div className="mb-4">
            <label className="block text-[#333333] text-sm font-medium">Username</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#008000]"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-[#333333] text-sm font-medium">Full Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#008000]"
              placeholder="Enter full name"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-[#333333] text-sm font-medium">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#008000]"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-[#333333] text-sm font-medium">Mobile Number</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#008000]"
              placeholder="Enter mobile number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-[#333333] text-sm font-medium">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#008000]"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-[#333333] text-sm font-medium">Confirm Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#008000]"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-[#008000] text-white py-3 rounded-lg hover:bg-green-700"
            >
              REGISTER
            </button>
          </div>
        </form>

        <div className="flex justify-between mt-4">
          <button 
            className="w-[45%] bg-[#004080] text-white py-2 rounded-lg hover:bg-blue-800"
            onClick={() => navigate('/login')} 
          >
            BACK TO LOGIN
          </button>
          <button 
            className="w-[45%] bg-[#FFA500] text-white py-2 rounded-lg hover:bg-orange-100"
            onClick={() => navigate('/forgot-account')}
          >
            FORGOT PASSWORD?
          </button>
        </div>
      </div>
    </div>
  );
}

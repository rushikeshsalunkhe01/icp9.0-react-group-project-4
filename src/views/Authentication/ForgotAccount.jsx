import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function ForgotAccount() {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const user = storedUsers.find(user => user.username === usernameOrEmail || user.email === usernameOrEmail);
    if (user) 
    {
      setMessage('Account details sent to your email.');
    } 
    else 
    {
      setMessage('No account found with that username or email.');
    }
};
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8F9FA] mt-15">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">
        <h2 className="text-[32px] font-bold text-[#333333] text-center mb-4">Forgot Account Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-[#333333] text-sm font-medium">Enter Username or Email</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#008000]"
              placeholder="Enter username or email"
              value={usernameOrEmail}
              onChange={(e) => setUsernameOrEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-[#008000] text-white py-3 rounded-lg hover:bg-green-700"
            >
              SUBMIT
            </button>
          </div>
        </form>
        {message && (
          <div className="text-center text-sm text-[#333333] mt-4">
            <p>{message}</p>
          </div>
        )}
        <div className="flex justify-between mt-4">
          <button 
            className="w-[45%] bg-[#004080] text-white py-2 rounded-lg hover:bg-blue-800"
            onClick={() => navigate('/login')} 
          >
            BACK TO LOGIN
          </button>
        </div>
      </div>
    </div>
  );
}
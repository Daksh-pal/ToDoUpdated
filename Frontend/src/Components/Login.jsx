import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/user/login', {
        username,
        password
      });
      localStorage.setItem('token', response.data.token);
      navigate('/allTasks');
      toast.success("Successfully logged in");
    } catch (error) {
      console.log(error);
      toast.error("Unauthorized Access");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-white mb-6">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder='Username'
            onChange={e => setUsername(e.target.value)}
            className="w-full p-3 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-700 text-white placeholder-gray-400"
          />
          <input
            type="password"
            placeholder='Password'
            onChange={e => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-700 text-white placeholder-gray-400"
          />
          <button
            type="submit"
            className="w-full py-3 bg-green-500 text-white font-semibold rounded hover:bg-green-600 transition duration-300"
          >
            Login
          </button>
          <p className="text-gray-300 text-center">
            Don't have an account? <Link to='/register' className="text-green-400 hover:underline">Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

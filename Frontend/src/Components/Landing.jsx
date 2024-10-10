import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <Navbar />
      <div className="flex flex-col items-center justify-center flex-grow">
        <h1 className="text-4xl font-bold text-white mb-4">Welcome to the To Do App</h1>
        <Link
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300"
          to='/register'
        >
          Start your journey here...
        </Link>
      </div>
    </div>
  );
}

export default Landing;

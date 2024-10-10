import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <Link to="/">
          <h2 className="text-2xl font-semibold text-white text-center">To Do App</h2>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

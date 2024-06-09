import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-green-200 to-blue-300">
      <div className="flex space-x-8">
        <Link to="/organization">
          <button className="px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-bold rounded shadow-md">
            Organization
          </button>
        </Link>
        <Link to="/user">
          <button className="px-6 py-3 bg-gradient-to-r from-purple-400 to-pink-500 hover:from-purple-500 hover:to-pink-600 text-white font-bold rounded shadow-md">
            User
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;

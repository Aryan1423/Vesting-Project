import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = ({ connectWallet }) => {
  const navigate = useNavigate();

  const handleConnectWallet = async () => {
    await connectWallet();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-green-200 to-blue-300">
      <nav className="flex justify-between items-center p-6 bg-white shadow-md">
        <h1 className="text-2xl font-bold text-gray-800">Vesting DApp</h1>
        <button
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded"
          onClick={handleConnectWallet}
        >
          Connect Wallet
        </button>
      </nav>
      <div className="flex flex-col justify-center items-center flex-grow p-6">
        <h2 className="text-3xl font-bold mb-4">Welcome to the Vesting DApp</h2>
        <p className="text-center mb-6">
          This decentralized application allows organizations to create and manage token vesting schedules. Connect your wallet to get started!
        </p>
      </div>
      <div className="flex justify-start p-6">
        <p className="text-gray-600">By Aryan</p>
      </div>
    </div>
  );
};

export default Home;

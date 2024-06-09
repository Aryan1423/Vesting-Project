import React, { useState } from 'react';

const User = ({ contract }) => {
  const [balance, setBalance] = useState(0);

  const claimTokens = async () => {
    try {
      const tx = await contract.claim();
      await tx.wait();
      alert('Tokens claimed successfully!');
    } catch (err) {
      alert(err.message);
    }
  };

  const checkBalance = async () => {
    try {
      const balance = await contract.getclaimed();
      setBalance(balance.toString());
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center space-y-8 bg-gradient-to-r from-green-200 to-blue-300">
      <div className="bg-white p-8 rounded-lg shadow-md w-80">
        <h2 className="text-xl font-bold mb-4">Claim Tokens</h2>
        <button
          className="px-4 py-2 bg-red-500 hover:bg-red-700 text-white font-bold rounded w-full"
          onClick={claimTokens}
        >
          Claim
        </button>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md w-80">
        <h2 className="text-xl font-bold mb-4">Check Balance</h2>
        <button
          className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded w-full"
          onClick={checkBalance}
        >
          Check Balance
        </button>
        <p className="mt-2">Balance: {balance}</p>
      </div>
    </div>
  );
};

export default User;

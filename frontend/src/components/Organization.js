import React, { useState } from 'react';

const Organization = ({ contract }) => {
  const [name, setName] = useState('');
  const [token, setToken] = useState(0);
  const [holderAddress, setHolderAddress] = useState('');
  const [post, setPost] = useState('');
  const [vestingTime, setVestingTime] = useState(0);
  const [whitelistAddress, setWhitelistAddress] = useState('');

  const registerOrganisation = async () => {
    try {
      const tx = await contract.addorg(name, await contract.signer.getAddress(), token);
      await tx.wait();
      alert('Organisation registered successfully!');
    } catch (err) {
      alert(err.message);
    }
  };

  const createHolder = async () => {
    try {
      const tx = await contract.addholder(holderAddress, post, vestingTime, token);
      await tx.wait();
      alert('Holder created successfully!');
    } catch (err) {
      alert(err.message);
    }
  };

  const whitelistAddr = async () => {
    try {
      const tx = await contract.whitelistAddress(whitelistAddress);
      await tx.wait();
      alert('Address whitelisted successfully!');
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center space-y-8 bg-gradient-to-r from-green-200 to-blue-300">
      <div className="bg-white p-8 rounded-lg shadow-md w-80">
        <h2 className="text-xl font-bold mb-4">Register Organisation</h2>
        <input
          type="text"
          placeholder="Name"
          className="border p-2 mb-2 w-full"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Token"
          className="border p-2 mb-2 w-full"
          onChange={(e) => setToken(Number(e.target.value))}
        />
        <button
          className="px-4 py-2 bg-green-500 hover:bg-green-700 text-white font-bold rounded w-full"
          onClick={registerOrganisation}
        >
          Register
        </button>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md w-80">
        <h2 className="text-xl font-bold mb-4">Create Holder</h2>
        <input
          type="text"
          placeholder="Holder Address"
          className="border p-2 mb-2 w-full"
          onChange={(e) => setHolderAddress(e.target.value)}
        />
        <input
          type="text"
          placeholder="Post"
          className="border p-2 mb-2 w-full"
          onChange={(e) => setPost(e.target.value)}
        />
        <input
          type="number"
          placeholder="Vesting Time"
          className="border p-2 mb-2 w-full"
          onChange={(e) => setVestingTime(Number(e.target.value))}
        />
        <input
          type="number"
          placeholder="Token"
          className="border p-2 mb-2 w-full"
          onChange={(e) => setToken(Number(e.target.value))}
        />
        <button
          className="px-4 py-2 bg-purple-500 hover:bg-purple-700 text-white font-bold rounded w-full"
          onClick={createHolder}
        >
          Create
        </button>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md w-80">
        <h2 className="text-xl font-bold mb-4">Whitelist Address</h2>
        <input
          type="text"
          placeholder="Address"
          className="border p-2 mb-2 w-full"
          onChange={(e) => setWhitelistAddress(e.target.value)}
        />
        <button
          className="px-4 py-2 bg-yellow-500 hover:bg-yellow-700 text-white font-bold rounded w-full"
          onClick={whitelistAddr}
        >
          Whitelist
        </button>
      </div>
    </div>
  );
};

export default Organization;

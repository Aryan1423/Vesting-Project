import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ethers } from 'ethers';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Organization from './components/Organization';
import User from './components/User';
import './index.css';

const App = () => {
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [contract, setContract] = useState(null);
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  const connectWallet = async () => {
    try {
      if (!window.ethereum) throw new Error('No crypto wallet found');
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      setProvider(provider);
      setSigner(signer);

      const aryanContractAddress = '0xAab01EEbc6c4a7001d3606Eaf3AF4614421CE99c'; 
      const AryanContractABI = require('./components/Aryan.json').abi;
      const contract = new ethers.Contract(aryanContractAddress, AryanContractABI, signer);
      setContract(contract);
      setIsWalletConnected(true);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home connectWallet={connectWallet} />} />
        <Route 
          path="/dashboard" 
          element={isWalletConnected ? <Dashboard /> : <Navigate to="/" />} 
        />
        <Route 
          path="/organization" 
          element={isWalletConnected ? <Organization contract={contract} /> : <Navigate to="/" />} 
        />
        <Route 
          path="/user" 
          element={isWalletConnected ? <User contract={contract} /> : <Navigate to="/" />} 
        />
      </Routes>
    </Router>
  );
};

export default App;

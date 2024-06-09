# Vesting DApp

Welcome to the Vesting DApp! This decentralized application allows organizations to create and manage token vesting schedules.
Live at [vesting-project.vercel.app](https://vesting-project.vercel.app/) check now! (using Sepolia test network)

## Description

The Vesting DApp is a decentralized application built using Solidity for smart contracts and React for the front-end. It leverages ethers.js to interact with the Ethereum blockchain. The application allows an organization to manage the vesting of their tokens securely and transparently.

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)
- MetaMask browser extension
- Hardhat

### Installation

1. **Clone the repository:**

   ```
   git clone https://github.com/your-username/vesting-dapp.git
   cd vesting-dapp
   ```
2. **Install dependencies:**
     ```
     cd frontend
     npm install
     ```
### Running the Application

1. **Deploy the Smart Contract:**
   ```
   npx hardhat run scripts/deploy.js --network sepolia
  
2. **Start the Frontend:**
    ```
    cd frontend
    npm start
    ```

3. **Connect MetaMask:**

     Open MetaMask and connect it to the Sepolia test network.
4. **Update Contract Address:**

    In "frontend/src/App.js", update the aryanContractAddress variable with your deployed contract address.

## Functionality
  ### Home Page
  
  The home page features a navbar with a "Connect Wallet" button and a brief introduction to the DApp. Users can connect their wallet to access the dashboard.

  ### Dashboard
  
  The dashboard has two main options: "Organization" and "User".

  ### Organization Page
  
  Register Organisation: Register an organization by specifying its name and token amount.
  Create Holder: Add a stakeholder with a vesting schedule.
  Whitelist Address: Whitelist an address to enable token claims.
    
  ### User Page
  
  Claim Tokens: Claim tokens after the vesting period has ended.
  Check Balance: Check the claimed token balance.
    
## Technologies Used

  Solidity
  
  Hardhat
  
  React
  
  ethers.js
  
  Tailwind CSS


## License

This project is licensed under the MIT License - see the LICENSE.md file for details



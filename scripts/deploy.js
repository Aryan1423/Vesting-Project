async function main() {
    const [deployer] = await ethers.getSigners();  
    const Aryan = await ethers.getContractFactory('Aryan');
    const aryan = await Aryan.deploy();
    await aryan.deployed();
  
    console.log('Contract deployed :', aryan.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  
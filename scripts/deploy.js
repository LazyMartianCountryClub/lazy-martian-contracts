const { ethers } = require('hardhat');

async function deploy() {
  const [deployer] = await ethers.getSigners();
  console.log('Deploying contracts with the account:', deployer.address);

  const LazyMartianCountryClub = await ethers.getContractFactory('LazyMartianCountryClub');
  const contract = await LazyMartianCountryClub.deploy();

  await contract.deployed();
  console.log('LazyMartianCountryClub deployed to:', contract.address);

  return contract.address;
}

deploy()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

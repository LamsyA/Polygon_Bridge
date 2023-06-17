const { ethers } = require("hardhat");

async function main() {
  const EasyNFT = await ethers.getContractFactory("EasyNFT");
  const easynft = await EasyNFT.deploy();

  await easynft.deployed();

  console.log("EasyNFT deployed to:", easynft.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

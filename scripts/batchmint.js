const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigner();
  const EasyNFT = await ethers.getContractFactory("EasyNFT");
  const easynft = await EasyNFT.attach("0xa54aE2e52Be1269B19Aa072A79B8D6CFDe087b20");

  const quantity = 5; // Number of NFTs to mint

  console.log("Batch minting", quantity, "NFTs...");

  const mintTx = await easynft.connect(deployer).mintNFT(quantity);
  await mintTx.wait();

  console.log("Successfully minted", quantity, "NFTs.");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

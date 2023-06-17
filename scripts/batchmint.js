const { ethers } = require("hardhat");

async function main() {
  // const [deployer] = await ethers.getSigner();
  const EasyNFT = await ethers.getContractFactory("EasyNFT");
  const easynft = await EasyNFT.attach("0x17886eDece693248aFf0c1EB225aA46c7e85cf2A");

  const quantity = 5; // Number of NFTs to mint

  console.log("Batch minting", quantity, "NFTs...");

  const mintTx = await easynft.mintNFT(5);
  await mintTx.wait();

  console.log("Successfully minted", quantity, "NFTs.");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

const { ethers } = require("hardhat");

async function main() {
  const Signer = await ethers.getSigners();

  // Get ERC721 contract instance on Polygon Mumbai
  const EasyNFT = await ethers.getContractFactory("EasyNFT");
  const easynft = await EasyNFT.attach("0x79900000B214827062E6c1A3c81AA8bd6Def1606");

  // Test balanceOf on Polygon Mumbai
  const balance = await easynft.balanceOf("0xCce628e28C4466E2FdF89Ca7154aDffcB4f1F3c1");
  console.log("\n Balance of", "<MUMBAI_RECEIVER_ADDRESS>", "on Polygon Mumbai:", balance.toString());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

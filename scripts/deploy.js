// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
 

  const EasyNFT = await hre.ethers.getContractFactory("EasyNFT");
  const easynft = await EasyNFT.deploy();

  await easynft.deployed();

  console.log(
    ` deployed to: ${easynft.address}`
  );

  const minting = await easynft.mintNFT(5)
	await minting.wait()

  console.log('======================>')
	console.log("Successfully minted")
}
pattern
// We recommend this  to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

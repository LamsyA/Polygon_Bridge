const { ethers } = require("hardhat");
const { FXRootContractAbi } = require("../abi/FXRootContractAbi");

async function main() {
  const [deployer] = await ethers.getSigners();

  // Get ERC721 contract instance
  const EasyNFT = await ethers.getContractFactory("EasyNFT");
  const easynft = await EasyNFT.attach("0x79900000B214827062E6c1A3c81AA8bd6Def1606");

  // Get FXRoot contract instance
  const fxRootAddress = "0xF9bc4a80464E48369303196645e876c8C7D972de"; // FxRoot contract address on Mumbai
  const fxRoot = await ethers.getContractAt(FXRootContractAbi, fxRootAddress);

  // Approve NFTs for transfer
  const quantity = [0, 1, 2, 3, 4]; // Number of NFTs to transfer
  const approveTx = await easynft.connect(deployer).setApprovalForAll(fxRootAddress, true);
  await approveTx.wait();

  // Batch Deposit NFTs to the Bridge
  for (let i = 0; i < quantity; i++) {
    const depositTx = await fxRoot.connect(deployer).deposit(
      easynft.address,
      "0xCce628e28C4466E2FdF89Ca7154aDffcB4f1F3c1", // "<POLYGON_RECEIVER_ADDRESS>",
      quantity[i],
      '0x6566' 
    );
    await depositTx.wait();
  }

  console.log("NFTs approved and batch deposited to Polygon Mumbai.");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

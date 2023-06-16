const { ethers } = require("hardhat");
const { FXRootContractAbi } = require("../abi/FXRootContractAbi");

async function main() {
  const bridgeAddress = "0xF9bc4a80464E48369303196645e876c8C7D972de"; // Replace with the address of the FxPortal Bridge contract

  const EasyNFT = await ethers.getContractFactory("EasyNFT");
  const easynft = await EasyNFT.attach("0x959922bE3CAee4b8Cd9a407cc3ac1C251C2007B1"); // Replace with the address of your deployed EasyNFT contract

  const transferAccount = await ethers.provider.getSigner(); // Signer account for transferring
  const nftIdsToTransfer = [1, 2, 3, 4, 5]; // Array of NFT IDs to transfer

  // Approve the FxPortal Bridge contract to transfer NFTs
  for (let i = 0; i < nftIdsToTransfer.length; i++) {
    const approvalTx = await easynft.connect(transferAccount).approve(bridgeAddress, nftIdsToTransfer[i]);
    await approvalTx.wait();
    console.log("NFT approved for transfer:", approvalTx.hash);
  }

  // Transfer the NFTs to Polygon Mumbai
  const fxRoot = await ethers.getContractAt(FXRootContractAbi, bridgeAddress);
  const transferTx = await fxRoot.deposit(
    easynft.address,
    transferAccount.address,
    nftIdsToTransfer ,
    '0x6566' // Destination network name (e.g., "Mumbai")
    // Array of NFT IDs to transfer
  );
  await transferTx.wait();

  console.log("NFTs transferred to Polygon Mumbai:", transferTx.hash);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

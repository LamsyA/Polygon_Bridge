	// We require the Hardhat Runtime Environment explicitly here. This is optional
	// but useful for running the script in a standalone fashion through `node <script>`.
	//
	// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
	// will compile your contracts, add the Hardhat Runtime Environment's members to the
	// global scope, and execute the script.
	const hre = require("hardhat");
	const {FXRootContractAbi} = require("../abi/FXRootContractAbi")

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

	// const easy = await ethers.getContractAt(
	// 		'EasyNFT',
	// 		easynft.address
	// 		)
	// const fxRoot = await ethers.getContractAt(
	// 	FXRootContractAbi,
	// 	'0xF9bc4a80464E48369303196645e876c8C7D972de'
	// )
	// 	// await nftCollection.approve(fxRoot.address, 1)
	// 	await fxRoot.deposit(
	// 		easy.address,
	// 		'0x6BeF65D67c45505bA9BD5A747bA18Bb078E63549',
	// 		1,
	// 		'0x6566'
	// 	)
	// 	console.log('NFT approved and deposited')
	}



	main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
	});

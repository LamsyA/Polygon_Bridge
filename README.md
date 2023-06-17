
# ERC721 NFT Deployment and Transfer using Hardhat and Polygon

This repository contains an example implementation of deploying an ERC721 NFT contract to the Goerli Ethereum Testnet, minting NFTs, and transferring them from Ethereum to the Polygon Mumbai network using the FxPortal Bridge. The solution is built using Hardhat, an Ethereum development environment, and leverages the Polygon network for fast and cost-effective transactions.

## Prerequisites

Before running the deployment and transfer scripts, ensure you have the following dependencies installed:

- Node.js (v14 or later)
- npm (Node Package Manager)

## Installation

1. Clone this repository to your local machine:

   ```shell
   git clone https://github.com/LamsyA/Polygon_Bridge.git
   ```

2. Navigate to the project directory:

   ```shell
   cd repository
   ```

3. Install the required dependencies:

   ```shell
   npm install
   ```

## Configuration

Before running the scripts, you need to configure the deployment and transfer parameters in the script files.

1. Open the `scripts/deploy.js` file and replace the placeholder values with your desired configuration:

   - Set the value of `MAX_SUPPLY_QUANTITY` to the maximum number of NFTs you want to allow for minting.

2. Open the `scripts/transfer.js` file and replace the placeholder values with your desired configuration:

   - Replace `<ERC721_CONTRACT_ADDRESS>` with the actual address of the deployed ERC721 contract on Goerli.
   - Replace `<POLYGON_RECEIVER_ADDRESS>` with the address where you want to receive the NFTs on the Polygon Mumbai network.
   - Replace `<TOKEN_ID>` with the specific token ID(s) of the NFTs you want to transfer.
   - Replace `<DEPOSIT_DATA>` with the required deposit data for the FxPortal Bridge.

## Usage

### Deploying ERC721 Contract

To deploy the ERC721 contract to the Goerli Ethereum Testnet, run the following command:

```shell
npx hardhat run scripts/deploy.js --network goerli
```

The script will deploy the contract and provide the address where the contract is deployed.

### Minting NFTs

To mint NFTs using the deployed ERC721 contract, run the following command:

```shell
npx hardhat run scripts/batchmint.js --network goerli
```

The script will mint the specified number of NFTs and assign them to your address.

### Transferring NFTs to Polygon Mumbai

To transfer the minted NFTs from Ethereum to the Polygon Mumbai network using the FxPortal Bridge, run the following command:

```shell
npx hardhat run scripts/batchtransfer.js --network goerli
```

The script will approve the NFTs for transfer, deposit them to the bridge, and initiate the transfer process to Polygon Mumbai.

## Testing Balance on Polygon Mumbai

To test the balance of your NFTs on the Polygon Mumbai network, run the following command:

```shell
npx hardhat run scripts/balance.js --network mumbai
```

The script will retrieve and display the current balance of your NFTs on Polygon Mumbai.

## Troubleshooting

If you encounter any issues during the deployment or transfer process, please ensure that:

- You have specified the correct contract addresses, token IDs, and deposit data in the script files.
- You are connected to the appropriate network (Goerli for deployment, Mumbai for transfer and balance check).
- Your account has sufficient funds for gas fees on the respective networks.

## License

This project is licensed under the [MIT License](LICENSE).

Feel free to modify and adapt

 the code to suit your specific requirements.




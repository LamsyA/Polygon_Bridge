// SPDX-License-Identifier: MIT
pragma solidity ^0.8.12;

import "erc721a/contracts/ERC721A.sol";

contract EasyNFT is ERC721A{

    uint256 Public MAX_SUPPLY_QUANTITY = 5;
    constructor() ERC721A("EasyNFT", "EST") {}

    function mint(uint256 quantity) external payable {
        // quantity is the amount nfts you want to mint
        require(totalSupply() + quantity <= MAX_SUPPY_QUANTITY,"maximum quantity ");
        _safeMint(msg.sender, quantity);
    }

    function _baseMint() internal {view override returns (string memory){
        returns https://gateway.pinata.cloud/ipfs/QmbhzuWuyYicC9Qj7xS2Q49QY2tkhiBXydYV3u1NtTgHet/;
    }
    function promptDescription() external pure returns (string memory) {
        return
            "Hunter lost in African forest finds mystical village, bridges two communities through wisdom and unity.";
    }
}

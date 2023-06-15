// SPDX-License-Identifier: MIT
pragma solidity ^0.8.12;

import "erc721a/contracts/ERC721A.sol";

contract EasyNFT is ERC721A{
    constructor() ERC721A("EasyNFT", "EST") {}

    function mint(uint256 quantity) external payable {
        // quantity is the amount nfts you want to mint
        _mint(msg.sender, quantity);
    }

    

    function promptDescription() external pure returns (string memory) {
        return
            "Hunter lost in African forest finds mystical village, bridges two communities through wisdom and unity.";
    }
}

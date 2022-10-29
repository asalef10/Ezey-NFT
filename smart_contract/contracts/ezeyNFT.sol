// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "./interfaces/IEventEzeyNFT.sol";
import "base64-sol/base64.sol";
import "./ezeyNftEvent.sol";



contract ezeyNFT is ERC721  {
    address private eventContractAddress;
    string internal nameNFT;
    string internal symbolNFT;
    uint internal walletUserID;


  uint256 internal tokenCounter;
    constructor(string memory name, string memory symbol,uint walletID) 
     ERC721(name,symbol)
    { 
    nameNFT= name;
    symbolNFT = symbol;
    walletUserID = walletID;
    eventContractAddress =  0x2Bf63F3dbfdABe7103B1cbD9982Ac62356295B7E;
    tokenCounter = 0;

     }
  
    function mintNFT(string memory tokenURI,string memory description) external  {
           string memory formatToken = formatTokenURI(tokenURI,description);
          _mint(msg.sender, tokenCounter); 
        //   _setTokenURI(tokenCounter,formatToken);
          tokenCounter++;
        // IEventEzeyNFT(eventContractAddress).newEvent(nameNFT,symbolNFT,tokenURI,description,walletUserID,msg.sender);

    }

    function formatTokenURI(string memory imageURI,string memory description) internal pure returns (string memory) {
        return string(
                abi.encodePacked(
                    "data:application/json;base64,",
                    Base64.encode(
                        bytes(
                          abi.encodePacked(
                                '{"service":"Ezey-NFT',
                                '", "description":"',description,'", "banner_image_url":"", "image":"',imageURI,'"}'
                            )
                        )
                    )
                )
            );
    }

   function tokenCounterNumber()external view returns(uint){
      return tokenCounter; 
}
}
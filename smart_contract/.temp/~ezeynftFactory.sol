// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "./~ezeyNFT.sol"; 
contract ezeynftFactory{

   mapping(address=>address) internal lastContractAddress;
   mapping(address=>userNFTS[]) internal listNFT;
   mapping(address=>uint) internal walletID;
   uint public numberID;

   struct userNFTS{
      string nameSYMBOL;
      address contractAddress;
   }

     constructor(){   
        numberID = 7001;
} 

function createNFT( string memory name, string memory symbol)public{
   if(walletID[msg.sender]==0){
    numberID++;
    walletID[msg.sender] = numberID;
     }
   ezeyNFT newNFT = new ezeyNFT(name,symbol,walletID[msg.sender]);
   userNFTS memory list = userNFTS(symbol,address(newNFT));
   listNFT[msg.sender].push(list);
   lastContractAddress[msg.sender] = address(newNFT);



  }
  function getWalletID(address walletAddress)public view returns(uint){
    return walletID[walletAddress];
  }


  function getContractAddressBySymbol(string memory symbol,address userAddress)public view returns(address){
   uint index= listNFT[userAddress].length;
   userNFTS[] memory userList= listNFT[userAddress];
   for(uint i =0;i<index;i++){
   if(keccak256(abi.encodePacked(userList[i].nameSYMBOL)) == keccak256(abi.encodePacked(symbol))){
   return userList[i].contractAddress;
   }
}
  }
  function showListNFT(address userAddress)public view returns(userNFTS[] memory){
   return listNFT[userAddress];
}
  function returnAddress()public view returns(address){
   return msg.sender;
}
  
  function getNftAddress(address userWallet)public view returns(address){
     return lastContractAddress[userWallet]; 
  }
 
 }
   
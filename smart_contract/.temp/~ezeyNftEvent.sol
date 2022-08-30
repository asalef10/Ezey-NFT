// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract ezeyNftEvent{

    event newCollection(string name,string symbol,string tokenURI,string description,uint256 walletID,address addressWallet);

    function newEvent(string memory name,string memory symbol, string memory tokenURI,string memory description,uint256 walletID,address addressWallet)external{
       emit newCollection(name,symbol,tokenURI,description,walletID,addressWallet);
  }
 }
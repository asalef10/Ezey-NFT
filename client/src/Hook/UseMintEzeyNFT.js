import Web3 from "web3";

const useEzeyNFTJSON = require("../Artifacts/EzeyNFT.json");

const UseMintEzeyNFT = async (contractAddress, userAccount, nftURI,Description) => {
  const web3 = new Web3(window.ethereum);
  let ezeyNFT = new web3.eth.Contract(useEzeyNFTJSON.abi, contractAddress);


  const mint = await ezeyNFT.methods
  .mintNFT(nftURI,Description)
  .send({ from: userAccount });
  return mint;





};

export default UseMintEzeyNFT;

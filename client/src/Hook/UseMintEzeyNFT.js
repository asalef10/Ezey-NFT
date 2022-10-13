import Web3 from "web3";

const useEzeyNFTJSON = require("../Artifacts/EzeyNFT.json");

const UseMintEzeyNFT = async (
  contractAddress,
  userAccount,
  nftURI,
  Description
) => {
  const web3 = new Web3(window.ethereum);
  let ezeyNFT = new web3.eth.Contract(useEzeyNFTJSON.abi, contractAddress);
  try {
    let estimateGas = await ezeyNFT.methods
      .mintNFT(nftURI, Description)
      .estimateGas({ from: userAccount });

    const mint = await ezeyNFT.methods
      .mintNFT(nftURI, Description)
      .send({ from: userAccount, gas: estimateGas, gasPrice: "40000000000" });
    return mint;
  } catch (error) {
    console.log(error);
  }
};

export default UseMintEzeyNFT;

import Web3 from "web3";
import { useWeb3React } from "@web3-react/core";

const useEzeyNFTJSON = require("../Artifacts/EzeyNFTFactory.json");

const useEzeyNFTFactory = () => {
  const { account } = useWeb3React();

  const web3 = new Web3(window.ethereum);

  let ezeyNFT = new web3.eth.Contract(
    useEzeyNFTJSON.abi,
    "0x8F48C09F7cafAb5a5fA1723f70b87976c8648e74"
  );

  async function createNFT(nftName, nftSymbol) {
    try {
      let estimateGas = await ezeyNFT.methods
        .createNFT(nftName, nftSymbol)
        .estimateGas({ from: account });

      const newNFT = await ezeyNFT.methods
        .createNFT(nftName, nftSymbol)
        .send({ from: account, gas: estimateGas, gasPrice: "40000000000" });
      return newNFT;
    } catch (error) {
      console.log(error);
    }
  }
  async function getNftAddress() {
    try {
      const nftAddress = await ezeyNFT.methods.getNftAddress(account).call();
      return nftAddress;
    } catch (error) {
      console.log(error);
    }
  }
  async function getContractAddressBySymbol(Symbol) {
    try {
      const contractAddress = await ezeyNFT.methods
        .getContractAddressBySymbol(Symbol, account)
        .call();
      console.log(contractAddress);
      return contractAddress;
    } catch (error) {
      console.log(error);
    }
  }
  async function listUserNFTs() {
    try {
      const listNFT = await ezeyNFT.methods.showListNFT(account).call();
      return listNFT;
    } catch (error) {
      console.log(error);
    }
  }
  async function arrayPhotoURI(nftURI) {
    try {
      const URI = await ezeyNFT.methods
        .arrayPhotoURI(nftURI)
        .send({ from: account });
      return URI;
    } catch (error) {
      console.log(error);
    }
  }

  async function getWalletID() {
    try {
      const walletID = await ezeyNFT.methods.getWalletID(account).call();
      return walletID;
    } catch (error) {
      console.log(error);
    }
  }
 

  return {
    createNFT,
    getNftAddress,
    getContractAddressBySymbol,
    listUserNFTs,
    arrayPhotoURI,
    getWalletID,
   };
};
export default useEzeyNFTFactory;

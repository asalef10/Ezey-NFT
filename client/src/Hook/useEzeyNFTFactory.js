import Web3 from "web3";
import { useWeb3React } from "@web3-react/core";

const useEzeyNFTJSON = require("../Artifacts/EzeyNFTFactory.json");
const useEzeyNFTFactory = () => {
  const { account } = useWeb3React();

  const web3 = new Web3(window.ethereum);

  let ezeyNFT = new web3.eth.Contract(
    useEzeyNFTJSON.abi,
    "0xa36Eb0aa24Ea65306d4f2fEE5C692F2a7E505507"
  );

  async function createNFT(nftName, nftSymbol) {
    const newNFT = await ezeyNFT.methods
      .createNFT(nftName, nftSymbol)
      .send({ from: account });
    return newNFT;
  }
  async function getNftAddress() {
    const nftAddress = await ezeyNFT.methods.getNftAddress(account).call();
    return nftAddress;
  }
  async function getContractAddressBySymbol(Symbol) {
    const contractAddress = await ezeyNFT.methods
      .getContractAddressBySymbol(Symbol, account)
      .call();
    console.log(contractAddress);
    return contractAddress;
  }
  async function listUserNFTs() {
    const listNFT = await ezeyNFT.methods.showListNFT(account).call();
    return listNFT;
  }
  async function arrayPhotoURI(nftURI) {
    const URI = await ezeyNFT.methods
      .arrayPhotoURI(nftURI)
      .send({ from: account });
    return URI;
  }

  async function getWalletID() {
    const walletID = await ezeyNFT.methods.getWalletID(account).call();
    return walletID;
  }
  async function IsFirstCollection() {
    const boolIsFirstCollection = await ezeyNFT.methods
      .showIsFirstCollection(account)
      .call();
    return boolIsFirstCollection;
  }

  return {
    createNFT,
    getNftAddress,
    getContractAddressBySymbol,
    listUserNFTs,
    arrayPhotoURI,
    getWalletID,
    IsFirstCollection,
  };
};
export default useEzeyNFTFactory;

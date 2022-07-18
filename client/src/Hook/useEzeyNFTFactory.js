import Web3 from "web3";
import { useWeb3React } from "@web3-react/core";

const useEzeyNFTJSON = require("../Artifacts/EzeyNFTFactory.json");
const useEzeyNFTFactory = () => {
  const { account } = useWeb3React();

  const web3 = new Web3(window.ethereum);

  let ezeyNFT = new web3.eth.Contract(
    useEzeyNFTJSON.abi,
    "0x90507FFc51Bef6DbbEAec12BEd5657856a772885"
  );

  async function createNFT(nftName, nftSymbol) {


    let estimateGas = await ezeyNFT.methods
      .createNFT(nftName, nftSymbol)
      .estimateGas({ from: account });
    
    const newNFT = await ezeyNFT.methods
      .createNFT(nftName, nftSymbol)
      .send({ from: account ,gas: estimateGas, gasPrice: "40000000000"  });
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

import { createContext, useContext, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";
import useEzeyNFTFactory from "../Hook/useEzeyNFTFactory";

export const MyContext = createContext();
export const MyProvider = MyContext.Provider;

const UseContext = ({ children }) => {
  const { listUserNFTs} = useEzeyNFTFactory();
  const injected = new InjectedConnector({
    supportedChainIds: [1, 3, 4, 5, 42, 137, 56, 43114, 80001, 421611],
  });

  const { account, activate } = useWeb3React();

  const [inputName, setInputName] = useState("");
  const [inputSymbol, setInputSymbol] = useState("");
  const [inputURI, setInputURI] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messageStatues, setMessageStatues] = useState("");
  const [colorMessage, setColorMessage] = useState("");
  const [contractAddress, setContractAddress] = useState("");

  const handleStatues = (message, colorMessage) => {
    setMessageStatues(message);
    setColorMessage(colorMessage);
    setTimeout(() => {
      setMessageStatues("");
      setColorMessage("");
    }, 3000);
  };

  const addressShortcut = (addressWallet) => {
    let address = `${addressWallet?.slice(0, 6)}...${addressWallet?.slice(
      -4
    )} `;
    return address;
  };

  const connectMetaMask = () => {
    if (window.ethereum) {
      activate(injected);
    } else {
      handleStatues(
        "To use ezeyNFT , please install metamask extension in the browser",
        "red"
      );
    }
  };
const fetchListNFT =async ()=>{
  let itemsCollection = await listUserNFTs();
  return itemsCollection
}
  
  const values = {
    connectMetaMask,
    account,
    inputName,
    setInputName,
    inputSymbol,
    setInputSymbol,
    inputDescription,
    setInputDescription,
    inputURI,
    setInputURI,
    addressShortcut,
    isLoading,
    setIsLoading,
    messageStatues,
    setMessageStatues,
    colorMessage,
    setColorMessage,
    contractAddress,
    setContractAddress,
    handleStatues,
    fetchListNFT
  };
  return <MyProvider value={values}>{children}</MyProvider>;
};

export const useGlobalContext = () => {
  return useContext(MyContext);
};
export default UseContext;

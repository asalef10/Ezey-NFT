import { createContext, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";

export const MyContext = createContext();
export const MyProvider = MyContext.Provider;

const UseContext = ({ children }) => {
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
  return (
    <MyProvider
      value={{
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
      }}
    >
      {children}
    </MyProvider>
  );
};
export default UseContext;

import { useGlobalContext } from "../UseContext/UseContext";
import useEzeyNFTFactory from "../Hook/UseEzeyNFTFactory";
import UseMintEzeyNFT from "../Hook/UseMintEzeyNFT";
import { useNavigate } from "react-router-dom";

const Methods = () => {
  let isFindCollection = false;
  let oldContractAddress;
  const history = useNavigate();
  const {
    account,
    inputName,
    inputSymbol,
    inputDescription,
    inputURI,
    setIsLoading,
   
    handleStatues,
  } = useGlobalContext();


  
  const { createNFT, getNftAddress, getContractAddressBySymbol,   } =
    useEzeyNFTFactory();

  const createCollection = async () => {
    try {
      if (!account) {
        alert("connect metaMask");
      } else {
        if (inputName && inputSymbol) {
          setIsLoading(true);
          await createNFT(inputName, inputSymbol);
          setIsLoading(false);
          handleStatues("The collection was created successfully", "green");
          setTimeout(() => {
            history("/Create-NFT");
          }, 3000);

          console.log(inputName);
        }
      }
    } catch (error) {
      setIsLoading(false);
      handleStatues(
        "There was an error creating the collection. Try again",
        "red"
      );
      console.log(error);
    }
  };

  const mintNFT = async () => {
    let contractAddressMint;
    try {
      if (!account) {
        alert("connect MetaMask");
      } else {
        setIsLoading(true);
        if (isFindCollection) {
          contractAddressMint = oldContractAddress;
        } else {
          let newContractAddress = await getNftAddress(account);
          contractAddressMint = newContractAddress;
          await UseMintEzeyNFT(
            contractAddressMint,
            account,
            inputURI,
            inputDescription
          );
          handleStatues("Uploading of NFT was successful. You can upload more NFT collections", "green");
        }
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      handleStatues(
        "There was an error creating the collection. Try again",
        "red"
      );

      console.log(error);
    }
  };

  const addItemToCollection = async () => {
    try {
      if (!account) {
        alert("connect metamask");
      } else {
        setIsLoading(true);

        let contract = await getContractAddressBySymbol(inputSymbol);
        if (contract === "0x0000000000000000000000000000000000000000") {
          handleStatues(
            "The Symbol not found, you can create new NFT.",
            "#f89797"
          );
        } else {
          isFindCollection = true;
          oldContractAddress = contract;
          handleStatues(
            "The Symbol found, you can add new NFT to collection.",
            "green"
          );
          setTimeout(() => {
            history("/Create-NFT");
          }, 3000);
        }
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);

      handleStatues(
        "There was an error creating the collection. Try again",
        "red"
      );
      console.log(error);
    }
  };
  return {
    createCollection,
    mintNFT,
    addItemToCollection,
  };
};
export default Methods;

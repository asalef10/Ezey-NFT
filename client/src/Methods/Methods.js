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
    setSuccessfullyNFT,
    setButtonIsOn,
  } = useGlobalContext();

  const { createNFT, getNftAddress, getContractAddressBySymbol } =
    useEzeyNFTFactory();

  const createCollection = async () => {
    if (!account) {
      alert("connect metaMask");
    } else {
      if (inputName && inputSymbol) {
        setButtonIsOn(true);
        setIsLoading(true);
        createNFT(inputName, inputSymbol)
          .then(() => {
            handleStatues("The collection was created successfully", "green");
            setTimeout(() => {
              history("/Create-NFT");
            }, 1000);
          })
          .catch((error) => {
            console.log(error);
            handleStatues(
              "There was an error creating the collection. Try again",
              "red"
            );
          })
          .finally(() => {
            setButtonIsOn(false);
            setIsLoading(false);
          });
      } else {
        handleStatues("The fields must be filled out", "red");
      }
    }
  };

  const handleMint = (contract) => {
    UseMintEzeyNFT(contract, account, inputURI, inputDescription)
      .then(() => {
        handleStatues(
          "Uploading of NFT was successful. You can upload more NFT collections",
          "green"
        );
        setSuccessfullyNFT((oldArray) => [...oldArray, inputURI]);
      })
      .catch((error) => {
        handleStatues(
          "There was an error creating the collection. Try again",
          "red"
        );
      })
      .finally(() => {
        setButtonIsOn(false);
        setIsLoading(false);
      });
  };
  const mintNFT = async () => {
    if (!account) {
      alert("Connect MetaMask");
    } else if (!inputURI) {
      handleStatues("The fields must be filled out", "red");
    } else {
      if (isFindCollection) {
        setButtonIsOn(true);
        setIsLoading(true);
        handleMint(oldContractAddress);
      } else {
        setButtonIsOn(true);
        setIsLoading(true);
        getNftAddress(account).then((account) => {
          handleMint(account);
        });
      }
    }
  };

  const addItemToCollection = async () => {
    try {
      if (!account) {
        alert("connect metamask");
      } else {
        if (!inputSymbol) {
          handleStatues("The fields must be filled out", "red");
        } else {
          setButtonIsOn(false);
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
            }, 1000);
          }
        }
      }
      setButtonIsOn(false);
      setIsLoading(false);
    } catch (error) {
      setButtonIsOn(false);
      setIsLoading(false);

      handleStatues(
        "There was an error search the collection. Try again",
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

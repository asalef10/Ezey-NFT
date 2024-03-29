import "./UserCollection.css";
import useEzeyNFTFactory from "../../../Hook/UseEzeyNFTFactory";
import UseEzeyFunctionsAPI from "../../../Methods/UseEzeyFunctionAPI";
import { useEffect, useState } from "react";
import { useGlobalContext } from "../../../UseContext/UseContext";
import Spinner from "../../fetchers/Spinner/Spinner";
import Message from "../../fetchers/Message/Message";
const UserCollection = () => {
  const { account, addressShortcut, fetchListNFT } = useGlobalContext();
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    fetchData();
  }, [account]);

  const [data, setData] = useState([]);
  const [listNFT, setListNFT] = useState([]);
  const [message, setMessage] = useState("");

  const { getDataById } = UseEzeyFunctionsAPI();
  const { getWalletID } = useEzeyNFTFactory();
  let countError = 0;
  const fetchData = async () => {
    try {
      setLoading(true);
      let listResult = await fetchListNFT();
      setListNFT(listResult);
      let walletID = await getWalletID();
      let nftData = await getDataById(walletID);
      setData(nftData.res);
      setLoading(false);
    } catch (error) {
      countError += 1;
      if (countError !== 20) {
        fetchData();
      }
      setLoading(false);
      setMessage("There was an error Try refresh.");
      console.log(error);
    }
  };

  const collectionList = listNFT.map((list) => {
    return <p className="collectionList">{list.nameSYMBOL}</p>;
  });
  return (
    <>
      <p className="heading">My Collections</p>

      {isLoading && (
        <div id="spinner">
          <Spinner />
        </div>
      )}
      {data[0] && (
        <Message
          text={`To sell your collections in "openSea", click the image.`}
        />
      )}
      <div id="container">
        <div id="idSideNav" className="sidenav">
          <div>
            <p id="titleCN">Collection List</p>
            <p
              onClick={() => {
                console.log(listNFT);
              }}
            >
              {collectionList && collectionList}
            </p>
          </div>
        </div>

        {!isLoading && (
          <div id={!data[0] ? "galleryID" : ""} className="gallery-image">
            {data[0] ? (
              data?.map((item) => {
                return (
                  <>
                    <div key={item.id} className="img-box">
                      <a
                        target={"_blank"}
                        href={`https://testnets.opensea.io/assets/mumbai/${item.contractAddress}/${item.tokenIds}`}
                      >
                        <img src={item?.NFTUrl} alt="collection NFT" />
                        <div className="transparent-box">
                          <div className="caption">
                            <p style={{ color: "aliceblue" }}>{item.name}</p>
                            <p
                              style={{ color: "aliceblue" }}
                              className="opacity-low"
                            >
                              {addressShortcut(item.addressWallet)}
                            </p>
                            <p
                              style={{ color: "aliceblue" }}
                              className="opacity-low"
                            >
                              {item.NFTSymbol}
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </>
                );
              })
            ) : collectionList.length === 0 ? (
              message ? (
                <h4>{message}</h4>
              ) : (
                <h4>You haven't yet created a NFT image collection.</h4>
              )
            ) : message ? (
              <h4>{message}</h4>
            ) : (
              <h4>There are no photos in the collection you created.</h4>
            )}
          </div>
        )}
      </div>
    </>
  );
};
export default UserCollection;

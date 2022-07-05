import "./UserCollection.css";
import useEzeyNFTFactory from "../../../Hook/UseEzeyNFTFactory";
import UseEzeyFunctionsAPI from "../../../Hook/UseEzeyFunctionAPI";
import { useEffect, useState } from "react";
import { useGlobalContext } from "../../../UseContext/UseContext";
import Spinner from "../../fetchers/Spinner/Spinner";
const UserCollection = () => {
  const { account, addressShortcut, fetchListNFT } = useGlobalContext();
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetchData();
  }, [account]);

  const [data, setData] = useState([]);
  const [listNFT, setListNFT] = useState([]);
  const [message, setMessage] = useState("");

  const { getDataById } = UseEzeyFunctionsAPI();
  const { getWalletID } = useEzeyNFTFactory();

  const fetchData = async () => {
    try {
      let listResult = await fetchListNFT();
      setListNFT(listResult);
      let walletID = await getWalletID();
      console.log(walletID);
      let nftData = await getDataById(walletID);
      setData(nftData.res);
      console.log(data);
      setLoading(false);
    } catch (error) {
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
      <p className="heading">My Collection</p>

      {isLoading && (
        <div id="spinner">
          <Spinner />
        </div>
      )}

      <div id="container">
        <div className="sidenav">
          <div>
            <p id="titleCN">C.N List</p>
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
          <div className="gallery-image">
            {!data.length == 0 ? (
              data?.map((item) => {
                return (
                  <>
                    <div className="img-box">
                      <img src={item?.NFTUrl} alt="collection NFT" />
                      <div className="transparent-box">
                        <div className="caption">
                          <p>{item.NFTSymbol}</p>
                          <p className="opacity-low">
                            {addressShortcut(item.addressWallet)}
                          </p>
                          <p className="opacity-low">Ezey-NFT</p>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })
            ) : collectionList.length === 0 ? (
              message ? (
                <h4>{message}</h4>
              ) : (
                <h4>You haven't yet created a NFT image collection</h4>
              )
            ) : message ? (
              <h4>{message}</h4>
            ) : (
              <h4>There are no photos in the collection you created</h4>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default UserCollection;

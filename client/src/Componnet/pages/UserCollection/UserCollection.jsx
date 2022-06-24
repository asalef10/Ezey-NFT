import "./UserCollection.css";
import useEzeyNFTFactory from "../../../Hook/useEzeyNFTFactory";
import UseEzeyFunctionsAPI from "../../../Hook/useEzeyFunctionAPI";
import { useEffect, useState } from "react";
import { useGlobalContext } from "../../../UseContext/UseContext";
const UserCollection = () => {
  const { account, addressShortcut, fetchListNFT } = useGlobalContext();
  useEffect(() => {
    fetchData();
  }, [account]);
  const [data, setData] = useState([]);
  const [listNFT, setListNFT] = useState([]);
  const { getDataById } = UseEzeyFunctionsAPI();
  const { getWalletID } = useEzeyNFTFactory();

  const fetchData = async () => {
    try {
      let walletID = await getWalletID();
      console.log(walletID);
      let nftData = await getDataById(walletID);
      setData(nftData.res);
      console.log(data);
      let listResult = await fetchListNFT();
      setListNFT(listResult);
    } catch (error) {
      console.log(error);
    }
  };

  const collectionList = listNFT.map((list) => {
    return (
      <p
        style={{ color: "black", textAlign: "center", background: "aliceblue" }}
      >
        {list.nameSYMBOL}
      </p>
    );
  });
  return (
    <>
      <p className="heading">My Collection</p>
      <div id="container">
        <div className="sidenav">
          <div>
            <p
              onClick={() => {
                console.log(listNFT);
              }}
            >
              {collectionList && collectionList}
            </p>
          </div>
        </div>
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
            <h4>You haven't yet created a NFT image collection</h4>
          ) : (
            <h4>There are no photos in the collection you created</h4>
          )}
        </div>
      </div>
    </>
  );
};

export default UserCollection;

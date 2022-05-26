import "./UserCollection.css";
import useEzeyNFTFactory from "../../../Hook/useEzeyNFTFactory";
import UseEzeyFunctionsAPI from "../../../Hook/useEzeyFunctionAPI";
import { useEffect, useContext, useState } from "react";
import { MyContext } from "../../../UseContext/UseContext";
const UserCollection = () => {
  const { account, addressShortcut } = useContext(MyContext);
  useEffect(() => {
    fetchData();
  }, [account]);
  const [data, setData] = useState([]);
  const [listNFT, setListNFT] = useState([]);
  const { getDataById } = UseEzeyFunctionsAPI();
  const { listUserNFTs, getWalletID } = useEzeyNFTFactory();

  const fetchData = async () => {
    try {
      let walletID = await getWalletID();
      console.log(walletID);
      let nftData = await getDataById(walletID);
      setData(nftData.res);
      console.log(data);
      let itemsCollection = await listUserNFTs();
      setListNFT(itemsCollection);
    } catch (error) {
      console.log(error);
    }
  };

  const collectionList = listNFT.map((list) => {
    return <p style={{ color: "black" }}>{list.nameSYMBOL}</p>;
  });
  return (
    <>
      <p className="heading">My Collection</p>
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
        {data?.map((item) => {
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
        })}
      </div>
    </>
  );
};

export default UserCollection;

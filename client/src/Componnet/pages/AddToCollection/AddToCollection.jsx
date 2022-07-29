import "./AddToCollection.css";
import { useGlobalContext } from "../../../UseContext/UseContext";
import Spinner from "../../fetchers/Spinner/Spinner";
import Methods from "../../../Methods/Methods";
import { useEffect } from "react";
import { useState } from "react";
import Steps from "../../fetchers/Steps/Steps";
const AddToCollection = () => {
  const [listNFT, setListNFT] = useState([]);
  const {
    setInputSymbol,
    messageStatues,
    colorMessage,
    isLoading,
    setIsLoading,
    fetchListNFT,
    account,
    buttonIsOn,
    setButtonIsOn,
  } = useGlobalContext();
  const { addItemToCollection } = Methods();
  useEffect(() => {
    setButtonIsOn(false);
    setIsLoading(false);
    fetchList();
  }, [account]);
  const fetchList = async () => {
    let resultList = await fetchListNFT();
    console.log(resultList);
    setListNFT(resultList);
  };

  const collectionList = listNFT.map((list) => {
    return (
      <>
        <p className="collectionList">{list.nameSYMBOL}</p>
      </>
    );
  });
  return (
    <>
      <Steps step1={"active"} text="Search Collection" />
      <section id="contact">
        <div className="container">
          <div id="sideN" className="sidenav">
            
            <div>
              {collectionList[0] && <p id="titleCN">Collection List</p>}
              {collectionList && collectionList}
            </div>
          </div>
          <div className="row">
            <div className="col-md-offset-2 col-md-8 col-sm-12">
              <div className="section-title">
                <h1 className="wow fadeInUp" data-wow-delay="0.3s">
                  Add Item To Another NFT Collection You Have
                </h1>
                <p className="wow fadeInUp" data-wow-delay="0.6s">
                  Adding items to a collection you've already created is simple,
                  quick, and easy. Choose the collection symbol and click on the
                  search button.
                </p>
                <h5 style={{ color: colorMessage }}>{messageStatues}</h5>
                {isLoading && <Spinner />}
              </div>
              <div className="contact-form wow fadeInUp" data-wow-delay="1.0s">
                <div id="contact-form">
                  <div id="simpleCon">
                    <div id="inputHandleO" className="col-md-6 col-sm-6">
                      <input
                        onChange={(e) => {
                          setInputSymbol(e.target.value);
                        }}
                        name="Symbol"
                        type="text"
                        className="form-control"
                        placeholder="DBZ"
                        required
                      />
                    </div>
                    <div className="col-md-offset-3 col-md-6 col-sm-offset-2 col-sm-8">
                      <input
                        disabled={buttonIsOn}
                        onClick={addItemToCollection}
                        name="submit"
                        type="submit"
                        className="form-control submit"
                        id="submit"
                        value="Search Collection"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default AddToCollection;

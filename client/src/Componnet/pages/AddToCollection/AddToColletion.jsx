import { useGlobalContext } from "../../../UseContext/UseContext";
import Spinner from "../../fetchers/Spinner/Spinner";
import Methods from "../../../Methods/Methods";
import { useEffect } from "react";
import { useState } from "react";
const AddToCollection = () => {
  const [listNFT, setListNFT] = useState([]);
  const {
    setInputSymbol,
    messageStatues,
    colorMessage,
    isLoading,
    fetchListNFT,
    account,
  } = useGlobalContext();
  const { addItemToCollection } = Methods();
  useEffect(() => {
    fetchList();
  }, [account]);
  const fetchList = async () => {
    let resultList = await fetchListNFT();
    console.log(resultList);
    setListNFT(resultList);
    // console.log(listNFT);
  };

  const collectionList = listNFT.map((list) => {
    return (
      <>
        <p
          style={{
            color: "black",
            textAlign: "center",
            background: "aliceblue",
          }}
        >
          {list.nameSYMBOL}
        </p>
      </>
    );
  });
  return (
    <section id="contact">
      <div className="container">
        <div className="sidenav">
          <div>
            {!collectionList.length==0 && <h3>collection's</h3>}
            <p>{collectionList && collectionList}</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-offset-2 col-md-8 col-sm-12">
            <div className="section-title">
              <h1 className="wow fadeInUp" data-wow-delay="0.3s">
                Add Item To Another NFT Collection You Have
              </h1>
              <p className="wow fadeInUp" data-wow-delay="0.6s">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna
                aliquam erat volutpat.
              </p>
              {<h5 style={{ color: colorMessage }}>{messageStatues}</h5>}
              {isLoading && <Spinner />}
            </div>
            <div className="contact-form wow fadeInUp" data-wow-delay="1.0s">
              <div id="contact-form">
                <div id="simpleCon">
                  <div className="col-md-6 col-sm-6">
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
  );
};
export default AddToCollection;

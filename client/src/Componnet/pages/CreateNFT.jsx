import Methods from "../../Methods/Methods";

import { useContext } from "react";
import { MyContext } from "../../UseContext/UseContext";
import Spinner from "../fetchers/Spinner/Spinner";
const CreateNFT = () => {
  const {
    setInputDescription,
    setInputURI,
    isLoading,
    colorMessage,
    messageStatues,
  } = useContext(MyContext);
  const { mintNFT } = Methods();

  return (
    <>
      <section id="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-offset-2 col-md-8 col-sm-12">
              <div className="section-title">
                <h1 className="wow fadeInUp" data-wow-delay="0.3s">
                  Create NFT
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
                  <div className="col-md-6 col-sm-6">
                    <input
                      onChange={(e) => {
                        setInputURI(e.target.value);
                      }}
                      name="name"
                      type="text"
                      className="form-control"
                      placeholder="www.imageURI.com"
                      required
                    />
                  </div>
                  <div className="col-md-12 col-sm-12">
                    <textarea
                      onChange={(e) => {
                        setInputDescription(e.target.value);
                      }}
                      name="message"
                      className="form-control"
                      placeholder="Description NFT item"
                      rows="6"
                      required
                    ></textarea>
                  </div>
                  <div className="col-md-offset-3 col-md-6 col-sm-offset-2 col-sm-8">
                    <input
                      onClick={mintNFT}
                      name="submit"
                      type="submit"
                      className="form-control submit"
                      id="submit"
                      value="Create NFT"
                    />
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
export default CreateNFT;

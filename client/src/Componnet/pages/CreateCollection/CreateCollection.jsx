import Methods from "../../../Methods/Methods";
import { useEffect } from "react";
import { useGlobalContext } from "../../../UseContext/UseContext";
import Spinner from "../../fetchers/Spinner/Spinner";
import Steps from "../../fetchers/Steps/Steps";

const CreateCollection = () => {
  const {
    setInputName,
    setInputSymbol,
    isLoading,
    messageStatues,
    colorMessage,
    buttonIsOn,
    setButtonIsOn
  } = useGlobalContext();

  const { createCollection } = Methods();

  useEffect(() => {
    setButtonIsOn(false);
    setInputSymbol("");
  }, []);

  return (
    <>
      <Steps step1={"active"} />
      <section id="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-offset-2 col-md-8 col-sm-12">
              <div className="section-title">
                <h1 className="wow fadeInUp" data-wow-delay="0.3s">
                  Create Collection NFT
                </h1>
                <p className="wow fadeInUp" data-wow-delay="0.6s">
                  Simple and faster creation of individual NFTs and collections
                  of NFTs is now possible{" "}
                </p>
                {<h5 style={{ color: colorMessage }}>{messageStatues}</h5>}
                {isLoading && <Spinner />}
              </div>
              <div className="contact-form wow fadeInUp" data-wow-delay="1.0s">
                <div id="contact-form">
                  <div className="col-md-6 col-sm-6">
                    <input
                      onChange={(e) => {
                        setInputName(e.target.value);
                      }}
                      name="name"
                      type="text"
                      className="form-control"
                      placeholder="Dragon Ball Z"
                      required={true}

                    />
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <input
                      onChange={(e) => {
                        setInputSymbol(e.target.value);
                      }}
                      name="symbol"
                      type="email"
                      className="form-control"
                      placeholder="DBZ"
                      required={true}
                    />
                  </div>
                  <div className="col-md-offset-3 col-md-6 col-sm-offset-2 col-sm-8">
                    <input
                      disabled={buttonIsOn}
                      onClick={createCollection}
                      name="submit"
                      type="submit"
                      className="form-control submit"
                      id="submit"
                      value="Create Collection"
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

export default CreateCollection;

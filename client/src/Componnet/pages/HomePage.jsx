import { useContext } from "react";
import { MyContext } from "../../UseContext/UseContext";
import AboutUs from "./AboutUs";
import CollectionGallery from "./CollectionGallery";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const HomePage = () => {
  const { connectMetaMask, account, messageStatues, colorMessage } =
    useContext(MyContext);
  return (
    <>
      {/* <section className="preloader">
        <div className="sk-circle">
          <div className="sk-circle1 sk-child"></div>
          <div className="sk-circle2 sk-child"></div>
          <div className="sk-circle3 sk-child"></div>
          <div className="sk-circle4 sk-child"></div>
          <div className="sk-circle5 sk-child"></div>
          <div className="sk-circle6 sk-child"></div>
          <div className="sk-circle7 sk-child"></div>
          <div className="sk-circle8 sk-child"></div>
          <div className="sk-circle9 sk-child"></div>
          <div className="sk-circle10 sk-child"></div>
          <div className="sk-circle11 sk-child"></div>
          <div className="sk-circle12 sk-child"></div>
        </div>
      </section> */}

      <section id="home">
        <div className="container">
          <div className="row">
            <div className="col-md-offset-2 col-md-8 col-sm-12">
              <div className="home-thumb">
                <h1 className="wow fadeInUp" data-wow-delay="0.4s">
                  Welcome To Ezey-NFT
                </h1>
                <h3 className="wow fadeInUp" data-wow-delay="0.6s">
                  {" "}
                  Uploading your NFT <strong>couldn't be easier</strong> or more
                  simple{" "}
                </h3>
                {<h3 id="alertMessage"> {messageStatues}</h3>}
                <Link
                  to="/Create-Collection"
                  onClick={() => {
                    connectMetaMask();
                  }}
                  href="#about"
                  className="btn btn-lg btn-default smoothScroll wow fadeInUp hidden-xs"
                  data-wow-delay="0.8s"
                >
                  Let's begin
                </Link>
                <a
                  href="#about"
                  className="btn btn-lg btn-success smoothScroll wow fadeInUp"
                  data-wow-delay="0.8s"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AboutUs />
      <CollectionGallery />
      <Footer />
    </>
  );
};

export default HomePage;

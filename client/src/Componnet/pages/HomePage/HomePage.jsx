import { useGlobalContext } from "../../../UseContext/UseContext";
import AboutUs from "../AboutUs/AboutUs";
import CollectionGallery from "../CollectionGallery/CollectionGallery";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

const HomePage = () => {
  const { connectMetaMask, messageStatues } = useGlobalContext();
  return (
    <>
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

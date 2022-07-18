import { useGlobalContext } from "../../../UseContext/UseContext";
import CarouselNFT from "../../fetchers/Carousela/Carousel";
import { Link } from "react-router-dom";

const CollectionGallery = () => {
  const { connectMetaMask } = useGlobalContext();
  return (
    <section id="feature">
      <div className="container">
        <div className="row">
          <svg
            preserveAspectRatio="none"
            viewBox="0 0 100 102"
            height="100"
            width="100%"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            className="svgcolor-light"
          >
            <path d="M0 0 L50 100 L100 0 Z"></path>
          </svg>

          <CarouselNFT />

          <div
            onClick={() => {
              connectMetaMask();
              window.scrollTo(0, 0);
            }}
            className="clearfix text-center col-md-12 col-sm-12"
          >
            <Link
              to="/Create-Collection"
              className="btn btn-default smoothScroll"
            >
              Create Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CollectionGallery;

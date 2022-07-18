import ContactUs from "../../fetchers/EmailJS/ContactUs";
import Spinner from "../../fetchers/Spinner/Spinner";
import ContainerFooter from "./ContainerFooter";
import { useGlobalContext } from "../../../UseContext/UseContext";
import { useEffect } from "react";
const Footer = () => {
  const { isLoading,setIsLoading } = useGlobalContext();
  useEffect(()=>{
    setIsLoading(false);

  },[])
  return (
    <>
      <section id="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-offset-2 col-md-8 col-sm-12">
              <div className="section-title">
                <h1 className="wow fadeInUp" data-wow-delay="0.3s">
                  Get in touch
                </h1>
                {isLoading && <Spinner />}
                <p className="wow fadeInUp" data-wow-delay="0.6s"></p>
              </div>
              <div className="contact-form wow fadeInUp" data-wow-delay="1.0s">
                <ContactUs />
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContainerFooter />
    </>
  );
};
export default Footer;

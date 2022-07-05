import ContactUs from "../../fetchers/EmailJS/ContactUs";
import ContainerFooter from "./ContainerFooter";

const Footer = () => {
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
                <p className="wow fadeInUp" data-wow-delay="0.6s">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna
                  aliquam erat volutpat.
                </p>
              </div>
              <div className="contact-form wow fadeInUp" data-wow-delay="1.0s">
                <form id="contact-form" method="post" action="#">
                  <div className="col-md-6 col-sm-6">
                    <input
                      name="name"
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <input
                      name="email"
                      type="email"
                      className="form-control"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <div className="col-md-12 col-sm-12">
                    <textarea
                      name="message"
                      className="form-control"
                      placeholder="Message"
                      rows="6"
                      required
                    ></textarea>
                  </div>
                  <div className="col-md-offset-3 col-md-6 col-sm-offset-2 col-sm-8">
                    <input
                      name="submit"
                      type="submit"
                      className="form-control submit"
                      id="submit"
                      value="SEND MESSAGE"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContainerFooter />
      <div
        className="modal fade"
        id="modal1"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content modal-popup">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <h2 className="modal-title">Our Newsletter</h2>
            </div>
            <ContactUs />
            <p>Thank you for your visiting!</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;

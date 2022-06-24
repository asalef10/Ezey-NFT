import ContactUs from "../../fetchers/EmailJS/ContactUs";

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
      <footer>
        <div className="container">
          <div className="row">
            <svg
              className="svgcolor-light"
              preserveAspectRatio="none"
              viewBox="0 0 100 102"
              height="100"
              width="100%"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0 L50 100 L100 0 Z"></path>
            </svg>

            <div className="col-md-4 col-sm-6">
              <h2>Ezey-NFT</h2>
              <div className="wow fadeInUp" data-wow-delay="0.3s">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque luctus lacus nulla, eget varius justo tristique ut.
                  Etiam a tellus magna.
                </p>
                <p className="copyright-text">
                  Copyright &copy; 2016 Your Company Designed by TemplateMo
                </p>
              </div>
            </div>

            <div className="col-md-1 col-sm-1"></div>

            <div className="col-md-4 col-sm-5">
              <h2>Our Studio</h2>
              <p className="wow fadeInUp" data-wow-delay="0.6s">
                120-240 aliquam augue libero, Convallis in vulputate 10220 San
                Francisco, CA, USA
              </p>
              <ul className="social-icon">
                <li>
                  <a
                    href="#"
                    className="fa fa-facebook wow bounceIn"
                    data-wow-delay="0.9s"
                  ></a>
                </li>
                <li>
                  <a
                    href="#"
                    className="fa fa-twitter wow bounceIn"
                    data-wow-delay="1.2s"
                  ></a>
                </li>
                <li>
                  <a
                    href="#"
                    className="fa fa-behance wow bounceIn"
                    data-wow-delay="1.4s"
                  ></a>
                </li>
                <li>
                  <a
                    href="#"
                    className="fa fa-dribbble wow bounceIn"
                    data-wow-delay="1.6s"
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

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
          <ContactUs/>
            <p>Thank you for your visiting!</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;

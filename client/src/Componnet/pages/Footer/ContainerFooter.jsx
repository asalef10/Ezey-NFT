const ContainerFooter = () => {
  return (
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
                Ezey-NFT was created by a Full-Stack Blockchain Developer &nbsp;
                <a href="https://www.linkedin.com/in/asalef-alena-a043251ba/">
                  Asalef Alena
                </a>
              </p>
              <p className="copyright-text">Copyright &copy; 2022</p>
            </div>
          </div>

          <div className="col-md-1 col-sm-1"></div>

          <div className="col-md-4 col-sm-5">
            <h2>Contact info</h2>
            <p className="wow fadeInUp" data-wow-delay="0.6s"></p>
            <ul className="social-icon">
              <li>
                <a
                  target={"_blank"}
                  href="https://www.facebook.com/profile.php?id=100005185893002"
                  className="fa fa-facebook wow bounceIn"
                  data-wow-delay="0.9s"
                ></a>
              </li>
              <li>
                <a
                  target={"_blank"}
                  href="https://github.com/asalef10"
                  className="fa fa-github"
                  data-wow-delay="1.2s"
                ></a>
              </li>
              <li>
                <a
                  target={"_blank"}
                  href="https://www.linkedin.com/in/asalef-alena-a043251ba/"
                  className="fa fa-linkedin"
                  data-wow-delay="1.4s"
                ></a>
              </li>
              <li>
                <a
                  target={"_blank"}
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
  );
};
export default ContainerFooter;

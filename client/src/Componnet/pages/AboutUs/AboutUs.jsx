const AboutUs = () => {
  return (
    <>
      <section id="about">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <img
                src="https://images.unsplash.com/photo-1652858319770-860b97ebe5b2?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332"
                className="img-responsive wow fadeInUp"
                alt="About"
              />
            </div>

            <div className="col-md-6 col-sm-12">
              <div className="about-thumb">
                <div className="section-title">
                  <h1 className="wow fadeIn" data-wow-delay="0.2s">
                    About Ezey-NFT
                  </h1>
                  <h3 className="wow fadeInUp" data-wow-delay="0.4s">
                    Ezey-NFT is based in Israel
                  </h3>
                </div>
                <div className="wow fadeInUp" data-wow-delay="0.6s">
                  <p>
                    EzeyNFT was created to help people interested in creating
                    NFT collections
                  </p>
                  <p>and do not know where to start.</p>
                  <p>
                    Our EzeyNFT service allows you to create NFT collections
                    quickly, easily and for free.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default AboutUs;

import React from "react";
import "./LatestNews.css"; // Separate CSS file for Box component styles
// import "./basitt.css"; // Separate CSS file for Box component styles

const LatestNews = () => {
  return (
    <>
      <section className="my-4">
        <div className="container">
          <div className="row mb-4">
            <div className="col-12 text-left">
              <h2 className="text-white">Latest News</h2>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card border-1 h-100 grow-on-hover">
                <img
                  src="https://airdropalert.com/wp-content/uploads/2024/03/List-of-AI-Airdrops.png"
                  className="card-img-top"
                  alt="Ultimate List of 7 AI Airdrops"
                />
                <div className="card-body">
                  <h5 className="card-title">Ultimate List of 7 AI Airdrops</h5>
                  <p className="card-text">AIRDROPS</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-1 h-100 grow-on-hover">
                <img
                  src="https://airdropalert.com/wp-content/uploads/2024/03/Fibonacci-guide.png"
                  className="card-img-top"
                  alt="Trading Guide: Fibonacci Lines Explained"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Trading Guide: Fibonacci Lines Explained
                  </h5>
                  <p className="card-text">GUIDES</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-1 h-100 grow-on-hover">
                <img
                  src="https://airdropalert.com/wp-content/uploads/2024/03/PEPE-meme-coin-ATH2.png"
                  className="card-img-top"
                  alt="Is $PEPE The King of Meme Coins?"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Is $PEPE The King of Meme Coins?
                  </h5>
                  <p className="card-text">MEME COINS</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-4"></div>
            <div className="col-md-4 text-center ">
              <div className="border-0 h-100 ">
                <p className="card-text mb-3">Read more on our blog</p>
              </div>
            </div>
            <div className="col-md-4">basit</div>
          </div>
        </div>
      </section>

      <div className="my-4">
        <div className="container">
          <div className="row md-4">
            <h4 className="text-white bine mt-3">Hundreds of Airdrops</h4>
            <h2 className="text-white bine2">Be the first to know</h2>
            <p className="text-white my-4 bine3">
              Join our newsletter and receive the latest giveaways, airdrops and
              crypto news straight in your inbox.
            </p>
            <div className="inputt">
              <input
                type="text"
                placeholder="Email addres"
                className="col-md-5 bine4"
              />
              <br />
              <button className="col-md-5 bine5"> Subscribe</button>

              {/* <div className="chekbox" name="chekbox">
                            <input type="checkbox" />
                             <p className="text-white">
                {" "}
                I consent to receiving your weekly newsletter and special offers
                via email.
              </p>

              </div> */}
              <div
                className="checkbox"
                style={{ display: "flex", alignItems: "center" }}
              >
                <input type="checkbox" style={{ margin: 8 }} />
                <p className="text-white" style={{ margin: 0 }}>
                  I consent to receiving your weekly newsletter and special
                  offers via email.
                </p>
              </div>
              <div className="inner">
                <p>
                  Powered
                  <a
                    href="https://emailoctopus.com/?utm_source=powered_by_form&amp;utm_medium=user_referral"
                    target="_blank"
                  >
                    EmailOctopus
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Trade your crypto */}
      
    </>
  );
};

export default LatestNews;

import React from "react";
import "./Footer.css"; // If you have specific styles for this component
// import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";

const Footer = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="mb-4 image_wrap">
            <a href="/">
              <img
                loading="lazy"
                decoding="async"
                width="872"
                height="216"
                src="https://airdropalert.com/wp-content/uploads/2023/12/airdrop-alert-logo.png"
                alt="airdrop-alert-logo"
                title="airdrop-alert-logo"
                className="image"
              />
            </a>
          </div>
          <p className="text-white et_pb_text_inner">
            AirdropAlert.com is the crypto industry’s #1 rated library to find
            trusted airdrop campaigns, giveaways and more. Helping millions of
            people discover new projects & find new ways to earn cryptocurrency
            since 2017.
          </p>
          <ul className="list-unstyled d-flex">
            <li className="me-3 border ff ">
              <a
                href="https://t.me/airdrop_alert_dot_com"
                title="Follow on Telegram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-telegram  text-white"></i>
              </a>
            </li>
            <li className="me-3 border ff">
              <a
                href="https://twitter.com/Airdropalertcom"
                title="Follow on X"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-twitter text-white"></i>
              </a>
            </li>
            <li className="me-3 border ff">
              <a
                href="https://www.facebook.com/AirdropAlertcom/"
                title="Follow on Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-facebook text-white"></i>
              </a>
            </li>
            <li className="me-3 border ff">
              <a
                href="https://www.instagram.com/airdropalert/"
                title="Follow on Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-instagram text-white"></i>
              </a>
            </li>
            <li className="me-3 border ff">
              <a
                href="https://www.youtube.com/channel/UCo7PW5Kp_MPekw2bNHcRtXg"
                title="Follow on Youtube"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-youtube text-white"></i>
              </a>
            </li>
            <li className="me-3 border ff">
              <a
                href="https://www.linkedin.com/company/airdropalert/"
                title="Follow on LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-linkedin text-white"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="col-lg-2">
          <h5 className="text-white et_pb_text_inner">Company</h5>
          <ul className="list-unstyled et_pb_text_inner ">
            <li>
              <a href="/about-us" className="text-decoration-none text-white">
                About Us
              </a>
            </li>
            <li>
              <a
                href="/general-terms"
                className="text-decoration-none text-white"
              >
                General Terms
              </a>
            </li>
            <li>
              <a
                href="/privacy-policy"
                className="text-decoration-none text-white"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/disclaimer" className="text-decoration-none text-white">
                Disclaimer
              </a>
            </li>
            <li>
              <a href="/contact" className="text-decoration-none text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="col-lg-2 ">
          <h5 className="text-white et_pb_text_inner">Useful links</h5>
          <ul className="list-unstyled et_pb_text_inner">
            <li>
              <a
                href="/browse-airdrops"
                className="text-decoration-none text-white"
              >
                Browse Airdrops
              </a>
            </li>
            <li>
              <a
                href="/search-projects"
                className="text-decoration-none text-white"
              >
                Search Projects
              </a>
            </li>
            <li>
              <a href="/exchanges" className="text-decoration-none text-white">
                Exchanges
              </a>
            </li>
            <li>
              <a href="/stay-safe" className="text-decoration-none text-white">
                Stay Safe
              </a>
            </li>
            <li>
              <a href="/faqs" className="text-decoration-none text-white">
                FAQs
              </a>
            </li>
          </ul>
        </div>
        <div className="col-lg-2">
          <a
            className="btn btn-primary mb-2 w-100 et_pb_button"
            href="/airdropsubmit"
          >
            List Airdrop
          </a>
          <a
            className="btn btn-secondary w-100 et_pb_button"
            href="mailto:morten@airdropalert.com"
          >
            Partnerships
          </a>
        </div>

        <div className="footer-container">
          <div className="footer-column">
            <div className="footer-divider">
              <div className="divider-internal"></div>
            </div>
            <div className="footer-text">
              <div className="text-inner et_pb_text_inner">
                <p className="footer-disclaimer text-white">
                  Disclaimer: The information provided on this website is for
                  informational purposes only and does not, under any
                  circumstances, constitute investment advice, financial advice,
                  trading advice, or any other form of advice. AirdropAlert
                  explicitly disclaims any recommendation or endorsement for the
                  purchase, sale, or retention of any cryptocurrency by any
                  visitor or user of this website. Prior to making any
                  investment decisions, it is imperative that individuals
                  conduct thorough due diligence and seek consultation with a
                  qualified financial advisor.
                </p>
                <p className="footer-copyright text-white">
                  © AirdropAlert.com 2024 – All rights reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

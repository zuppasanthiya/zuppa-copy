// About.js
import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import "./About.css";
import "bootstrap/dist/css/bootstrap.css";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

function About() {
  return (
    <>
      <Header />

      <div className="about-container">
        <div className="about-header">
          <h3>ABOUT</h3>
          <h5>
            {" "}
            SYSTEM OF DISSEMINATED PARALLEL CONTROL COMPUTING IN REAL TIME
          </h5>
        </div>


{/* -----------------------------------ABOUT------------------------------------ */}
        <Fade left case duration={1800}>
          <div className="about-container-one">
            <img src="https://zuppa.io/img/abt-down.png" alt="" />
            <div className="about-para">
                   <p>
                <span className="span-tag">
                  {" "}
                  Zuppa Geo Navigation Technologies Pvt. Ltd.
                </span>{" "}
                better known as ZUPPA, is a completely India grown drone
                manufacturing company, founded in the year 2008, by father- son
                duo, <b>Sai Pattabiram and Venkatesh Sai.</b>
              </p>
              <p>
                All ZUPPA Motherboards are based on our proprietary Computing
                Architecture of DISSEMINATED PARALLEL CONTROL COMPUTING IN
                REALTIME
              </p>
              <p>
                Design is not just what it looks like and feels like. The design
                is how it works - Steve Jobs . ZUPPA's End 2 End Control of the
                technology from Design to Delivery ensures flawless performance
                of its products.
              </p>
            </div>
          </div>
        </Fade>

        <Fade right case duration={2500}>
          <div className="about-container-two">
            <div className="about-para-two">
              <h5>
                {" "}
                WHY ZUPPA <span>?</span>
              </h5>
              <p>
                ZUPPA's End 2 End Control of the technology from Design to
                Delivery ensures flawless performance of its products .
              </p>
              <p>TANSTIA FNF Germany's Innovation voucher program</p>
              <p>
                Funded under GOI innovation Program of Department of Science &
                Technology TIFAC SIDBI SRIJAN Innovation
              </p>
              <p>
                Patent Applied for Unique{" "}
                <bold> MADE IN INDIA Artificial Intelligence AI</bold>{" "}
                Technology.
              </p>
              <p>
                Only Drone Company to manufacture Automobile Industry Standard
                AIS 140 Compliant Ministry Of Road Transport & Highways (MORTH)
                approved Vehicle Tracking & Locating Device
              </p>
              <p>Only Drone Company with AS9100D Aerospace Process Standard</p>
            </div>

            <img
              className="about-para-two-image"
              src="https://zuppa.io/img/why-zuppa.jpg"
              alt=""
            />
          </div>
        </Fade>
        {/* //------------------------------------------------------------------- */}

        <Fade left case duration={2500}>
          <div className="about-container-three">
            <div className="about-para-three">
              <p>
                ZUPPA's End 2 End Control of the technology from Design to
                Delivery ensures flawless performance of its products .
              </p>
              <p>TANSTIA FNF Germany's Innovation voucher program</p>
              <p>
                Proprietary Unique MADE IN INDIA Artificial Intelligence (AI)
                Technology.
              </p>

              <p>Only Drone Company with AS9100D Aerospace Process Standard</p>
            </div>

            <img
              className="about-para-three-image"
              src="https://www.zuppa.io/product-img/product.jpg"
              alt=""
            />
          </div>
        </Fade>

        <Zoom right case duration={4000}>
          <div className="image-two">
            <img
              src="https://cdn.dribbble.com/users/241590/screenshots/2897334/optimus.gif"
              alt=""
            />
          </div>
        </Zoom>
        <Footer />
      </div>
    </>
  );
}

export default About;

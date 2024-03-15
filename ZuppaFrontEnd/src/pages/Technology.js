import React from "react";
import "./Technology.css";
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import Header from "../components/header";
import Footer from "../components/footer";
import Fade from "react-reveal/Fade";

const Technology = () => {



  const handlePageUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="technology-main">
      <Header />
      <div className="tech-header">
        <h2>TECHNOLOGY</h2>
        <h4>SYSTEM OF DISSEMINATED PARALLEL CONTROL COMPUTING IN REAL TIME</h4>
      </div>
    
      <Fade right case duration={1700}>
        <div className="tech-container-one">
          <img
            className="tech-image"
            src="https://media.licdn.com/dms/image/D4D12AQF_w7GFjpbt4g/article-cover_image-shrink_600_2000/0/1686981310860?e=2147483647&v=beta&t=yc_cWzw5xYxM-1PonUMctSl3nWgET57KK0gaLtEZlbY"
            alt=""
          />
          <div className="tech-para">
            <h5>HUMAN INTELLIGENCE : PARALLEL PROCESSING</h5>
            <p>
              When we drive a car, we don't focus only on the car and driving it
              ; we also look for obstacles on the road , movement of other
              vehicles , avoid crashing into pedestrians or animals crossing the
              road , listen to music, carry on a conversation with our
              passengers, and continue navigating our car to reach the
              destination we started off towards . .
            </p>
            <p>
              We do all this simultaneously while navigating through a series of
              turns and bends and arrive at our planned destination.
            </p>
            <p>
              Humans process multiple stimuli in Parallel when controlling a
              vehicle be it on the ground , in the air or water . Parallel
              processing is our ability to deal with multiple stimuli
              simultaneously to control vehicles .
            </p>

            <p>
              Our ability to process all these different kinds of stimuli at
              once through our reflex and cognitive nerve systems enables our
              brain to direct our hands and legs to act in unison while
              performing the act of driving.
            </p>
          </div>
        </div>
      </Fade>

      <Fade bottom case duration={2000}>
        <div className="tech-container-two">
          <div className="tech-para-two">
            <h5>ZUPPA’S A. I. : DPCC</h5>

            <p>
              ZUPPA’s “ SYSTEM OF DISSEMINATED PARALLEL CONTROL COMPUTING IN
              REAL TIME ( DPCC ) “ is a Bio Mimicry of the “ Human Intelligence
              system of parallel processing .{" "}
            </p>
            <p>
              DPCC is a control computing architecture that performs in a way
              similar to Human intelligence to control vehicles like Drones in
              the air , UGV’s on the ground or USV’s in water .{" "}
            </p>
            <p>
              DPCC also processes video feeds from Multiple cameras to create
              360 Deg Vision Based guidance and navigation systems .
            </p>
            <p>
              ZUPPA’s NavGati Motherboard for unmanned systems and Drishya for
              Vision guidance & navigation are all set to lead 5th Generation
              technologies in the emerging industries of Drones , Defence , ADAS
              , IoT and connected mobility{" "}
            </p>
          </div>
          <img
            className="tech-image-two"
            src="https://readitquik.com/wp-content/uploads/2022/02/ai-1.gif"
            alt=""
          />
            
        </div>
      </Fade>
      <Fade top case duration={2000}>
        <div className="tech-container-three">
          <img src="https://www.zuppa.io/product-img/techno.jpg" alt="" />
        </div>
      </Fade>
      <Fade bottom case duration={2000}>
        <div className="tech-container-four">
          <div className="tech-para-four">
            <h5>ZUPPA AI - THE TECHNOLOGY</h5>
            <b>UNMANNED SYSTEMS </b>
            <p>
              NavGati Autopilot : is a mother board that uses data from sensors
              like IMU , Accelerometer , Gyro , magnetometer , barometer GPS to
              control a vehicle along X , Y & Z axis electronically in exactly
              the same way a human would.{" "}
            </p>
            <b>VISION GUIDANCE SYSTEMS</b>
            <p>
              Drishaya Vision : is a motherboard that uses live camera feed much
              like we Humans use our eyes for driving or piloting a vehicle in
              real time.{" "}
            </p>
            <b>IOT & CONNECTED MOBILITY</b>
            <p>
              {" "}
              EDGE Data Gateway : is a motherboard that acquires and transmits
              data to cloud servers using wireless technologies.
            </p>
          </div>
          
          <img
            className="tech-image-four"
            src="https://i.pinimg.com/originals/bd/8c/a9/bd8ca9b9b886bef480f5bba38f68037d.gif"
            alt=""
          />      
        </div>        
      </Fade>
     
      <Footer />
    </div>
  );
};

export default Technology;

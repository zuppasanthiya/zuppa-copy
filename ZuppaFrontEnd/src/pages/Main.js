
import "../App.css";
import covervideo from "../assets/images/AJEET DRONES.mp4";
import React, { useState, useEffect } from "react";

import { useSpring, animated } from 'react-spring';
import edgepic from "../assets/images/edge.png";
import drishyapic from "../assets/images/drishya.png";
import navgatipic from "../assets/images/navigati.png";

import trainerdrone from "../assets/images/Trainerdrone.jpg";
import miltarydrone from "../assets/images/miltary.jpg";
import Ajeetmini from "../assets/images/Ajeetmini.png";
import Ajeetscout from "../assets/images/Ajeetscout.png";
import droneimage from '../assets/images/miltarydroneicon.png';


function Index() {
  const images = ["066.png", "077.png"]; // Replace with your image paths
  const images2 = [
    trainerdrone,
    miltarydrone,
    Ajeetmini,
    Ajeetscout,
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  

const points = [
  { x: 400, y: 100 },
  { x: 700, y: 300 },
  { x: 400, y: 200 },
  { x: 100, y: 100 },
  { x: 400, y: 100 },
  { x: 300, y: 800 },
  { x: 400, y: 100 },
  { x: 700, y: 500 }
];
  
  const droneimages = [
    { src:trainerdrone, alt: 'Image 1', heading: 'Trainer' },
    { src: miltarydrone, alt: 'Image 2', heading: 'Military' },
    { src: Ajeetmini, alt: 'Image 3', heading: 'Ajeet_mini' },
    { src: Ajeetscout, alt: 'Image 4', heading: 'Ajeet_Scout' },
   
  ];

  const TEXTS = [
    "Unmanned Aerial Vehicle-UAV(Drones) \n Unmanned Ground Vehicle - UGV \n Unmanned Surface Vehicle \n Driverless Automobiles",
    "See Through Armour (STA) Defence Tanks \n Vision assist systems for Automobiles (ADAS) N 360 DEGREE VISUAL Drone Radar \n Obstacle avoidance system for Drones",
    "Vehicle Location Telematics Device \n Drone Tracking System \n Internet Of Things (IOT) Cold Chain Monitoring",
  ];
  const demoimages = [edgepic, drishyapic, navgatipic];

  const HEADINGS = [
    "NavGati Autopilot for Unmanned Systems",
    "Drishya \n Vision Guidance Systems",
    "EDGE \n Wireless Connectivity Gateway",
  ];

  const gradients = [
    "linear-gradient(to bottom right, white, #4b0082)", // Green to Dark Green
    "linear-gradient(to bottom right, #2196F3, #4b0082)", // Blue to Dark Blue
    "linear-gradient(to bottom right,white, #2196F3)", // Orange to Dark Orange
  ];

  
  useEffect(() => {
    const intervalId = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Adjust the delay (in milliseconds) between slides as needed

    return () => clearTimeout(intervalId);
  }, [currentIndex, images.length]);

  //dronemoving
  const props = useSpring({
    from: { x: points[0].x, y: points[0].y },
    to: async (next) => {
      for (let i = 1; i < points.length; i++) {
        await next({ x: points[i].x, y: points[i].y });
      }
    },
    loop: { reverse: true },
    config: { duration: 4000 },
  });


  /// colorful box with text content

  const TypingAnimation = () => {
    return (
      <div className="typing-animation">
        {TEXTS.map((text, index) => (
          <div
            key={index}
            className="colorful-box"
            style={{ backgroundImage: gradients[index % gradients.length] }}
          >
            <h2 className="header-board">{HEADINGS[index]}</h2>
            <br />
            <img src={demoimages[index]} alt={`Image ${index}`} />
            <br />
            <span className="text">
              {text.split("\n").map((line, index) => (
                <div key={index}>{line}</div>
              ))}
            </span>
          </div>
        ))}
      </div>
    );
  };

 
const ImageSlider2 = ({ images2, interval }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images2.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(intervalId);
  }, [images2, interval]);

  return (
    <div >
      <img style={{width:'400px',height:'300px'}}src={images2[currentImageIndex]} alt={`Image ${currentImageIndex}`} />
    </div>
  );
};

  
  return (
    <div  style={{
      backgroundImage:`url(${Ajeetscout})`,
      background: 'rgba(0, 0, 0, 0.5)', 
      backgroundSize: 'contain',
      backgroundPosition: 'top',
      backgroundImageOpacity:'0px',
      backgroundBlendMode:'lighten',
      backgroundRepeat:'no-repeat',
    }}>
      <div className="news-ticker">
        <div className="ticker-content">
          <span>The Show Stopper @AIDEF 2022 Generates Eyeballs </span>
          <span>
            Changemakers: New Milestones for 'Make In India' in Defense sector
          </span>
          <span>Armed forces get ready for future warefare!! </span>
          <span>Ajeet Mini makes a sterling debut</span>
        </div>
        
     
  
      </div>

      
      {/* <img className="img-fluid" src={image} alt="scout"></img> */}
      <div className="video-container">
      <ImageSlider2 images2={images2} interval={2000} /> {/* Change image every 3 seconds */}
      <video
        className="video-background"
        autoPlay
        loop
        muted
        style={{ width: "800px", height: "400px" , }}
      >
        <source src={covervideo} type="video/mp4" />
      </video>
      <ImageSlider2 images2={images2} interval={2000} /> {/* Change image every 3 seconds */}
      </div>

    
     


      <div className="image-text-slider">
        <div className="text-slider">
          <br />
        <div className="motherboards" style={{ marginTop: '70px' }}> 
          <h2>GENERATION 5 MOTHERBOARDS MADE IN INDIA</h2>
          <br />
          <ul>
            <li>
              {" "}
              Intels Computing Architectures like i3, i5, i7 or QUALCOMM's s4,
              s6, s7, s8 have revolutionised our lives by powering devices like
              laptops, Mobile phones
            </li>

            <li>
              Presenting ZUPPA's "made in india dpcc Computing Architectures"
              that is powering future ready devices for 5th Generation
              industries like Drones, Unmanned Systems, ADAS, IOT and Connected
              Mobility
            </li>
          </ul>
          
        </div>
        </div>
     
        <div className="image-slider">

          <img
            src={process.env.PUBLIC_URL + "/" + images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
          />
        </div>
        
      </div>
       
       
      <animated.div className="movingObject" style={{ top: props.y, left: props.x }}><img src={droneimage}></img></animated.div>
  
      <div class="container">
    <div class="row justify-content-between align-items-center ">
        <div class="col-md-12 mx-auto">
            <div class="card mt-5 text-center ">

      <h1 className="TitleBlink">Products</h1>
        <TypingAnimation />
      </div>
      </div>
      </div>
      </div>
  <br>
  </br>
  <br>
  </br>
      <div class="container">
      
        <h1 className="TitleTyping">BLOGS : News & Events...</h1> <br>
  </br>
      <div className="image-container">
        
      <div className="image-wrapper">
        <img
          src="blog2.jpg"
          alt="Image"
          className="image"
        />
        <div className="image-content">
          <h2>AH!! THE CHASM</h2>
          <br/>
          <br/>
          <br/>
          <p>Crossing the chasm and diffusion of techonology were prases i heard of quite late in the diffusion of our proprietary globally unique technology of "SYSTEM OF DISSEMINATED PARALLEL CONTROL COMPUTING IN REAL TIME"</p>
        </div>
      </div>
      <div className="image-wrapper">
        <img
          src="saravanaraju.jpg"
          alt="Image"
          className="image"
        />
        <div className="image-content">
          <h2>The FASCINATING JOURNEY</h2>
          <p>This is the journey of Saravana Raju who halls from a fishing hamlet in chennai to being one among the experience drone pilot today taining future drone pilots at CASR RPTO MIT .</p>
        </div>
      </div>
    </div>
   </div>
    <br/>
  
    <div className="news-ticker1">
        <div className="ticker-content1">
      <span> <img   src='Zuppaclogo1.png' alt="scout" ></img></span>
      <span> <img   src='Zuppaclogo2.png' alt="scout" ></img></span>
      <span> <img  src='Zuppa c logo 3.png' alt="scout" ></img></span>
      <span> <img  src='Zuppa c logo 4.png' alt="scout" ></img></span>
      <span> <img   src='Zuppa c logo 5.png' alt="scout" ></img></span>
      <span> <img   src='design.png' alt="scout" ></img></span>
        </div>
        </div>

     

  </div>





  );
}


export default Index;

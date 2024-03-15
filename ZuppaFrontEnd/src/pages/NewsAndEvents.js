// NewsAndEvents.js
import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import "./NewsAndEvents.css";
import Fade from 'react-reveal/Fade'

function NewsAndEvents() {
  return (
    
<>     
<Header/>
 <div className="newsevent-container">
      <div className="newsevent-header">
 
   <h3>NEWS AND EVENTS</h3>
        <h6>GET MANY MORE FEATURES</h6>
  
      </div>
  
      <Fade left case duration={1700}>
      <div className="newsevent-container-one">
        <img className="newsevent-image"
          src="https://zuppa.io/product-img/Zuppas-Ajeet-Mini-%E2%80%93-the-Show-Stopper-@-AIDef-2022-Generates-Eyeballs.jpg" alt=""/>
        <div className="newsevent-para">

          <h5>The Show Stopper @AIDef 2022 Generates Eyeballs</h5>
          <p>
            The first-ever Artificial Intelligence in Defence (AIDef) symposium
            and exhibition organised by the Ministry of Defence in New Delhi
            last week showcased India's stride towards achieving self-reliance
            in defence technologies{" "}
          </p>
          <p>
            At the event, 75 defence products powered by artificial intelligence
            were launched by the Defence Minister Rajnath Singh as part of
            'Azadi Ka Amrit Mahotsav' celebrations.
          </p>
        </div>
      </div>
      </Fade>
     
{/* --------------------------------------------------------------------------------------- */}
<Fade right case duration={5000}>
      <div className="newsevent-container-two">
        <div className="newsevent-para-two">
          <h5>
            Changemakers: New Milestones for Make In India in Defense sector.
          </h5>
          <p>
            Changemakers: New Milestones for 'Make In India' in Defense sector
          </p>
        </div>

        <img
          className="newsevent-para-two-image"
          src="https://zuppa.io/product-img/Changemakers%20New%20Milestones%20for%20%20Make%20In%20India%20in%20Defense%20sector.jpg"
          alt=""
        />
      </div>
      </Fade>
      {/* //--------------------------------------------------------------------------------------------------------------------------------- */}

      <Fade bottom case duration={1700}>
     
      <div className="newsevent-container-three">
      
        <img className="newsevent-image-three"
          src="https://zuppa.io/product-img/Armed%20forces%20get%20ready%20for%20future%20warfare!.jpg"
          alt=""
        />
        <div className="newsevent-para-three">
         <h5>Armed forces get ready for future warfare!!</h5>
          <p>
            <b>Defence Minister Rajnath Singh </b>said on Monday that India needs to
            work on artificial intelligence mechanism "extremely carefully".{" "}
          </p>
          <p>
            Inaugurated the first-ever Artificial Intelligence in Defence
            (AIDef) symposium and exhibition of AI-enabled solutions, the
            Defence minister said that drawing lessons from the ongoing
            Russia-Ukraine war, the Indian Armed Forces are pushing for adoption
            of new technol gies.{" "}
          </p>
        </div>
      </div>
      </Fade>
{/* //----------------------------------------------------------------------------------------------------------- */}
<Fade top case duration={1500}>
            <div className="newsevent-container-four">
        <div className="newsevent-para-four">
          <h5>
            {" "}
            Ajeet Mini makes a sterling debut at Bharat Drone Mahotsav 2022
          </h5>
          <p>
            Ajeet Mini India’s Aatmnirbhar answer to global brands like DJI,
            Parot, Skydio, Autel and the likes was unveiled by our Chief
            Innovation Officer Venkatesh Sai at the Bharat Drone Mahotsav 2022
            on 27/5/22 to the Honourable <b>Prime Minister Narendra Modi </b>and
            Minister of Civil Aviation Jyotiraditya Scindia at Pragati Maidan.
          </p>
        </div>

        <img
          className="newsevent-image-four"
          src="https://zuppa.io/product-img/Ajeet%20Mini%20makes%20a%20sterling%20debut%20at%20Bharat%20Drone%20Mahotsav%202022.jpg"
          alt=""
        />
      </div>
      </Fade>
      {/* ------------------------------------------------------------------------------------------------------------------------------------------------------ */}
      <Fade left case duration={1500}>
       <div className="newsevent-container-five">
        <img   className="newsevent-image-five" src="https://zuppa.io/product-img/AS9100Dcertificate.jpg" alt="" />
        <div className="newsevent-para-five">
          <h5>AS9100D and ISO9001 certification</h5>
          <p>
            Zuppa got certified by TUVSUD to the American aerospace standard
            with AS9100D and ISO 9001.{" "}
          </p>
          <p>
            AS9100D certification as everyone knows makes Zuppa an organization
            that has the quality management in place that is standardized for
            international aerospace industry and supply chain.{" "}
          </p>
        </div>
      </div>
      </Fade>
      {/* ---------------------------------------------------------------- */}
      <Fade right case duration={1900}>
      <div className="newsevent-container-six">
        <div className="newsevent-para-six">
          <h5> DGCA certificate</h5>       
          <p>
            Another Certification in the bag for Zuppa. Zuppa's Ajeet Mini
            Trainer gets it Directorate General of Civil Aviation, India (DGCA)
            type certification.
          </p>
          <p>
            These certificates affirm that a manufacturer is taking the
            necessary steps to ensure its products comply with general aviation
            regualtions and certifies it to international standards and gives us
            an oppurtunity to sell national
          </p>
        </div>

        <img
          className="newsevent-image-six"
          src="https://zuppa.io/product-img/DGCAcertificate.jpg"
          alt=""
        />
      </div> 
      </Fade>
      {/* <div className="image-two">
        <img src="https://cdn.dribbble.com/users/241590/screenshots/2897334/optimus.gif" alt="" />
      </div> */}
      <Footer />
    </div>
    </>
  );
}

export default NewsAndEvents;

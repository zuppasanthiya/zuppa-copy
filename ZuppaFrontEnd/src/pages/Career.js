// Career.js
import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import "./Career.css";
import { useNavigate } from "react-router-dom";

function Career() {
const navigate =useNavigate()

  const reviewMethod =()=>{
    navigate('/Review')
  }
  const applyPost =()=>{
    navigate("/CareerForm")
  }
  return (
    <>
      <Header />
      <div className="career-container">       
       <div className="career-header">
         <h2>Our Job Vacancies</h2>
          <div className="career-para">
            <h6>EMBEDDED DEVELOPER</h6>
            <b>Experience: 0 to 3 years</b>
            <p>job Description:</p>

            <ul className="unorder">
              <li>Experience in Embedded C programming.</li>
              <li>Experience in Arduino Programming.</li>
              <li>
                Experience in integrating different code bases and fixing
                integration issues.
              </li>
              <li>
                Knowledge in hardware and AVR and ARM processor architecture.
              </li>
              <li>Knowledge in GPIO, ADC, DAC and Timers</li>
              <li>Knowledge in I2C / UART/ SPI protocols</li>
              <li>Optional Knowledge on CAN</li>
            </ul>
            <p>
              Qualification: BE [ECE],BSc /MSc [Electronics]{" "}
           
            </p>
            <button onClick={applyPost} className="button-tag">Apply</button>
          </div>
        </div>
        {/* --------------------------------------------------------------------- */}
        <div className="career-header-one">
          <div className="career-para-one">
            <h6> MECHANICAL DESIGNER</h6>
            <b>Experience: 0 to 3 years</b>
            <p>job Description:</p>

            <ul className="unorder">
              <li>Experience in Sheetmetal Design.</li>
              <li>Experience in Arduino Programming.</li>
              <li>
                Good skills in 3D concept development and 2D development
                drawings are a must.
              </li>
              <li>
                Understand the customer requirements and suggest alternative
                feasible concepts.
              </li>
              <li>
                Manufacturing knowledge of various manufacturing processes like
                sheet metal operations, welding & machining.
              </li>
              <li>
                Able to own complete product lifecycle (from concept to
                manufacturing) and able to interact with stakeholders to get
                signoff.
              </li>
              <li>
                Very good knowledge in reusability of functional similar parts
                between different machines.
              </li>
              <li>
                BOM preparation, manufacturing drawings & Drawing standard
                knowledge.
              </li>
              <li>Very good experience in Structural and Model analysis.</li>
              <li>Hands-on experience in SolidWorks.</li>
              <li>
                Knowledge in Engineering Change Order Process & expertise in
                mechanical hardware selection.
              </li>
              <li>Shall lead the team and drive the project.</li>
              <li>
                Should have very strong communication skills and team handling
                skills.
              </li>
            </ul>
            <p>
              Qualification: BE [MECH]{" "}
            </p>
            <button onClick={applyPost} className="button-tag">Apply</button>
           
          </div>
        </div>
        {/* ----------------------------------------------------------------------------------------------- */}
        <div className="career-header-two">
          <div className="career-para-two">
            <h6>SOFTWARE DEVELOPER</h6>
            <b>Experience: 0 to 3 years</b>
            <p>job Description:</p>

            <ul className="unorder">
              <li>
                Good development experience in developing applications using
                Java, Spring and Databases.
              </li>
              <li>
                Experience in Android development and debugging robust systems.
              </li>
              <li>
                Experience in multi-threaded programming and middleware solution
                development in an Android environment.
              </li>
              <li>
                Strong in fundamentals of IPC and OS concepts. Experience in Web
                Services technology including MAP server integration, XML, and
                HTTP, is a plus
              </li>
              <li>
                Experience in using development tools like Eclipse, IntelliJ.
              </li>
              <li>
                Ability to learn new technologies quickly. Strong understanding
                of product development life cycle.
              </li>
              <li>
                Able to understand and translate Specification/Requirements into
                the design and then to implementations.
              </li>
              <li>Knowledge of Application Servers and Databases.</li>
              <li>Good communication skills oral, written and presentation.</li>
              <li>
                Good experience in testing and test case development for Unit,
                Integration, Systems and Functionality Testing.
              </li>
            </ul>
            <p>
              Qualification: BE [CSE,ALL STREAMS]{" "}
             
            </p>
            <button onClick={applyPost} className="button-tag">Apply</button>
          </div>
        </div>
    <div className="employee-title">
    <h5>Employee Reviews</h5>
        <button onClick={reviewMethod}>Reviews</button>
    </div>
      </div>
      <Footer />
    </>
  );
}

export default Career;

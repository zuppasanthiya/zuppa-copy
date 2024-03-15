import React, { useState } from 'react';
import './CareerForm.css';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import TextField from '@mui/material/TextField';
import Header from '../components/header';
import Button from '@mui/material/Button';
import { API_URL } from '../FormContext/Url';

const CareerForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [resume, setResume] = useState('');
    const [portfolio, setPortfolio] = useState('');
    const [github, setGithub] = useState('');
    const [location, setLocation] = useState('');
    const [passOut, setPassOut] = useState('');

    const isFormComplete = () => {
        return (
            name !== '' &&
            email !== '' &&
            contactNumber !== '' &&
            resume !== '' &&
            portfolio !== '' &&
            github !== '' &&

            location !== '' &&
            passOut !== ''
        );
    };

    const FormMethod = () => {
        if (!isFormComplete()) {
            // alert("Please enter all details.");
        } else {
            const FormPost = {
                name: name,
                email: email,
                contactNumber: contactNumber,
                resume: resume,
                portfolio: portfolio,
                github: github,
           
            
                location: location,
                passOut: passOut
            };

            fetch(API_URL, {
                method: "POST",
                body: JSON.stringify(FormPost),
                headers: { "Content-type": "application/json" }
            })
            .then(() => alert(" 😊 Registered successfully 😊"))
            .catch(error => console.error("Error submitting form:", error));

            console.log(FormPost);
        }
  
    };
    const handlePageUp = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };
    return (
        <>
            <Header />
            <div className='careerForm-container'>
                <h5>Fill the Form</h5>
                <label>Name</label>
                <TextField  id="outlined-basic"  variant="outlined" placeholder='Your Answer' value={name} onChange={(e) => setName(e.target.value)} />

                <label>Email</label>
                <TextField id="outlined-basic"  variant="outlined" type='email' placeholder='Your Answer' required='' value={email} onChange={(e) => setEmail(e.target.value)} />

                <label>Contact Number</label>
                <TextField  id="outlined-basic"  variant="outlined" placeholder='Your Answer' required='' value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} />

                <label>Updated Resume Link <bold>Drive</bold></label>
                <TextField  id="outlined-basic"  variant="outlined" placeholder='Your Answer' required='' value={resume} onChange={(e) => setResume(e.target.value)} />

                <label>Updated Portfolio Link</label>
                <TextField  id="outlined-basic"  variant="outlined" placeholder='Your Answer' required='' value={portfolio} onChange={(e) => setPortfolio(e.target.value)} />

                <label>Updated Github Link</label>
                <TextField  id="outlined-basic"  variant="outlined" placeholder='Your Answer' required='' value={github} onChange={(e) => setGithub(e.target.value)} />

                <label>Current Location </label>
                <TextField  id="outlined-basic"  variant="outlined" placeholder='Your Answer' required='' value={location} onChange={(e) => setLocation(e.target.value)} />

                <label>Year of passing </label>
                <TextField  id="outlined-basic"  variant="outlined" placeholder='Your Answer' required='' value={passOut} onChange={(e) => setPassOut(e.target.value)} />

                <Button onClick={FormMethod} disabled={!isFormComplete()} variant="contained" href="#contained-buttons">
                    Submit
                </Button>
              <div className='scroll-button'>  <ArrowCircleUpIcon color="primary" fontSize="large" onClick={handlePageUp}></ArrowCircleUpIcon></div>
            </div>
        </>
    );
};

export default CareerForm;
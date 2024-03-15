import React from 'react';
import { CDBModalFooter, CDBPageLink, CDBBox } from 'cdbreact';
import logo from '../assets/images/ZuppaLogo.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    const address='PolyHose Tower No:86, \n West Wing, 4th Floor, \n AnnaSalai, Guindy \n Chennai-600032'
    const adrs = address.split('\n').map(str => <p>{str}</p>);
  return (
    <CDBModalFooter className="container-fluid shadow">
      <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%' }}>
        <CDBBox display="flex" justifyContent="center" className="flex-wrap">
          <CDBBox>
            <a href="/" className="d-flex align-items-center p-0 text-dark">
              <image alt="logo" className="mb-4" src={logo} width="30px" />
              <span className="ms-3 h5 font-weight-bold">Address</span>
            </a>
            <a>{adrs}</a>
        
            <p className="my-3" style={{ width: '250px' }}>
             
            </p>
            <CDBBox display="flex" className="mt-4">
            
              <i className="fa fa-envelope p-3" aria-hidden="true"></i>

              <Link to="https://www.linkedin.com/company/zuppa-drones/about/" target="_blank" className="p-2">
              <i className='fab fa-linkedin-in p-2'></i>
              </Link>
              <Link to="https://zuppa.io" target="_blank" clsssName="p-2">
              <i className="fa fa-globe p-3" aria-hidden="true"></i>
              </Link>
            </CDBBox>
          </CDBBox>
          
         
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Products
            </p>
            <CDBBox flex="column" style={{ cursor: 'pointer', padding: '3' }}>
            <CDBPageLink href="/">Autopilot</CDBPageLink>
              <CDBPageLink href="/">Tracker</CDBPageLink>
              <CDBPageLink href="/">Ajeet Scout</CDBPageLink>
              <CDBPageLink href="/">Ajeet Trainer</CDBPageLink>
            </CDBBox>
          </CDBBox>
        </CDBBox>
        <small className="text-center mt-5">&copy; Zuppa, 2024. All rights reserved.</small>
      </CDBBox>
    </CDBModalFooter>
  );
};

export default Footer;
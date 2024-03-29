import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
// import Navigation from './Navigation';
// import { useTranslation } from 'react-i18next';
// import './i18next';
import './Footer.css';


function Footer (){
    return (
          <div className="">
            <MDBFooter bgColor='light' className='text-center text-lg-start text-muted border-bottom '>
              
        
              <section className='mb-0'>
                <MDBContainer className='text-center text-md-start mt-5 p-2 '>
                  <MDBRow className='mt-3'>
                    <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-2'>
                      <h6 className='text-uppercase fw-bold mb-2'>
                        <MDBIcon icon="gem" className="me-3" />
                        Imagination Station
                      </h6>
                      <p>
                      Imagination Station is an initiative to ensure that time spent by your child is informative, fun, and secure
                      
                      {/* {t('Imagination Station is an initiative to ensure that time spent by your child is informative, fun, and secure.')}  */}
                      </p>
                    </MDBCol>
      
                    <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-2 p-2'>
                      <h6 className='text-uppercase fw-bold mb-2'> Links</h6>
                      <p>
                        <a href='/SignUp' className='text-reset footer-link'>
                          SignUp
                        </a>
                      </p>
                      <p>
                        <a href='/About Us' className='text-reset footer-link'>
                          About Us
                        </a>
                      </p>
                      <p>
                        <a href='/Privacypolicy' className='text-reset footer-link'>
                          Privacy Policy
                        </a>
                      </p>
                      
                    </MDBCol>
        
                    <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-2'>
                      <h6 className='text-uppercase fw-bold mb-2'>Contact</h6>
                      <p>
                        <MDBIcon icon="home" className="me-2" />
                        Lebanon, Beirut 
                      </p>
                      <p>
                        <MDBIcon icon="envelope" className="me-3" />
                        ImaginationStation@gmail.com
                      </p>
                      <p>
                        <MDBIcon icon="phone" className="me-3" /> + 01 234 567 89
                      </p>
                      
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
              </section>
        
              <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2023 Copyright: 
                <a className='text-reset fw-bold' href='http://localhost:3000/Home'>
                   ImaginationStation
                </a>
              </div>
            </MDBFooter>
          </div>
          );
        }

       

export default Footer;
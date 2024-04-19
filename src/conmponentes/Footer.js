import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Iframe from 'react-iframe'
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
    
      <footer className="footer">
        <div className='footer'>
      <Container>
        <Row className='main-foot'>
          <Col className='col col-lg-4 col-md-12 col-12'>
            <h2 className='text-lg-start text-md-center text-center mb-lg-0 mb-md-5 mb-2 main-title'>Odoo Expert.</h2>
          </Col>
          
        
          
          <Col className='col col-lg-2 col-md-3 col-12'>
            <ul>
              <li className='list-unstyled'>
                <h5 className='mt-lg-0 mt-md-0 mt-4 mb-3 '>À propos</h5>
              </li>
              <li className='list-unstyled mb-2 text-white'>
                <Link to="/profil">Profile</Link>
              </li>
              <li className='list-unstyled mb-2 text-white'>
                <Link to="/store">Boutique</Link>
              </li>
              <li className='list-unstyled mb-2 text-white'>
                <Link to="/blogs">Blogs</Link>
              </li>
              
              
              
            </ul>
          </Col>
          
          <Col className='col col-lg-2 col-md-3 col-12'>
            <ul>
              <li className='list-unstyled'>
                <h5 className='mt-lg-0 mt-md-0 mt-4 mb-3'>Trouver nous</h5>
              </li>
              <li className='list-unstyled mb-2'>
                <Link to="/terme_et_condition"><i className="bi bi-instagram"></i>termes et conditions</Link>
              </li>
              <li className='list-unstyled mb-2'>
                <Link to="/politique_dexpédition"><i className="bi bi-twitter"></i>politique d'expédition</Link>
              </li>
              <li className='list-unstyled mb-2'>
                <Link to="/politique_de_remboursement"><i className="bi bi-facebook"></i>politique de remboursement</Link>
              </li>
              <li className='list-unstyled mb-2'>
                <Link to="/politique_de_confidentialité"><i className="bi bi-facebook"></i>politique de confidentialité</Link>
              </li>
            </ul>
          </Col>
          <Col className='col col-lg-3 col-md-6 col-12'>
            <ul>
              <li className='list-unstyled'>
                <h5 className='mt-lg-0 mt-md-0 mt-4 mb-3'>Contact</h5>
              </li>
              <li className='list-unstyled mb-2'>
                <Link to="/contact"><i className="bi bi-geo-alt-fill"></i> Centre Urbain ICC II C2-05. 1004 TUNIS</Link>
              </li>
              <li className='list-unstyled mb-2'>
                <Link > <a href="tel:+21628896143"><i className="bi bi-telephone-fill"></i> +21628896143</a></Link>
              </li>
              <li className='list-unstyled mb-2'>
                <Link ><i href="mailto:sami.g3@hotmail.fr" className="bi bi-envelope-at-fill"></i>sami.g3@hotmail.fr</Link>
              </li>
              <li className='list-unstyled'>
                <div className="map mt-4">
                <iframe 
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.49256315092!2d10.184356675352609!3d36.8546271646305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd34b46e3bb0f3%3A0xa0b1fa32a7138952!2sMSI%20Consultants!5e0!3m2!1sfr!2stn!4v1710503476156!5m2!1sfr!2stn" 
  width={600} 
  height={450} 
  style={{ border: '0' }} 
  allowFullScreen="" 
  loading="lazy" 
  referrerPolicy="no-referrer-when-downgrade"
></iframe>
 </div>
              </li>
              
            </ul>
            
          </Col>
         
        </Row>
      </Container>
   </div></footer>
      
      <footer className="py-4">.
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 ">
              &copy; {new Date().getFullYear()}: powered by salah mathlouthi
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

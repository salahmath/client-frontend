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
                <h5 className='mt-lg-0 mt-md-0 mt-4 mb-3 '>About</h5>
              </li>
              <li className='list-unstyled mb-2 text-white'>
                <Link to="/">Profile</Link>
              </li>
              <li className='list-unstyled mb-2 text-white'>
                <Link to="/">Career</Link>
              </li>
              <li className='list-unstyled mb-2 text-white'>
                <Link to="/">Privacy</Link>
              </li>
              
              
              
            </ul>
          </Col>
          
          <Col className='col col-lg-2 col-md-3 col-12'>
            <ul>
              <li className='list-unstyled'>
                <h5 className='mt-lg-0 mt-md-0 mt-4 mb-3'>Find us</h5>
              </li>
              <li className='list-unstyled mb-2'>
                <Link to="/"><i className="bi bi-instagram"></i> company</Link>
              </li>
              <li className='list-unstyled mb-2'>
                <Link to="/"><i className="bi bi-twitter"></i> company_id</Link>
              </li>
              <li className='list-unstyled mb-2'>
                <Link to="/"><i className="bi bi-facebook"></i> company</Link>
              </li>
            </ul>
          </Col>
          <Col className='col col-lg-3 col-md-6 col-12'>
            <ul>
              <li className='list-unstyled'>
                <h5 className='mt-lg-0 mt-md-0 mt-4 mb-3'>Contact</h5>
              </li>
              <li className='list-unstyled mb-2'>
                <Link to="/"><i className="bi bi-geo-alt-fill"></i> Jl. Letjen abc, Malang, Jawa Timur</Link>
              </li>
              <li className='list-unstyled mb-2'>
                <Link to="/"><i className="bi bi-telephone-fill"></i> +9898279387</Link>
              </li>
              <li className='list-unstyled mb-2'>
                <Link to="/"><i className="bi bi-envelope-at-fill"></i> company@gmail.com</Link>
              </li>
              <li className='list-unstyled'>
                <div className="map mt-4">
                  <Iframe className='rounded-3' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.8835255288836!2d107.65409548775703!3d-6.904529470979882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7930d4629e1%3A0x37d531c82707fa9f!2sJl.%20A.%20Yani%20No.756%2C%20Padasuka%2C%20Kec.%20Kiaracondong%2C%20Kota%20Bandung%2C%20Jawa%20Barat%2040125!5e0!3m2!1sid!2sid!4v1668694705539!5m2!1sid!2sid" 
                  allowfullscreen="" loading="lazy"></Iframe>
                </div>
              </li>
              
            </ul>
            
          </Col>
          <div className="input-group mb-3 ">
  <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
  <span className="input-group-text" id="basic-addon2">Subscribe</span>
</div>
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

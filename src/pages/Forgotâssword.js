import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import BreadCump from "../conmponentes/BreadCump";
import PageHelmet from "../conmponentes/Helmet";
import { Link } from "react-router-dom";
const Forgotpassword = () => {
  return (
    <>
      <PageHelmet title="forgot-password" />
      <BreadCump title="forgot-password" />
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="login-card ">
            <h3 className="text-center">Oublier votre mot de passe!</h3>

              <form action="">
                <div>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Email"
                      type="email"
                      aria-label="Email"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                </div>
                
                <br/>

                <div className="d-flex justify-content-center gap-15 align-items-center">
                  
                <Link to="/reset-password" className="button signup">Soumettre</Link>
                  <Link to="/login" className="button signup">Cancel</Link>
                  
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forgotpassword;

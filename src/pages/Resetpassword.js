import React from "react";
import BreadCump from "../conmponentes/BreadCump";
import PageHelmet from "../conmponentes/Helmet";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Link } from "react-router-dom";
const Resetpassword = () => {
  return (
    <>
      <PageHelmet title="reset-password" />
      <BreadCump title="reset-password" />
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="login-card ">
              <h3 className="text-center">Resetpassword</h3>
              <form action="">
                <div>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="mot de passe"
                      type="Password"
                      aria-label="Password"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                </div>

                <br />
                <div>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Confirmer mot de passe"
                      type="Password"
                      aria-label="Password"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                </div>

                <br />
                <div className="d-flex justify-content-center gap-15 align-items-center">
                  <Link to="/" className="button signup">
                    Reset
                  </Link>
                  <Link to="/login" className="button signup">
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resetpassword;

import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import BreadCump from "../conmponentes/BreadCump";
import PageHelmet from "../conmponentes/Helmet";
import { Link, useNavigate } from "react-router-dom";
import { setIn, useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { object, string } from "yup";
import { ResetToken } from "../features/User/UserSlice";

const Forgotpassword = () => {
  const dispatch = useDispatch();
  const LoginSchema = object({

    email: string()
      .email("L'email doit être valide")
      .required("L'email doit être obligatoire"),
   
  });
  const formik = useFormik({
    initialValues: {
      email: ""
      
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      dispatch(ResetToken(values))
      
    },
  });

  return (
    <>
      <PageHelmet title="forgot-password" />
      <BreadCump title="forgot-password" />
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="login-card ">
            <h3 className="text-center">Oublier votre mot de passe!</h3>

              <form onSubmit={formik.handleSubmit}>
                <div>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Email"
                      type="email"
                      name="email"
                      aria-label="Email"
                      aria-describedby="basic-addon1"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                    />
                  </InputGroup>
                </div>
                
                <br/>

                <div className="d-flex justify-content-center gap-15 align-items-center">
                  
                <button type="submit" className="button signup">Soumettre</button>
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

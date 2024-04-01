import React from "react";
import BreadCump from "../conmponentes/BreadCump";
import PageHelmet from "../conmponentes/Helmet";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { setIn, useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";

import { object, string } from "yup";
import { Reset_password } from "../features/User/UserSlice";
const Resetpassword = () => {
  
const location = useLocation()
const token = location.pathname.split('/')[2]
  const dispatch = useDispatch();
  const LoginSchema = object({

   
      password: string().required("Le mot de passe est obligatoire"),
  });
  const navigate=useNavigate()
  const formik = useFormik({
    initialValues: {
      
     
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      dispatch(Reset_password({ token: token, password: values.password }));
      
    },
  });
  return (
    <>
      <PageHelmet title="reset-password" />
      <BreadCump title="reset-password" />
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="login-card ">
              <h3 className="text-center">Resetpassword</h3>
              <form onSubmit={formik.handleSubmit}>
                {/* <div>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="email"
                      type="email"
                      aria-label="Email"
                      aria-describedby="basic-addon1"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email} 
                      name="email"
                    />
                  </InputGroup>
                </div> */}

                <br />
                <div>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="mot de passe"
                      type="Password"
                      aria-label="Password"
                      aria-describedby="basic-addon1"
                      name="password"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.password}
                    />
                  </InputGroup>
                </div>

                <br />
                <div className="d-flex justify-content-center gap-15 align-items-center">
                  <button type="submit" className="button signup">
                    Reset
                  </button>
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

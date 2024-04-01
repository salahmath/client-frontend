import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import BreadCump from "../conmponentes/BreadCump";
import PageHelmet from "../conmponentes/Helmet";
import { Link, useNavigate } from "react-router-dom";
import { setIn, useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";

import { object, string } from "yup";
import { LoginUser } from "../features/User/UserSlice";
const Login = () => {
  const dispatch = useDispatch();
  const LoginSchema = object({

    email: string()
      .email("L'email doit être valide")
      .required("L'email doit être obligatoire"),
   
    password: string().required("Le mot de passe est obligatoire"),
  });
  const authState=useSelector((state)=>state.auth)
  const navigate=useNavigate()
  const formik = useFormik({
    initialValues: {
      lastname: "",
      Secondname: "",
      email: "",
      mobile: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      dispatch(LoginUser(values))
      .then(() => {
        if (authState.isSuccess && authState.user.length !== 0) {
          setTimeout(() => {
          }, 100);
        }
      })
      .catch((error) => {
        console.error("Erreur lors de la connexion:", error);
      });
    },
  });

  return (
    <>
      <PageHelmet title="Login" />
      <BreadCump title="Login" />
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="login-card ">
            <h3 className="text-center">Se connecter</h3>

              <form action="" onSubmit={formik.handleSubmit}>
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
                  {formik.touched.email && formik.errors.email ? (
                    <div className="error">{formik.errors.email}</div>
                  ) : null}
                </div>

                <div>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="mot de passe"
                      type="Password"
                      aria-label="Password"
                      name="password"
                      aria-describedby="basic-addon1"
                      onChange={formik.handleChange("password")}
                      onBlur={formik.handleBlur("password")}
                      value={formik.values.password}
                    />
                  </InputGroup>
                  <div className="error">
                    {formik.touched.password && formik.errors.password}
                  </div>
                <a href="http://localhost:3000/forgot-password">oublier votre mot de passe?</a>

                </div>
               
                <br/>

                <div className="d-flex justify-content-center gap-15 align-items-center">
                  <button type="submit" className="button border-0">Se connecter</button>
                  <Link to="/register" className="button signup">S'inscrire</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

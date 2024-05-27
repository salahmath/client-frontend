import React from "react";
import BreadCump from "../conmponentes/BreadCump";
import PageHelmet from "../conmponentes/Helmet";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";

import { object, string,number } from "yup";
import { registerUser } from "../features/User/UserSlice";
const Register = () => {
  const RegisterSchema = object({
    lastname: string().required("Le nom est obligatoire"),
    Secondname: string().required("Le deuxième nom est obligatoire"),
    email: string()
      .email("L'email doit être valide")
      .required("L'email doit être obligatoire"),
    mobile:
    number().required("Le mobile est obligatoire").typeError('Doit être un nombre')
    .positive('Doit être un nombre positif')
    .integer('Doit être un nombre entier')
    .test(
      'len',
      'Doit comporter exactement 8 chiffres',
      val => val.toString().length === 8
    ).test(
      'startsWith',
      'Le numéro de mobile doit commencer par 2, 3, 4, 5, 7 ou 9',
      val => /^[2-3579]/.test(val.toString())
    ),
    password: string().required("Le mot de passe est obligatoire"),
  });

  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      lastname: "",
      Secondname: "",
      email: "",
      mobile: "",
      password: "",
    },
    validationSchema: RegisterSchema,
    onSubmit: (values) => {
      dispatch(registerUser(values));
    },
  });

  return (
    <>
      <PageHelmet title="Register" />
      <BreadCump title="Register" />
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="login-card ">
              <h3 className="text-center">Enregistrer</h3>

              <form onSubmit={formik.handleSubmit}>
                <div>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Nom"
                      type="text"
                      name="lastname"
                      aria-label="lastname"
                      aria-describedby="basic-addon1"
                      onChange={formik.handleChange("lastname")}
                      onBlur={formik.handleBlur("lastname")}
                      value={formik.values.lastname}
                    />
                  </InputGroup>
                  <div className="error">
                    {formik.touched.lastname && formik.errors.lastname}
                  </div>
                </div>

                <br />

                <div>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Prénom"
                      name="Secondname"
                      type="text"
                      aria-label="Secondname"
                      aria-describedby="basic-addon1"
                      onChange={formik.handleChange("Secondname")}
                      onBlur={formik.handleBlur("Secondname")}
                      value={formik.values.Secondname}
                    />
                  </InputGroup>
                  <div className="error">
                    {formik.touched.Secondname && formik.errors.Secondname}
                  </div>
                </div>

                <br />

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

                <br />

                <div>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Mobile"
                      type="number"
                      aria-label="Mobile"
                      name="mobile"
                      aria-describedby="basic-addon1"
                      onChange={formik.handleChange("mobile")}
                      onBlur={formik.handleBlur("mobile")}
                      value={formik.values.mobile}
                    />
                  </InputGroup>
                  <div className="error">
                    {formik.touched.mobile && formik.errors.mobile}
                  </div>
                </div>
                <br />
                <div>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Mot de passe"
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
                </div>

                <br />
                <div className="d-flex justify-content-center gap-15 align-items-center">
                  <button type="submit" className="button signup">
                    Enregistrer
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;

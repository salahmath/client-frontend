import React, { useEffect, useState } from "react";
import BreadCump from "../conmponentes/BreadCump";
import PageHelmet from "../conmponentes/Helmet";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Button, Flex, Input, Typography } from 'antd';
import { object, string,number } from "yup";
import { Send, exporState, registerUser } from "../features/User/UserSlice";
import { Divider, Steps } from 'antd';
import { useNavigate } from "react-router-dom";

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
    password: string().required("Le mot de passe est obligatoire").min(8,"Mot de passe doit être d'au moins 8 caractères"),
  });
  const validation1Schema = object({
    
    number:
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
  });
  const onChange = (text) => {
    console.log('onChange:', text);
  };
  const { Title } = Typography;
   const sharedProps = {
    onChange,
  };
  const [current, setCurrent] = useState(0);
  const [value, setvalue] = useState("");

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const onChange1 = (currentStep) => {
    console.log('onChange:', currentStep);
    setCurrent(currentStep);
  };

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
      // Ajoutez la valeur de l'entrée OTP à l'objet values avant de soumettre les données
      const updatedValues = { ...values, body: value };
      dispatch(registerUser(updatedValues));
    },
  });
  const navigate = useNavigate()
  const states = useSelector((state)=>state?.auth?.message1)
  
  function generateRandomNumber() {
    const randomNumber = Math.floor(10000000 + Math.random() * 90000000);
    return randomNumber.toString().substring(0, 8); // Assurez-vous que le numéro généré a 8 chiffres
  };  
  const formik1 = useFormik({
    initialValues: {
      number: "",
      body:generateRandomNumber()
    },
    validationSchema: validation1Schema,
    onSubmit: (values1) => {
     dispatch(Send(values1)).then(()=>{
      next()
     })
     
    },
  });
  useEffect(()=>{
if(states){
  navigate("/login")
  dispatch(exporState())
}
  },[states?.isSuccess,states])
  return (
    <>
      <PageHelmet title="Register" />
      <BreadCump title="Register" />
      <div className="login-wrapper home-wrapper-2">
      <div className="row">
      <div className="row">
  <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 mx-auto">
    <Steps current={current} onChange={onChange1}>
      <Steps.Step title="1" />
      <Steps.Step title="2" />
    </Steps>
  </div>
</div>

         
      <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mx-auto">
      {current === 0 ? (
          <>
        
            <div className="login-card ">
              <h3 className="text-center">Ecriver votre numéro de téléphone</h3>

              <form onSubmit={formik1.handleSubmit}>
                <div>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="mobile"
                      type="number"
                      name="number"
                      aria-label="number"
                      aria-describedby="basic-addon1"
                      onChange={formik1.handleChange("number")}
                      onBlur={formik1.handleBlur("number")}
                      value={formik1.values.number}
                    />
                  </InputGroup>
                  <div className="error">
                    {formik1.touched.number && formik1.errors.number}
                  </div>
                </div>

                <br />
                <br />
                <div className="d-flex justify-content-center gap-15 align-items-center">
                  <button type="submit" className="button signup">
                    Envoyer
                  </button>
                  {current > 0 && (
                    <button onClick={prev} className="button signup">
                      Previous
                    </button>
                  )}
                  {current < 1 && (
                    <button className="button signup" type="primary" onClick={next}>
                      Next
                    </button>
                  )}
                </div>
                
              </form>
            </div>
          </>
        ): (
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
                  <Flex gap="middle" align="flex-start" vertical>
      
      <Title level={5}>votre code de (8) chiffres</Title>
      <Input.OTP length={8}     onChange={(value) => setvalue(value)}
/>
      
    </Flex>
                  <div className="error">
                    {formik.touched.password && formik.errors.password}
                  </div>
                </div>

                <br />
                
                <div className="d-flex justify-content-center gap-15 align-items-center">
                <div >
                  {current > 0 && (
                    <button className="button signup" onClick={prev}>
                      Retour
                    </button>
                  )}
                  {current < 1 && (
                    <button className="button signup" type="primary" onClick={next}>
                      Suivant
                    </button>
                  )}
                  </div>
                  <button type="submit" className="button signup">
                    Enregistrer
                  </button>
                 
                </div>
               
              </form>
            </div>
          
       )}
         
      </div>
      </div>
      </div>
    </>
  );
};

export default Register;

import React, { useEffect, useState } from "react";
import BreadCump from "../conmponentes/BreadCump";
import PageHelmet from "../conmponentes/Helmet";
import { Flex, Button, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Getauser, UpdateAuser } from "../features/User/UserSlice";
import { useFormik } from "formik";
import { object, string, number } from "yup";
import { CiEdit } from "react-icons/ci";
import { toast } from "react-toastify";

const Profil = () => {
  const [editable, setEditable] = useState(false);
  const [data, setData] = useState();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Getauser());
  }, [dispatch]);

  const UserState = useSelector((state) => state.auth?.Auser?.aUser);
  let userSchema = object({
    lastname: string().required(),
    Secondname: string().required(),
     email: string()
      .email("L'email doit être valide")
      .required("L'email doit être obligatoire"),
    mobile:  number().required("Le mobile est obligatoire").typeError('Doit être un nombre')
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
  
  const formik = useFormik({
    validationSchema: userSchema,
    enableReinitialize: true,
    initialValues: {
      lastname:UserState?.lastname ,
      Secondname: UserState?.Secondname ,
      email: UserState?.email ,
      mobile: UserState?.mobile ,
    },

    onSubmit: (values) => {
      setData(values)
      console.log(values);
     // dispatch(UpdateAuser(values))
      
  }})


  const handelchang = () => {
    const { lastname, Secondname, email, mobile } = formik.values;
  
    const mobileRegex = /^[2-3579]\d{7}$/; // Expression régulière pour vérifier si le numéro commence par 2, 3, 4, 5, 7 ou 9 et comporte 8 chiffres au total
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    // Validation du numéro de mobile
    if (!mobileRegex.test(mobile)) {
      toast.error("Merci de vérifier votre numéro de mobile.");
      return;
    }
  
    // Validation de l'email
    if (!emailRegex.test(email)) {
      toast.error("Merci de vérifier votre email.");
      return;
    }
  
    // Vérification que tous les champs requis sont remplis
    if (lastname === "" || Secondname === "" || email === "" || mobile === "") {
      toast.error("Tous les champs sont obligatoires.");
      return;
    }
  
    const data = {
      lastname,
      Secondname,
      email,
      mobile,
    };
  
    dispatch(UpdateAuser(data)).then(() => {
     window.location.reload();
    });
  };
  
  return (
    <>
      <PageHelmet title="Mon Profil" />
      <BreadCump title="Mon Profil" />
      <div className="profile-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row justify-content-center">
            <div className="col-7">
              <div className="profile_card">
               
         
                <CiEdit className="mb-4" style={{ display: 'block', margin: 'auto' }} onClick={() => setEditable(!editable)} />

                {
                  editable ?(
                    <>
                    <form onSubmit={formik.handleSubmit}>
                    <div>
                    <Flex vertical gap={12}>
                      <Input
                        placeholder="Prenom"
                        type="text"
                        name="lastname"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.lastname}
                      />
                    </Flex>
                  </div>
                  <br />
                  <div>
                    <Flex vertical gap={12}>
                      <Input
                        placeholder="Nom"
                        type="text"
                        name="Secondname"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}

                        value={formik.values.Secondname}
                      />
                    </Flex>
                  </div>
                  <br />
                  <div>
                    <Flex vertical gap={12}>
                      <Input
                        placeholder="Email"
                        type="email"
                        name="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}

                        value={formik.values.email}
                      />
                    </Flex>
                  </div>
                  <br />
                  <div>
                    <Flex vertical gap={12}>
                      <Input
                        placeholder="Mobile"
                        type="number"
                        name="mobile"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}

                        value={formik.values.mobile}
                      />
                    </Flex>
                  </div>
                  <br/>
                  <Flex gap="small" wrap="wrap">
                    <Button onClick={handelchang} type="primary" variant="outline-success">Modifier</Button>
                  </Flex>
                  </form>
                  </>
                  ) : (
                    <>
                    <div>
                    <Flex vertical gap={12}>
                      <Input
                      disabled
                        placeholder="Prenom"
                        type="text"
                        name="lastname"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.lastname}
                      />
                    </Flex>
                  </div>
                  <br />
                  <div>
                    <Flex vertical gap={12}>
                      <Input
                      disabled

                        placeholder="Nom"
                        type="text"
                        name="Secondname"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}

                        value={formik.values.Secondname}
                      />
                    </Flex>
                  </div>
                  <br />
                  <div>
                    <Flex vertical gap={12}>
                      <Input
                      disabled

                        placeholder="Email"
                        type="email"
                        name="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}

                        value={formik.values.email}
                      />
                    </Flex>
                  </div>
                  <br />
                  <div>
                    <Flex vertical gap={12}>
                      <Input
                      disabled

                        placeholder="Mobile"
                        type="number"
                        name="mobile"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}

                        value={formik.values.mobile}
                      />
                    </Flex>
                  </div>
                  <br/>
                  </>
                  )
                }
                  
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profil;

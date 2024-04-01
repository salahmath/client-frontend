import React, { useEffect, useState } from "react";
import BreadCump from "../conmponentes/BreadCump";
import PageHelmet from "../conmponentes/Helmet";
import { Flex, Button, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Getauser, UpdateAuser } from "../features/User/UserSlice";
import { useFormik } from "formik";
import { object, string, number } from "yup";

const Profil = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Getauser());
  }, [dispatch]);

  const UserState = useSelector((state) => state.auth?.Auser?.aUser);
  let userSchema = object({
    lastname: string().required(),
    Secondname: string().required(),
    email: string().email().required(),
    mobile: number().required(),
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
      dispatch(UpdateAuser(values))
      .then(() => 
      setTimeout(() => {
        window.location.reload();
        
      }, 1000))

      
  }})
 
  return (
    <>
      <PageHelmet title="Mon Profil" />
      <BreadCump title="Mon Profil" />
      <div className="profile-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row justify-content-center">
            <div className="col-7">
              <div className="profile_card">
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
                    <Button type="primary" variant="outline-success" htmlType="submit">Update</Button>
                  </Flex>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profil;

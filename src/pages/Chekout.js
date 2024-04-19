import { useFormik } from "formik";
import React, { useEffect, useState } from "react";

import { RiCoupon3Fill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import BreadCump from "../conmponentes/BreadCump";
import PageHelmet from "../conmponentes/Helmet";
import {
  Applycoupon,
  CreatOrder,
  Deleteaproduitpanier,
  GetCart,
  Up2,
  payer,
} from "../features/User/UserSlice";

import { number, object, string } from "yup";
import { getClient } from "../utils/URL"; // Import des modules exportés depuis le fichier URL.js

import axios from "axios";
import { toast } from "react-toastify";
const headers = getClient();

const Chekout = (props) => {
  const cartstate = useSelector((state) => state.auth.Panier);

  const [initials, setInitial] = useState(calculateTotal(cartstate));
  const [valeur, setvaleur] = useState("");
  const [array, setarray] = useState([]);
  const [apparait, setapparait] = useState(false);
  const initial = props.location?.state?.initial;
  const [countries, setCountries] = useState([]);
  const [idayent, setidayent] = useState("");
  useEffect(() => {
    if (valeur === "") {
      setInitial(calculateTotal(cartstate));
    } else {
      setInitial(valeur);
    }
  }, [valeur, cartstate]);

  const [Shippinginfo, setShippinginfo] = useState([]);
  const [Idpayment, setpaymentInfo] = useState({ Paymentid: "" });
  const [tot, settot] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [states, setStates] = useState([]);
  const [salah, setSalah] = useState("");
  const [Cardproduct, setCardproduct] = useState();
  let orderSchema = object({
    firstName: string().required("Il faut écrire votre prénom."),
    lastName: string().required("Il faut écrire votre nom de famille."),
    Address: string().required("Il faut écrire votre adresse."),
    City: string().required("Il faut écrire votre ville."),
    State: string().required("Il faut écrire votre état."),
    CodePin: number().required("Il faut écrire votre code PIN."),
    Other: string().required("Il faut écrire votre Other."),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      Address: "",
      City: "",
      State: "",
      CodePin: "",
      Other: "",
    },
    validationSchema: orderSchema,
    onSubmit: async (values) => {
      try {
        // Exécuter handlePayment en premier pour obtenir l'ID de paiement
        const idPayment = await handlePayment(initials);
    
        // Exécuter setShippinginfo
        setShippinginfo(values);
    
        // Appeler CreatOrder avec les valeurs mises à jour
        dispatch(
          CreatOrder({
            totalPrice: initials,
            totalPriceAfterdiscount: initials,
            orderItems: Cardproduct,
            Shippinginfo: values,
            IdPayment: idPayment, 
          })
        );
       
      } catch (err) {
        console.log(err);
      }
    }
    
    })
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetCart());
  }, [dispatch]);
  function calculateTotal(cartstate) {
    let total = 0;
    if (cartstate && cartstate.length > 0) {
      for (let i = 0; i < cartstate.length; i++) {
        total += cartstate[i].quantite * cartstate[i].price;
      }
    }

    return total;
  }

  useEffect(() => {
    // Appelez calculateTotal et mettez à jour l'état tot
    settot(calculateTotal(cartstate));
  }, [cartstate]); // Utilisez cartstate comme dépendance pour que l'effet soit exécuté à chaque changement

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tokenResponse = await axios.get(
          "https://www.universal-tutorial.com/api/getaccesstoken",
          {
            headers: {
              Accept: "application/json",
              "api-token":
                "WjeATWbSkLzhkjBl5iOInxJSaAIh_31VDY6zFU0gk-V9Al0GmVMeZufe3wpNNxOipd8",
              "user-email": "salahmathlouthi000@gmail.com",
            },
          }
        );

        const authToken = tokenResponse.data.auth_token;

        const countriesResponse = await axios.get(
          "https://www.universal-tutorial.com/api/countries/",
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
              Accept: "application/json",
            },
          }
        );

        setCountries(countriesResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const handleCountryChange = async (event) => {
    const selectedCountryName = event.target.value;
    setSelectedCountry(selectedCountryName);
    try {
      const tokenResponse = await axios.get(
        "https://www.universal-tutorial.com/api/getaccesstoken",
        {
          headers: {
            Accept: "application/json",
            "api-token":
              "WjeATWbSkLzhkjBl5iOInxJSaAIh_31VDY6zFU0gk-V9Al0GmVMeZufe3wpNNxOipd8",
            "user-email": "salahmathlouthi000@gmail.com",
          },
        }
      );

      const authToken = tokenResponse.data.auth_token;

      const statesResponse = await axios.get(
        `https://www.universal-tutorial.com/api/states/${selectedCountryName}`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
            Accept: "application/json",
          },
        }
      );

      setStates(statesResponse.data);
    } catch (error) {
      console.error("Error fetching states:", error);
    }
  };
  const [paymentResult, setPaymentResult] = useState(null);
  const orderstate = useSelector((state) => state?.auth);
  const loginstate = useSelector((state) => state?.auth?.user);
  const paystate = useSelector((state) => state?.auth?.payer?.responseData?.result?.payment_id);
  const link = useSelector((state) => state?.auth?.payer?.responseData?.result?.link);
  const createorder = useSelector((state) => state?.auth?.CreatOrder.order);
console.log(paystate);
const handlePayment = async (total) => {
  try {
    const response = await axios.post(
      "http://127.0.0.1:5000/api/user/paymentsuccess",
      { amount: total * 1000 },
      headers
    );
    

    setPaymentResult(response.data);
    const paymentId = response.data.responseData.result.payment_id;
    setidayent(paymentId);

    
      setSalah(response.data.responseData.result.link)
     if(paymentId !=="" && salah !=="" ){
      window.location.href=response.data.responseData.result.link
    }
     
    // Retourne l'ID de paiement
    return paymentId;
  } catch (error) {
    console.error("Error during payment:", error);
    setPaymentResult(null);
    throw error; // Re-lancez l'erreur pour qu'elle soit gérée par l'appelant
  }
};
useEffect(()=>{

    if( createorder){
      window.location.href=salah
    }

  
},[salah,createorder]) 
  useEffect(() => {
    let items = [];
    for (let index = 0; index < cartstate?.length; index++) {
      items.push({
        product: cartstate[index].productId._id,
        quantity: cartstate[index].quantite,
        color: cartstate[index].color[0]._id,
        price: cartstate[index].price,
      });
    }
    setCardproduct(items);
  }, [cartstate]);
  const location = useLocation();
  const locationId = location.search.split("?payment_id=")[1];
  const handlePayments = async () => {
    try {
      const response = await axios.post(
        `http://127.0.0.1:5000/api/user/paymentverif/${locationId}`, // Utilisez backticks pour incorporer la variable locationId
        null, 
        headers 
      );
      const data = response.data;
      if (data.data.result.status === "SUCCESS") {
        setTimeout(() => {
          toast.success("Payment succeeded!");
          navigate("/order");
          const data1 = {
            type: data.data.result.type,
            id: locationId
          };
          
          // Dispatch de l'action Up2 avec l'objet contenant à la fois l'id et le type
          dispatch(Up2(data1));
          
          // Dispatch de l'action Deleteaproduitpanier
          dispatch(Deleteaproduitpanier());
        }, 300);
      }
      
    } catch (error) {
      console.error("Error during payment:", error);
    }
  };
  useEffect(() => {
    // Utilisez useEffect pour exécuter handlePayment lorsque le composant est monté
    handlePayments();
  }, []);

  const utiliserCoupon = () => {
    const data = { coupon: array, total: calculateTotal(cartstate) };
    dispatch(Applycoupon(data))
      .then((response) => {
        const couponAppliedValue = response.payload;
        if (couponAppliedValue) {
          setvaleur(couponAppliedValue);
        } else {
          console.error("Error: Empty payload received.");
        }
      })
      .catch((error) => {
        console.error("Error applying coupon:", error);
      });
  };
  return (
    <>
      <PageHelmet title=" Chekout " />
      <BreadCump title=" Chekout " />
      <div className="chekout -wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-7">
              
              <h3 className="website-name">Odoo Expert</h3>

              <nav
                style={{ "--bs-breadcrumb-divider": "'>'" }} // Correction ici
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/cart">Cart</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Information
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    shipping
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Payment
                  </li>
                </ol>
              </nav>
              <h4 className="title">Information de client</h4>
              <p className="user-details total">
              {loginstate?.lastname}{loginstate?.Secondname}({loginstate?.email}) vous avais une coupon! <RiCoupon3Fill onClick={() => setapparait(true)} />
              </p>
              <form
                onSubmit={formik.handleSubmit}
                className="d-flex gap-15 flex-wrap justify-content-between"
              >
                <div className="w-100">
                  <select
                    onChange={(event) => {
                      handleCountryChange(event);
                    }}
                    className="form-control form-select"
                    id=""
                  >
                    <option value="" disabled selected>
                      Choisissez votre pays
                    </option>
                    {countries.map((country) => (
                      <option
                        key={country.country_short_name}
                        value={country.country_name}
                      >
                        {country.country_name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Votre prenom"
                    name="lastName"
                    onChange={formik.handleChange("lastName")}
                    onBlur={formik.handleBlur("lastName")}
                    value={formik.values.lastName}
                  />
                  <div className="text-danger">
                    {formik.touched.lastName && formik.errors.lastName}
                  </div>
                </div>

                <div className="flex-grow-1">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Votre nom"
                    name="firstName"
                    onChange={formik.handleChange("firstName")}
                    onBlur={formik.handleBlur("firstName")}
                  />
                  <div className="text-danger">
                    {formik.touched.firstName && formik.errors.firstName}
                  </div>
                </div>

                <div className="w-100">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Votre Address"
                    name="Address"
                    onChange={formik.handleChange("Address")}
                    onBlur={formik.handleBlur("Address")}
                    value={formik.values.Address}
                  />
                  <div className="text-danger ">
                    {formik.touched.Address && formik.errors.Address}
                  </div>
                </div>

                <div className="w-100">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Appartement , Suite ,etc"
                    name="Other"
                    onChange={formik.handleChange("Other")}
                    onBlur={formik.handleBlur("Other")}
                    value={formik.values.Other}
                  />
                  <div className="text-danger">
                    {formik.touched.Other && formik.errors.Other}
                  </div>
                </div>

                <div className="flex-grow-1">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Pays"
                    name="City"
                    onChange={formik.handleChange("City")}
                    onBlur={formik.handleBlur("City")}
                    value={formik.values.City}
                  />
                  <div className="text-danger text-xs">
                    {formik.touched.City && formik.errors.City}
                  </div>
                </div>

                <div className="flex-grow-1">
                  <select
                    name="State"
                    onChange={formik.handleChange("State")}
                    onBlur={formik.handleBlur("State")}
                    value={formik.values.State}
                    className="form-control form-select"
                    id=""
                  >
                    <option selected>Choisissez votre état</option>
                    {states.map((state) => (
                      <option key={state.state_name} value={state.state_name}>
                        {state.state_name}
                      </option>
                    ))}
                  </select>
                  <div className="text-danger text-xs">
                    {formik.touched.State && formik.errors.State}
                  </div>
                </div>

                <div className="flex-grow-1">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Code postal"
                    name="CodePin"
                    onChange={formik.handleChange("CodePin")}
                    onBlur={formik.handleBlur("CodePin")}
                    value={formik.values.CodePin}
                  />
                  <div className="text-danger text-xs">
                    {formik.touched.CodePin && formik.errors.CodePin}
                  </div>
                </div>

                <div className="w-100">
                  <div className="d-flex align-items-center justify-content-between">
                    <Link to="/carte">Retour a panier</Link>
                    <Link className="button">contunie shipping</Link>
                    <button type="submit" className="button">
                      Acheter
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <div className="col-5">
              <div className="border-bottom py-4">
                {cartstate &&
                  cartstate.map((cart) => {
                    return (
                      <div className="d-flex gap-10 align-items-center">
                        <div className="w-75 d-flex gap-15">
                          <div className="w-25 position-relative">
                            <img
                              className="img-fluid"
                              src={cart.productId.images[0].url}
                              alt="imig"
                            />
                          </div>
                          <div>
                            <h5 className="title">
                              {cart?.quantite}* {cart.productId.title}
                            </h5>
                            <p>{cart.productId.brand}</p>
                            <p>
                              <ul className="colors ps-0">
                                <li
                                  style={{
                                    backgroundColor: cart.color[0].name,
                                  }}
                                >
                                  {" "}
                                </li>
                              </ul>
                            </p>
                          </div>
                        </div>

                        <div className="flex-grow-1">
                          <h5>{cart.productId.price}DT</h5>
                        </div>
                      </div>
                    );
                  })}
              </div>
              <div className="border-bottom py-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <p className="total">SubTotal</p>
                    <p className="total">shipping</p>
                  </div>
                  <div>
                    <p className="total-rice">Total :{initials}DT</p>
                    <p className="total-rice">Free</p>
                    {apparait ? (
                      <>
                        <input
                          type="text"
                          placeholder="ecriver votre id coupon"
                          value={array}
                          onChange={(e) => setarray(e.target.value)}
                        />
                        <button className="button" onClick={utiliserCoupon}>
                          utiliser coupon
                        </button>
                      </>
                    ) : (
                      ""
                    )}
                    <div></div>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center border-bottom py-4">
                <h3 className="total">Total</h3>
                <p className="total-price">{initials}DT</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chekout;

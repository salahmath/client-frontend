import React, { useState,useEffect } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import BreadCump from "../conmponentes/BreadCump";
import PageHelmet from "../conmponentes/Helmet";
import { Addenq, GetAuser } from "../features/User/UserSlice";
import { toast } from "react-toastify";
const Contact = () => {
  const [name, setNom] = useState("");
  const [email, setemail] = useState("");
  const [mobile, setmobile] = useState("");
  const [message, setmessage] = useState("");
  const [ProductPresent, SetProductPresent] = useState(false);
const dispatch=useDispatch()
useEffect(() => {
  dispatch(GetAuser());
}, [dispatch]);
const Auser = useSelector((state) => state?.auth?.GetAuser?.aUser);

const ajouter = () => {
  const mobileRegex = /^[2-3579]\d{7}$/; // Expression régulière pour vérifier si le numéro commence par 2, 3, 4, 5, 7 ou 9 et comporte 8 chiffres au total
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!mobileRegex.test(mobile)) {
    toast.error("Merci de vérifier votre numéro de mobile.");
    return;
  }
  if (!emailRegex.test(email)) {
    toast.error("Merci de vérifier votre email.");
    return;
  }
  
  if (name !== "" && email !== "" && mobile !== "" && message !== "") {
    dispatch(Addenq({ name, email, mobile, message }));
  } else {
    toast.error("Merci de remplir tous les champs.");
  }
};


  

  return (
    <>
      <PageHelmet title="Contact" />
      <BreadCump title="Contact" />
      <div className="contact-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.49256315092!2d10.184356675352609!3d36.8546271646305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd34b46e3bb0f3%3A0xa0b1fa32a7138952!2sMSI%20Consultants!5e0!3m2!1sfr!2stn!4v1710503476156!5m2!1sfr!2stn"
                width={"100%"}
                height={450}
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-12  mt-4 mt-md-0">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-title">formulaire de Contact</h3>
                  <form action="">
                    <div className=" contact-formulaire">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="name"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        onChange={(e) => {
                          setNom(e.target.value);
                        }}
                      />
                      <br />
                      <input type="email" class="form-control" placeholder="Email" onChange={(e) => { setemail(e.target.value); }} />

                      <br />

                      <input
                        type="Number"
                        class="form-control"
                        placeholder="Mobile"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        onChange={(e) => {
                          setmobile(e.target.value);
                        }}
                      />
                      <br />

                      <textarea
                        class="form-control"
                        placeholder="Commentaires"
                        aria-label="With textarea"
                        onChange={(e) => {
                          setmessage(e.target.value);
                        }}
                      ></textarea>
                      <br />
                      <button disabled={Auser?.isblocked===true}  type="button" class="btn btn-outline-dark" onClick={ajouter}>
                      {Auser?.isblocked===true ? ("Vous été bloquer d'un raison de sécuritée"):("Envoyer")}
                    
                      </button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title">Prenez contact avec nous</h3>
                  <div>
                    <ul className="uls ps-0">
                      <li className="mb-4">
                        <IoHomeOutline
                          style={{ marginRight: "10px", fontSize: "24px" }}
                        />
                        <span style={{ marginLeft: "10px" }}>
                          MSI Consultants
                        </span>
                      </li>

                      <li className="mb-4">
                        <IoCallOutline
                          style={{ marginRight: "10px", fontSize: "24px" }}
                        />
                        <span style={{ marginLeft: "10px" }}>
                          <a href="tel:+216 28 896 143">+216 28 896 143</a>
                        </span>
                      </li>

                      <li className="mb-4">
                        <IoMailOutline
                          style={{ marginRight: "10px", fontSize: "24px" }}
                        />
                        <span style={{ marginLeft: "10px" }}>
                          {" "}
                          <a href="mailto:sami.g3@hotmail.fr">
                            sami.g3@hotmail.fr
                          </a>
                        </span>
                      </li>

                      <li className="mb-4">
                        <IoIosInformationCircleOutline
                          style={{ marginRight: "10px", fontSize: "24px" }}
                        />
                        <span style={{ marginLeft: "10px" }}>
                          Disponibilité : 7 jours sur 7, 24 heures sur 24
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

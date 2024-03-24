import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { IoIosInformationCircleOutline } from "react-icons/io";

import BreadCump from "../conmponentes/BreadCump";
import PageHelmet from "../conmponentes/Helmet";
const Contact = () => {
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
            <div className="col-12 mt-15 ">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-title">formulaire de Contact</h3>
                  <form action="">
                    <div className=" contact-formulaire">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Nom"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                      <br />
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Email"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                      <br />

                      <input
                        type="text"
                        class="form-control"
                        placeholder="Mobile"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                      <br />

                      <textarea
                        class="form-control"
                        placeholder="Commentaires"
                        aria-label="With textarea"
                      ></textarea>
                      <br />
                      <button type="button" class="btn btn-outline-dark">
                        Dark
                      </button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title">Prenez contact avec nous</h3>
                  <div>
                  <ul className="uls ps-0">
  <li className="mb-4">
    <IoHomeOutline style={{ marginRight: '10px', fontSize: '24px' }} />
    <span style={{ marginLeft: '10px' }}>MSI Consultants</span>
  </li>

  <li className="mb-4">
    <IoCallOutline style={{ marginRight: '10px', fontSize: '24px' }} />
    <span style={{ marginLeft: '10px' }}><a href="tel:+216 28 896 143">+216 28 896 143</a></span>
  </li>

  <li className="mb-4">
    <IoMailOutline style={{ marginRight: '10px', fontSize: '24px' }} />
    <span style={{ marginLeft: '10px' }}> <a href="mailto:Salahmathlouthi@gmail.com">Salahmathlouthi@gmail.com</a></span>
  </li>

  <li className="mb-4">
    <IoIosInformationCircleOutline style={{ marginRight: '10px', fontSize: '24px' }} />
    <span style={{ marginLeft: '10px' }}>Disponibilité : 7 jours sur 7, 24 heures sur 24</span>
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

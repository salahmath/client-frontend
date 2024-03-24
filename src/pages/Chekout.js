import React from "react";

import BreadCump from "../conmponentes/BreadCump";
import PageHelmet from "../conmponentes/Helmet";
import { Link } from "react-router-dom";
const Chekout = () => {
  return (
    <>
      <PageHelmet title=" Chekout" />
      <BreadCump title=" Chekout" />
      <div className="chekout-wrapper py-5 home-wrapper-2">
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
              <p className="user-details total">Salah mathlouthi (salah@gmail.com)</p>
              <form
                action=""
                className="d-flex gap-15 flex-wrap justify-content-between"
              >
                <div className="w-100">
                  <select name="" className="form-control form-select" id="">
                    <option value="" selected disabled>
                      Choisie votre pays
                    </option>
                  </select>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Votre nom"
                  />
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Votre prenom"
                  />
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Votre Address"
                  />
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Appartement , Suite ,etc"
                  />
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Pays"
                  />
                </div>
                <div className="flex-grow-1">
                  <select name="" className="form-control form-select" id="">
                    <option value="" selected disabled>
                      Choisie votre Etat
                    </option>
                  </select>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Code postal"
                  />
                </div>
                <div className="w-100">
                  <div className="d-flex align-items-center justify-content-between">
                    <Link to="/carte">Retour a panier</Link>
                    <Link className="button" to="/carte">
                      contunie shipping
                    </Link>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-5">
              <div className="border-bottom py-4">
                <div className="d-flex gap-10 align-items-center">
                  <div className="w-75 d-flex gap-15">
                    <div className="w-25 position-relative">
                      <span 
                      style={{bottom: '60%',left: '70%'}}
                      className="badge bg-secondary text-white rounded-circle p-3 position-absolute">
                        1
                      </span>
                      <img
                        className="img-fluid"
                        src="https://cdn.thewirecutter.com/wp-content/media/2021/09/ipad-2048px-0127.jpg"
                        alt="imig"
                      />
                    </div>

                    <div>
                      <h5 className="title"> Title</h5>
                      <p>gbfkj fkj </p>
                    </div>
                  </div>

                  <div className="flex-grow-1">
                    <h5>100 DT</h5>
                  </div>
                </div>
              </div>
              <div className="border-bottom py-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <p className="total">SubTotal</p>
                    <p className="total">shipping</p>
                  </div>
                  <div>
                    <p className="total-rice">120DT</p>
                    <p className="total-rice">140DT</p>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center border-bottom py-4">
                <h3 className="total">Total</h3>
                <p className="total-price">10 DT</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chekout;

import React from "react";
import BreadCump from "../conmponentes/BreadCump";
import PageHelmet from "../conmponentes/Helmet";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
const Cartes = () => {
  return (
    <>
      <PageHelmet title=" Panier" />
      <BreadCump title=" Panier" />
      <div className="cart-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="cart-header py-3 d-flex justify-content-between">
                <h4 className="cart-col-1">Produit</h4>
                <h4 className="cart-col-2">Prix</h4>
                <h4 className="cart-col-3">Quantitr</h4>
                <h4 className="cart-col-4">Total</h4>
              </div>
              <div className="cart-data py-3 d-flex justify-content-between align-items-center">
                <div className="cart-col-1 d-flex align-iteùs-center">
                  <div className="w-25">
                    <img
                      className="img-fluid"
                      src="https://img-0.journaldunet.com/JgOAEEaKp00acGdrktPUB8Y2__8=/1500x/smart/32d90de13a5f411c86709152f70fc67c/ccmcms-jdn/10861192.jpg"
                      alt="image"
                    />
                  </div>
                  <div className="w-25">
                    <p className="title">nom : ptoduit 1</p>
                    <p className="color">coleur : hgf</p>
                    <p className="size">taille : rjefjvj</p>
                  </div>
                </div>
                <div className="cart-col-2">
                  <p>100DT</p>
                </div>
                <div className="cart-col-3 d-flex align-items-center gap-15">
                  <div>
                    <input
                      type="number"
                      className="form-control"
                      id=""
                      min={1}
                      max={10}
                      name=""
                    />
                  </div>
                  <div>
                    <AiFillDelete />
                  </div>
                </div>
                <div className="cart-col-4">
                  <p>100DT</p>
                </div>
              </div>
              <div className="cart-data py-3 d-flex justify-content-between align-items-center">
                <div className="cart-col-1 d-flex align-iteùs-center">
                  <div className="w-25">
                    <img
                      className="img-fluid"
                      src="https://img-0.journaldunet.com/JgOAEEaKp00acGdrktPUB8Y2__8=/1500x/smart/32d90de13a5f411c86709152f70fc67c/ccmcms-jdn/10861192.jpg"
                      alt="image"
                    />
                  </div>
                  <div className="w-25">
                    <p className="title">nom : ptoduit 1</p>
                    <p className="color">coleur : hgf</p>
                    <p className="size">taille : rjefjvj</p>
                  </div>
                </div>
                <div className="cart-col-2">
                  <p>100DT</p>
                </div>
                <div className="cart-col-3 d-flex align-items-center gap-15">
                  <div>
                    <input
                      type="number"
                      className="form-control"
                      id=""
                      min={1}
                      max={10}
                      name=""
                    />
                  </div>
                  <div>
                    <AiFillDelete />
                  </div>
                </div>
                <div className="cart-col-4">
                  <p>100DT</p>
                </div>
              </div>
            </div>
            <div className="col-12 py-2 mt-4">
              <div className="d-flex justify-content-between align-items-baseline">
                <Link to="/product" className="button">
                    continue votre shopping
                </Link>
                <div className="d-flex flex-column align-items-end">
                    <h4>Total : 1000 DT</h4>
                    <p>taxe et frais de livrasion</p>
                    <Link to="/chekout" className="button">Chekout</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cartes;

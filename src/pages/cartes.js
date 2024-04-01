import React, { useEffect, useState } from "react";
import BreadCump from "../conmponentes/BreadCump";
import PageHelmet from "../conmponentes/Helmet";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DelCart, GetCart, Updatequantite } from "../features/User/UserSlice";
import { toast } from "react-toastify";

const Cartes = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetCart());
  }, [dispatch]);

  const cartstate = useSelector((state) => state.auth.Panier);
  const [productQuantities, setProductQuantities] = useState({});

  function calculateTotal(cartstate) {
    let total = 0;
    if (cartstate && cartstate.length > 0) {
      for (let i = 0; i < cartstate.length; i++) {
        total += cartstate[i].quantite * cartstate[i].price;
      }
    }
    return total;
  }

  const updateProductQuantity = (id, newQuantity) => {
    const newQuantities = { ...productQuantities };
    newQuantities[id] = newQuantity;
    setProductQuantities(newQuantities);
  };

  const Deletecart = (id) => {
    dispatch(DelCart(id));
    setTimeout(() => {
      dispatch(GetCart());
    }, 300);
  };
  useEffect(() => {
    Object.keys(productQuantities).forEach((productId) => {
      dispatch(
        Updatequantite({
          Cart_id: productId,
          quantite: productQuantities[productId],
        })
      );
    });
    setTimeout(() => {
      dispatch(GetCart());
    }, 300);
  }, [productQuantities, dispatch]);

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
                <h4 className="cart-col-3">Quantité</h4>
                <h4 className="cart-col-4">Total</h4>
              </div>

              {cartstate &&
                cartstate.map((cart) => {
                  return (
                    <div
                      key={cart._id}
                      className="cart-data py-3 d-flex justify-content-between align-items-center"
                    >
                      <div className="cart-col-1 d-flex align-iteùs-center">
                        <div className="w-25">
                          <img
                            className="img-fluid"
                            src={cart.productId.images[0].url}
                            alt={cart.productId.title}
                          />
                        </div>
                        <div className="w-25">
                          <p className="title">nom : {cart.productId.title} </p>
                          <p className="color">
                            couleur : {}
                            <ul className="colors ps-0">
                              <li
                                style={{ backgroundColor: cart.color[0].name }}
                              ></li>
                            </ul>
                          </p>
                        </div>
                      </div>
                      <div className="cart-col-2">
                        <p>{cart.price} DT</p>
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
                            onChange={(e) => {
                              updateProductQuantity(cart._id, e.target.value);
                            }}
                            value={
                              productQuantities[cart._id] !== undefined
                                ? productQuantities[cart._id]
                                : cart.quantite
                            }
                          />
                        </div>
                      </div>
                      <div className="cart-col-4">
                        <p>{cart.quantite * cart.price} DT</p>
                      </div>
                      <div>
                        <AiFillDelete
                          onClick={() => {
                            Deletecart(cart._id);
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="col-12 py-2 mt-4">
              <div className="d-flex justify-content-between align-items-baseline">
                <Link to="/product" className="button">
                  Continuer vos achats
                </Link>

                <div className="d-flex flex-column align-items-end">
                  <h4>Total : {calculateTotal(cartstate)}</h4>
                  <p>Taxes et frais de livraison</p>
                  { calculateTotal(cartstate)!==0 ?
                    <Link to="/chekout" className="button">
                    Check-out
                  </Link>:
                  
                  <button  className="button" onClick={()=>{toast.error("votre anier est vide")}}>
                  Check-out
                  </button>
                  }
                 
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

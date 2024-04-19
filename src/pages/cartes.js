import React, { useEffect, useState } from "react";
import BreadCump from "../conmponentes/BreadCump";
import PageHelmet from "../conmponentes/Helmet";
import { AiFillDelete } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Flex, Radio } from "antd";
import { toast } from "react-toastify";

import { DelCart, GetCart, Updatequantite } from "../features/User/UserSlice";
const Cartes = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetCart());
  }, [dispatch]);

  const cartstate = useSelector((state) => state.auth.Panier);
  const [initial, setInitial] = useState(calculateTotal(cartstate));
  const [productQuantities, setProductQuantities] = useState({});

  useEffect(() => {
    setInitial(calculateTotal(cartstate));
  }, [cartstate]);

  function calculateTotal(cartstate) {
    let total = 0;
    if (cartstate && cartstate.length > 0) {
      for (let i = 0; i < cartstate.length; i++) {
        total += cartstate[i].totalCartPrice;
      }
    }
    return total;
  }

  const Deletecart = async(id) => {
    await dispatch(DelCart(id));
     setTimeout(() => {
     dispatch(GetCart());
    }, 200);
  };

  const handleCheckout = () => {
    // Vérifier si au moins un produit est hors de stock
    const outOfStockProduct = cartstate.find(
      (cart) => cart.productId.quantite <= 0
    );

    if (outOfStockProduct) {
      toast.error("Un ou plusieurs produits sont hors de stock.");
    } else {
      // Passer à la page de checkout si aucun produit n'est hors de stock
      cartstate.forEach((cart) => {
        dispatch(
          Updatequantite({
            Cart_id: cart._id,
            quantite: productQuantities[cart._id] || cart.quantite,
          })
        );
      });

      setTimeout(() => {
        dispatch(GetCart());
        navigate("/chekout");
      }, 300);
    }
  };
  const updateProductQuantity = (id, newQuantity) => {
    setProductQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: newQuantity,
    }));
  };

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

              {cartstate ? (cartstate?.map((cart) => {
                  return (
                    <div
                      key={cart._id}
                      className="cart-data py-3 d-flex justify-content-between align-items-center"
                    >
                      <div className="cart-col-1 d-flex align-iteùs-center">
                        <div className="w-25">
                          <img
                            className="img-fluid"
                            src={cart?.productId?.images[0]?.url}
                            alt={cart.productId.title}
                          />
                        </div>
                        <div className="w-25">
                          <p className="title">{cart.quantite} * {cart.productId.title} </p>
                          <p className="color">
                            couleur : {}
                            <ul className="colors ps-0">
                              <li
                                style={{
                                  backgroundColor: cart.color[0].name,
                                }}
                              ></li>
                            </ul>
                          </p>
                        </div>
                      </div>
                      <div className="cart-col-2">
                        <p>{cart.price} DT</p>
                      </div>
                      <div className="cart-col-3 d-flex align-items-center gap-15">
                        <>
                        
                        <Flex vertical gap="middle">
                          <Radio.Group
                            onChange={(e) =>
                              updateProductQuantity(cart._id, e.target.value)
                            }
                            buttonStyle="solid"
                            defaultValue={
                              cart.quantite
                            }
                          >
                            {cart.productId.quantite > 0 ? (
                              Array.from(
                                {
                                  length: Math.min(cart.productId.quantite, 10),
                                },
                                (_, i) => (
                                  <Radio.Button   key={i} value={i + 1}>
                                    {i + 1}
                                  </Radio.Button>
                                )
                              )
                            ) : (
                              <Radio.Button value="0" disabled>
                                Hors de stock
                              </Radio.Button>
                            )}
                          </Radio.Group>
                          
                           </Flex>
                        </>
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
                }))
                : ""}
                
            </div>
            <div className="col-12 py-2 mt-4">
              <div className="d-flex justify-content-between align-items-baseline">
                <Link to="/store" className="button">
                  Continuer vos achats
                </Link>

                <div className="d-flex flex-column align-items-end">
                  <h4>Total :{initial}</h4>

                  <p>Taxes et frais de livraison</p>
                  {initial !== 0 ? (
                    <button className="button" onClick={handleCheckout}>
                      Check-out
                    </button>
                  ) : (
                    <button
                      className="button"
                      onClick={() => toast.error("Votre panier est vide")}
                    >
                      Check-out
                    </button>
                  )}
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

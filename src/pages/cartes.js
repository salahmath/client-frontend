import React, { useEffect, useState } from "react";
import BreadCump from "../conmponentes/BreadCump";
import PageHelmet from "../conmponentes/Helmet";
import { AiFillDelete } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Flex, Radio } from "antd";
import { toast } from "react-toastify";

import {
  DelCart,
  Deleteaproduitpanier,
  GetAuser,
  GetCart,
  Updatequantite,
} from "../features/User/UserSlice";
import { Alert, Spin } from "antd";
const contentStyle = {
  padding: 50,
  background: "rgba(0, 0, 0, 0.05)",
  borderRadius: 4,
};

const content = <div style={contentStyle} />;
const Cartes = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true); // Nouvel état de chargement
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetAuser());
    dispatch(GetCart()).then(() => {
      setLoading(false);
    });
  }, [dispatch]);
  const Auser = useSelector((state) => state?.auth?.GetAuser?.aUser);
  const cartstate = useSelector((state) => state.auth.Panier);
  const [initial, setInitial] = useState(calculateTotal(cartstate));
  const [productQuantities, setProductQuantities] = useState({});

  useEffect(() => {
    setInitial(calculateTotal(cartstate));
  }, [cartstate]);

  function calculateTotal(cartstate) {
    let total = 0;
    if (cartstate && cartstate?.length > 0) {
      for (let i = 0; i < cartstate?.length; i++) {
        total += cartstate[i].quantite * cartstate[i].totalCartPrice;
      }
    }
    return total;
  }

  const Deletecart = async (id) => {
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
  useEffect(() => {
    if (cartstate?.length > 0 && Auser?.isblocked === true) {
      dispatch(Deleteaproduitpanier());
    }
  }, [cartstate, Auser?.isblocked]);

  return (
    <>
      <PageHelmet title=" Panier" />
      <BreadCump title=" Panier" />
      {loading ? ( // Affiche l'animation de chargement si loading est vrai
        <div className="loading-container">
          <Flex gap="small" vertical>
            <Flex gap="small"></Flex>
            <Spin tip="Chargement en cours...">
              <Alert
                message="Panier"
                description="Consultez ci-dessous la liste de tous les produits dans votre panier."
                type="info"
              />
            </Spin>
          </Flex>
        </div>
      ) : (
        <div className="cart-wrapper py-5 home-wrapper-2">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <div className="cart-header py-3 d-flex justify-content-between">
                  <h4 className="cart-col-1">liste de Produits</h4>
                </div>

                {cartstate ? (
                  cartstate.map((cart) => (
                    <div key={cart._id} className="cart-data py-3">
                      <div className="row align-items-center">
                        <div className="col-md-3 col-lg-2">
                          <img
                            className="img-fluid"
                            src={cart?.productId?.images[0]?.url}
                            alt={cart?.productId?.title}
                            onClick={() => {
                              navigate(`/produit/${cart?.productId?._id}`);
                            }}
                          />
                        </div>
                        <div className="col-md-6 col-lg-7">
                          <p className="title">
                            {cart?.quantite} * {cart?.productId?.title}{" "}
                          </p>
                          <p className="color">
                            Couleur :{" "}
                            <span
                              style={{
                                backgroundColor: cart.color[0].name,
                                width: "20px",
                                height: "20px",
                                display: "inline-block",
                                borderRadius: "50%",
                                marginLeft: "5px",
                              }}
                            ></span>
                          </p>
                        </div>
                        <div className="col-md-3 col-lg-3">
                          <p>{cart.price} DT</p>
                          <div className="d-flex align-items-center gap-15">
                            <Radio.Group
                              onChange={(e) =>
                                updateProductQuantity(cart._id, e.target.value)
                              }
                              buttonStyle="solid"
                              defaultValue={cart.quantite}
                            >
                              {cart.productId.quantite > 0 ? (
                                Array.from(
                                  {
                                    length: Math.min(
                                      cart.productId.quantite,
                                      10
                                    ),
                                  },
                                  (_, i) => (
                                    <Radio.Button key={i} value={i + 1}>
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
                          </div>
                          
                        </div>
                      
                      </div>
                      <div className="col-1">
                          <AiFillDelete
                            onClick={() => {
                              Deletecart(cart._id);
                            }}
                          />
                        </div>
                    </div>
                  ))
                ) : (
                  <p>Aucun produit dans le panier</p>
                )}
              </div>

              <div className="col-12 py-2 mt-4">
  <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center">
    <div>
      <h4>Total : {initial}</h4>
      <p>
        Livraison et taxes gratuites pour toute commande de plus de 300 DT.
      </p>
      {Auser?.isblocked === true ? (
        <p>Vous êtes bloqué pour des raisons de sécurité</p>
      ) : (
        <>
          {initial !== 0 ? (
            <button className="button me-2 mb-2 mb-sm-0" onClick={handleCheckout}>
              Vérifier
            </button>
          ) : (
            <button
              className="button me-2 mb-2 mb-sm-0"
              onClick={() => toast.error("Votre panier est vide")}
            >
              Vérifier
            </button>
          )}
          <Link to="/store" className="button">
            Continuer vos achats
          </Link>
        </>
      )}
    </div>
  </div>
</div>

            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cartes;

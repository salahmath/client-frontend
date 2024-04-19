import { Button, Input, InputNumber, Rate } from "antd";
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { CiHeart } from "react-icons/ci";
import ReactImageZoom from "react-image-zoom";
import { Link, useLocation, useNavigate } from "react-router-dom";
import BreadCump from "../conmponentes/BreadCump";
import Color from "../conmponentes/Color";
import PageHelmet from "../conmponentes/Helmet";
import Productcart from "../conmponentes/Productcart";
import { message } from "antd";
import Skeleton from "@mui/material/Skeleton";
import { DiGitCompare } from "react-icons/di";
import { useDispatch, useSelector } from "react-redux";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { CommentSection } from "react-comments-section";
import { Radio } from "antd";

import {
  AddToLoves,
  CommenteRproduct,
  GETproduct,
  GetLoves,
  getproductss,
} from "../features/Product/productSlice";
import { toast } from "react-toastify";
import { CreeCart, GetCart } from "../features/User/UserSlice";

const { TextArea } = Input;
const Singleproduit = () => {
  const [orderdproduct, setorderproduct] = useState(true);
  const [keyboard, setKeyboard] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [colors, setcolors] = useState(null);
  const [ProductPresent, SetProductPresent] = useState(false);

  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    dispatch(GetCart());
  }, [dispatch]);
  const cartstate = useSelector((state) => state?.auth?.Panier);

  const ProdId = location.pathname.split("/")[2];
  useEffect(() => {
    dispatch(GETproduct(ProdId));
  }, [dispatch, ProdId]);
  const ProdState = useSelector((state) => state?.Product?.produit);
  const image = ProdState?.images?.[0]?.url;

  const props = {
    width: 400,
    height: 250,
    zoomWidth: 500,
    img: image ? ProdState?.images?.[0].url : "a",
  };

  const copytoclipboard = (text) => {
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };
  const addtowishlist = (ProdId) => {
    dispatch(AddToLoves(ProdId));
  };
  const Addtocart = () => {
    if (colors === null) {
      toast.error("Please set colors");
    } else {
      dispatch(
        CreeCart({
          productId: ProdState?._id,
          quantite: quantity || "",
          color: colors || "",
          price: ProdState?.price,
        })
      );
    }
  };
  useEffect(() => {
    if (cartstate && cartstate.length > 0) {
      // Add null check here
      for (let i = 0; i < cartstate.length; i++) {
        if (cartstate[i].productId._id === ProdId) {
          SetProductPresent(true);
        }
      }
    }
  }, [ProdId, cartstate]);

  const [lovesPresent, setLovesPresent] = useState(false);
  const Panierstate = useSelector((state) => state?.Product?.Loves);
  const userstate = useSelector((state) => state?.auth.user);
  useEffect(() => {
    dispatch(GetLoves());
  }, [dispatch]);

  // Checking if the product is in the cart
  useEffect(() => {
    if (Panierstate && Panierstate.length > 0) {
      for (let i = 0; i < Panierstate.length; i++) {
        if (Panierstate[i]?._id === ProdId) {
          setLovesPresent(true);
          return; // Exit the loop early once the product is found
        }
      }
      // If the loop finishes without finding the product
      setLovesPresent(false);
    } else {
      setLovesPresent(false); // If the cart is empty
    }
  }, [ProdId, Panierstate]);

  // Toggle loves
  const handleToggleLove = () => {
    // Add/remove from wishlist logic here
    if (lovesPresent) {
      // Remove from wishlist logic
      setLovesPresent(false);
      addtowishlist(ProdId);
      toast.success("Ce produit est effacé de la liste");
    } else {
      // Add to wishlist logic
      setLovesPresent(true);
      addtowishlist(ProdId);
      toast.success("Ce produit est ajouté à la liste");
    }
  };
  useEffect(() => {
    dispatch(getproductss());
  }, [dispatch]);
  const Productstate = useSelector((state) => state?.Product?.Products);

  function RenderHTML({ htmlContent }) {
    return (
      <div
        style={{
          display: "-webkit-box",
          overflow: "hidden",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: 3,
        }}
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    );
  }

  const [comment, setComment] = useState("");
  const [rate, setRate] = useState(0);
  const Rating = () => {
    setTimeout(async () => {
      await dispatch(CommenteRproduct({ ProdId, rate, comment }));

      dispatch(GETproduct(ProdId));
    }, 300);
  };
const navigate=useNavigate()
function getRandomoulair2(Productstate) {
  const selectedProduct2 = [];
  const availableProducts = Productstate?.filter((product) => product?.tags === "populair");

  while (selectedProduct2.length < 4 && availableProducts.length > 0) {
    const randomIndex = Math.floor(Math.random() * availableProducts.length);
    const randomProduct = availableProducts[randomIndex];
    selectedProduct2.push(randomProduct);
    availableProducts.splice(randomIndex, 1);
  }

  return selectedProduct2;
}

const [selectedProduct2, setSelectedProduct2] = useState([]);
useEffect(() => {
  if (Productstate.length > 0) {
    setSelectedProduct2(getRandomoulair2(Productstate));
  }
}, [Productstate]);

  return (
    <>
      <PageHelmet title=" produit" />
      <BreadCump title=" produit" />
      <div className="main-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="image-produit text-center">
                <ReactImageZoom {...props} />
              </div>

              <div className="other-product-images d-flex flex-wrap gap-15">
                {[0, 1, 2, 3].map((index) => (
                  <div key={index}>
                    {ProdState &&
                    ProdState.images &&
                    ProdState.images[index] ? (
                      <img
                        src={ProdState.images[index].url}
                        alt={`img${index}`}
                      />
                    ) : (
                      <>
                        <Skeleton variant="text" sx={{ fontSize: "1rem" }} />

                        <Skeleton variant="circular" width={40} height={40} />
                        <Skeleton
                          variant="rectangular"
                          width={210}
                          height={60}
                        />
                        <Skeleton variant="rounded" width={210} height={60} />
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="col-6">
              <div className="main-product-detail">
                <div className="border-bottom">
                  <h3 className="title">{ProdState?.title}</h3>
                </div>
                <div className="border-bottom">
                  <p className="price">{ProdState?.price}DT</p>
                </div>
                <div className="d-flex">
                  <Rate allowHalf value={ProdState?.totalrating} />
                  <div className="spacer"></div>
                  <span>  {ProdState?.rating?.length} avis</span>
                </div>

                <a href="#review">Ecriver un revoir</a>
                <div className="border-bottom py-3">
                  <div className="d-flex gap-10 align-items-center">
                    <h3 className="product-heading">Marque : </h3>
                    <p className="product-data">{ProdState?.brand}</p>
                    <br />
                    <br />
                  </div>
                  <div className="d-flex gap-10 align-items-center">
                    <h3 className="product-heading">Categorie : </h3>
                    <p className="product-data">{ProdState?.category}</p>
                    <br />
                    <br />
                  </div>

                  <div className="d-flex gap-10 align-items-center">
                    <h3 className="product-heading">Tags : </h3>
                    <p className="product-data">{ProdState?.tags}</p>
                    <br />
                    <br />
                  </div>
                  <div className="d-flex gap-10 align-items-center">
                    <h3 className="product-heading">disponibilité : </h3>
                    <p className="product-data">
                      {ProdState?.quantite > 0 ? "En stock" : "hors stock"}
                    </p>
                    <br />
                    <br />
                  </div>
                  {ProductPresent !== true && (
                    <div className="d-flex gap-10 align-items-center">
                      <h3 className="product-heading">coleur : </h3>
                      <br />
                      <p className="product-data mt-3">
                        <Color
                          color={ProdState && ProdState.color}
                          setcolor={setcolors}
                        />
                      </p>
                      <br />
                      <br />
                    </div>
                  )}

                  {ProductPresent !== true && (
                    <div className="d-flex gap-10 align-items-center">
                      <h3 className="product-heading">Quantite : </h3>
                      <p className="product-data ">
                       {/*  <InputNumber
                          type="number"
                          min={1}
                          max={10}
                          onChange={(value) => {
                            setQuantity(value);
                          }}
                          value={quantity}
                        /> */}
                        <Radio.Group
                            onChange={(e) =>
                              setQuantity(e.target.value)
                            }
                            
                          >
                            {ProdState?.quantite > 0 ? (
                              Array.from(
                                {
                                  length: Math.min(ProdState?.quantite, 10),
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
                      </p>
                      <br />
                      <br />
                    </div>
                  )}
                  <div className="text-center justify-content-between">
                    
                      {ProductPresent === true
                        ? <button
                      className="button signup"
                      style={{ marginRight: "10px" }}
                      onClick={() => {
                        navigate("/panier")
                      }}
                    >Passer au panier
                       </button> : <button
                      className="button signup"
                      style={{ marginRight: "10px" }}
                      onClick={() => {
                        
                        Addtocart();
                      }}
                    >Ajouter au panier
                       </button>}
                      {/* Ajoutez une marge droite en utilisant des styles en ligne */}
                    

                    <Button
                      className="links bg-transparent border-0"
                      onClick={handleToggleLove}
                    >
                      {lovesPresent ? (
                        <FaHeart className="icon" />
                      ) : (
                        <FaRegHeart className="icon" />
                      )}
                    </Button>
                  </div>
                  <br />
                  <div className="d-flex"></div>

                  <div className="d-flex gap-10 flex-column my-3">
                    <h3 className="product-heading">shipping & returns </h3>
                    <p className="product-data">
                      {Productstate?.map((i) => (
                        <RenderHTML htmlContent={i.description} />
                      ))}
                    </p>
                    <br />
                    <br />
                  </div>

                  <div className="d-flex gap-10 align-items-center my-3">
                    <h3 className="product-heading">product link : </h3>
                    <a
                      onClick={() => {
                        copytoclipboard(ProdState?.images?.[0]?.url);
                      }}
                      href="javascript:void(0);"
                    >
                      copy le lien de produit
                    </a>
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="description-product-wrapper py-5 home-wrapper-2">
            <div className="container-xxl">
              <div className="row">
                <div className="col-12">
                  <h3>Description</h3>
                  <p>
                    {Productstate?.map((i) => (
                      <RenderHTML htmlContent={i.description} />
                    ))}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="review-product-wrapper py-5 home-wrapper-2">
            <div className="container-xxl">
              <div className="row">
                <div className="col-12">
                  <div
                    id="review"
                    className="review-head d-flex justify-content-between align-items-end"
                  >
                    <div>
                      <h3 className="mb-2 ">Revoir</h3>
                      <div className="d-flex align-items-center gap-10">
                        <Rate
                          className="fs-2"
                          allowHalf
                          value={ProdState?.totalrating}
                        />
                        <p className="mb-0 fs-4">
                          Basé sur {ProdState?.rating?.length} avis
                        </p>
                      </div>
                    </div>

                    {/* Utilisez orderdproduct pour conditionner l'affichage */}
                    {orderdproduct && (
                      <div>
                        <a href="" className="fs-4">
                          Écrire un avis
                        </a>{" "}
                        {/* Il semble y avoir une faute de frappe dans "Écrire un avis" */}
                      </div>
                    )}
                  </div>
                  <br />
                  <Rate
                    allowHalf
                    value={rate}
                    onChange={(value) => setRate(value)}
                  />
                  <br />
                  <br />
                  <TextArea
                    placeholder="Commentaire"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  />
                  <br />
                  <br />

                  <button type="primary" className="button" onClick={Rating}>
                    Soumettre
                  </button>
                  <div className="col-12">
                    <h3>Commentaires des utilisateurs</h3>
                    {ProdState?.rating?.map((product, key) => (
                      <div key={key}>
                        <p>{product?.comment}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="collection-wrapper py-5 home-wrapper-2">
            <div className="container-xxl">
              <div className="row">
                <h1>Collection vedette</h1>
                <br />
                <br />
                {selectedProduct2.map((product, key) => (
                  <div className="col-3">
                        <Productcart
                          title={product?.title}
                          src={product?.images[0].url}
                          prix={product?.price}
                          solde={product?.solde}
                          description=<RenderHTML
                            htmlContent={product?.description}
                          />
                          id={product._id}
                        />
                      </div>
    ))}
                
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Singleproduit;

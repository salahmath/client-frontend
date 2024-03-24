import { Input, InputNumber, Rate } from "antd";
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { CiHeart } from "react-icons/ci";
import ReactImageZoom from "react-image-zoom";
import { Link, useLocation } from "react-router-dom";
import BreadCump from "../conmponentes/BreadCump";
import Color from "../conmponentes/Color";
import PageHelmet from "../conmponentes/Helmet";
import Productcart from "../conmponentes/Productcart";

import { DiGitCompare } from "react-icons/di";
import { useDispatch, useSelector } from "react-redux";
import { AddToLoves, GETproduct } from "../features/Product/productSlice";

const { TextArea } = Input;
const Singleproduit = () => {
  const [orderdproduct, setorderproduct] = useState(true);
  const [keyboard, setKeyboard] = useState(true);
  const [color, setcolor] = useState(true);
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (value) => {
    setQuantity(value);
    console.log(value);
  };

  const dispatch = useDispatch();
  const location = useLocation();

  const ProdId = location.pathname.split("/")[2];
  useEffect(() => {
    dispatch(GETproduct(ProdId));
  }, [dispatch, ProdId]);
  const ProdState = useSelector((state) => state.Product.produit);
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
    alert("cart");
  };
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
                <div>
                  <img
                    src={ProdState ? ProdState?.images?.[0]?.url : null}
                    alt="img111"
                  />
                </div>
                <div>
                  <img
                    src={ProdState ? ProdState?.images?.[1]?.url : null}
                    alt="img111"
                  />
                </div>
                <div>
                  <img
                    src={ProdState ? ProdState?.images?.[2]?.url : null}
                    alt="img111"
                  />
                </div>
                <div>
                  <img
                    src={ProdState ? ProdState?.images?.[3]?.url : null}
                    alt="img111"
                  />
                </div>
              </div>
            </div>

            <div className="col-6">
              <div className="main-product-detail">
                <div className="border-bottom">
                  <h3 className="title">{ProdState.title}</h3>
                </div>
                <div className="border-bottom">
                  <p className="price">{ProdState.price}DT</p>
                </div>
                <div className="d-flex">
                  <Rate allowHalf defaultValue={2.5} />
                  <p className="mb-0">({ProdState.rating})</p>
                </div>
                <a href="#review">Ecriver un revoir</a>
                <div className="border-bottom py-3">
                  <div className="d-flex gap-10 align-items-center">
                    <h3 className="product-heading">Type : </h3>
                    <p className="product-data">{ProdState.category}</p>
                    <br />
                    <br />
                  </div>
                  <div className="d-flex gap-10 align-items-center">
                    <h3 className="product-heading">Marque : </h3>
                    <p className="product-data">{ProdState.brand}</p>
                    <br />
                    <br />
                  </div>
                  <div className="d-flex gap-10 align-items-center">
                    <h3 className="product-heading">Categorie : </h3>
                    <p className="product-data">{ProdState.category}</p>
                    <br />
                    <br />
                  </div>

                  <div className="d-flex gap-10 align-items-center">
                    <h3 className="product-heading">Tags : </h3>
                    <p className="product-data">{ProdState.tags}</p>
                    <br />
                    <br />
                  </div>
                  <div className="d-flex gap-10 align-items-center">
                    <h3 className="product-heading">disponibilité : </h3>
                    <p className="product-data">
                      {ProdState.quantite > 0 ? "En stock" : "hors stock"}
                    </p>
                    <br />
                    <br />
                  </div>
                  <div className="d-flex gap-10 align-items-center">
                    <h3 className="product-heading">coleur : </h3>
                    <p className="product-data mt-3">
                    <Color color={ProdState && ProdState.color} />

                    </p>
                    <br />
                    <br />
                  </div>

                  <div className="d-flex gap-10 align-items-center">
                    <h3 className="product-heading">Taille : </h3>
                    <p className="product-data d-flex mt-2 ">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label
                          class="form-check-label form-check-label"
                          for="flexCheckDefault"
                        >
                          s (1)
                        </label>
                      </div>
                      <div class="form-check form-check-label">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckChecked"
                        />
                        <label class="form-check-label" for="flexCheckChecked">
                          ms (12)
                        </label>
                      </div>
                      <div class="form-check form-check-label">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckChecked"
                        />
                        <label class="form-check-label" for="flexCheckChecked">
                          m (12)
                        </label>
                      </div>
                      <div class="form-check form-check-label">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckChecked"
                        />
                        <label class="form-check-label" for="flexCheckChecked">
                          l (12)
                        </label>
                      </div>
                    </p>
                    <br />
                    <br />
                  </div>
                  <div className="d-flex gap-10 align-items-center">
                    <h3 className="product-heading">Quantite : </h3>
                    <p className="product-data ">
                      <InputNumber
                        type="number"
                        min={1}
                        max={10}
                        onChange={(value) => {
                          setQuantity(value);
                          console.log(value);
                        }}
                        value={quantity}
                      />
                    </p>
                    <br />
                    <br />
                  </div>
                  <div className="text-center justify-content-between">
                    <Link
                      className="button signup"
                      style={{ marginRight: "10px" }}
                      onClick={() => {
                        Addtocart();
                      }}
                    >
                      {" "}
                      {/* Ajoutez une marge droite en utilisant des styles en ligne */}
                      Ajouter au panier
                    </Link>
                  </div>
                  <br />
                  <div className="d-flex">
                    <Link className="links" style={{ marginRight: "30px" }}>
                      <DiGitCompare className="icon" /> comparer ce produit{" "}
                    </Link>
                    <Link
                      className="links"
                      onClick={() => addtowishlist(ProdId)}
                    >
                      <CiHeart className="icon" /> aime ce produit
                    </Link>
                  </div>

                  <div className="d-flex gap-10 flex-column my-3">
                    <h3 className="product-heading">shipping & returns </h3>
                    <p className="product-data">{ProdState.description}</p>
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
                    escription-product-wrapper py-5
                    home-wrappeescription-product-wrapper py-5
                    home-wrappeescription-product-wrapper py-5
                    home-wrappeescription-product-wrapper py-5 home-wrappe
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
                        <Rate className="fs-2" allowHalf defaultValue={2.5} />
                        <p className="mb-0 fs-4">Basé sur 2 avis</p>
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

                  <form action="">
                    <h3>Ecriver un review</h3>
                    <br />
                    <div>
                      <InputGroup className="mb-3">
                        <Form.Control
                          placeholder="Entrer votre nom "
                          type="text"
                          aria-label="Nom"
                          aria-describedby="basic-addon1"
                        />
                      </InputGroup>
                    </div>

                    <br />

                    <div>
                      <InputGroup className="mb-3">
                        <Form.Control
                          placeholder="Email"
                          type="email"
                          aria-label="Email"
                          aria-describedby="basic-addon1"
                        />
                      </InputGroup>
                    </div>

                    <br />
                    <Rate className="fs-2" allowHalf defaultValue={2.5} />
                    <br />
                    <br />

                    <div>
                      <InputGroup className="mb-3">
                        <TextArea
                          placeholder="Commentaire"
                          type="TextArea"
                          aria-label="Commentaire"
                          aria-describedby="basic-addon1"
                        />
                      </InputGroup>
                    </div>
                    <br />

                    <div className="d-flex gap-15 align-items-center">
                      <Link to="/home" className="button signup">
                        soumettre
                      </Link>
                    </div>
                  </form>
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
                <div className="col-3">
                  <Productcart
                    src="https://files.refurbed.com/ii/iphone-14-pro-max-1662628210.jpg"
                    title="iPhone 14 Pro Max"
                    description="The iPhone 14 Pro Max is theSuper Retina XDR display, powerful A15 Bionic chip, and advanced camera system."
                    prix="100dt"
                  />
                </div>
                <div className="col-3">
                  <Productcart
                    src="https://files.refurbed.com/ii/iphone-14-pro-max-1662628210.jpg"
                    title="Product 2"
                    description="Description of Product 2."
                    prix="100dt"
                  />
                </div>
                <div className="col-3">
                  <Productcart
                    src="https://files.refurbed.com/ii/iphone-14-pro-max-1662628210.jpg"
                    title="Product 3"
                    description="Description of Product 3."
                    prix="100dt"
                  />
                </div>
                <div className="col-3">
                  <Productcart
                    src="https://files.refurbed.com/ii/iphone-14-pro-max-1662628210.jpg"
                    title="Product 4"
                    description="Description of Product 4."
                    prix="100dt"
                  />
                </div>
                <div className="col-3">
                  <Productcart
                    src="https://files.refurbed.com/ii/iphone-14-pro-max-1662628210.jpg"
                    title="Product 3"
                    description="Description of Product 3."
                    prix="100dt"
                  />
                </div>
                <div className="col-3">
                  <Productcart
                    src="https://files.refurbed.com/ii/iphone-14-pro-max-1662628210.jpg"
                    title="Product 3"
                    description="Description of Product 3."
                    prix="100dt"
                  />
                </div>
                <div className="col-3">
                  <Productcart
                    src="https://files.refurbed.com/ii/iphone-14-pro-max-1662628210.jpg"
                    title="Product 3"
                    description="Description of Product 3."
                    prix="100dt"
                  />
                </div>
                <div className="col-3">
                  <Productcart
                    src="https://files.refurbed.com/ii/iphone-14-pro-max-1662628210.jpg"
                    title="Product 3"
                    description="Description of Product 3."
                    prix="100dt"
                  />
                </div>
                <div className="col-3">
                  <Productcart
                    src="https://files.refurbed.com/ii/iphone-14-pro-max-1662628210.jpg"
                    title="Product 3"
                    description="Description of Product 3."
                    prix="100dt"
                  />
                </div>
                <div className="col-3">
                  <Productcart
                    src="https://files.refurbed.com/ii/iphone-14-pro-max-1662628210.jpg"
                    title="Product 3"
                    description="Description of Product 3."
                    prix="100dt"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Singleproduit;

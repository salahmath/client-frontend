import { FrownOutlined, MehOutlined, SmileOutlined } from "@ant-design/icons";
import { Empty, Radio, Rate } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import BreadCump from "../conmponentes/BreadCump";
import PageHelmet from "../conmponentes/Helmet";
import Productcart from "../conmponentes/Productcart";
import { getproductss } from "../features/Product/productSlice";
const Store = () => {
  const dispatch = useDispatch();

  const customIcons = {
    1: <FrownOutlined />,
    2: <FrownOutlined />,
    3: <MehOutlined />,
    4: <SmileOutlined />,
    5: <SmileOutlined />,
  };
  function truncateText(text, maxLength) {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    } else {
      return text;
    }
  }
  function RenderHTML({ htmlContent }) {
    return (
      <div
        style={{
          display: "-webkit-box",
          overflow: "hidden",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: 3,
        }}
        dangerouslySetInnerHTML={{ __html: truncateText(htmlContent, 100) }}
      />
    );
  }

  const Productstate = useSelector((state) => state?.Product?.Products);
  const [marque, setMarque] = useState([]);
  const [category, setCategory] = useState([]);
  const [tags, setTags] = useState([]);
  const [filterradio, setfilterradio] = useState([]);
  const [tag, setTag] = useState("");
  const [categorys, setCategorys] = useState("");
  const [marques, setMarques] = useState("");
  useEffect(() => {
    let marqueArr = [];
    let tagsArr = [];
    let categoryArr = [];

    for (let i = 0; i < Productstate?.length; i++) {
      marqueArr.push(Productstate[i]?.brand);
      tagsArr.push(Productstate[i]?.tags);
      categoryArr.push(Productstate[i]?.category);
    }

    setMarque(marqueArr);
    setCategory(categoryArr);
    setTags(tagsArr);
  }, [Productstate]);
  useEffect(() => {
    dispatch(getproductss());
  }, [dispatch, marques, categorys, tag]);

  function getRandomProduct(Productstate) {
    const randomIndices = [];
    while (randomIndices.length < 4) {
      const randomIndex = Math.floor(Math.random() * Productstate.length);
      if (!randomIndices.includes(randomIndex)) {
        randomIndices.push(randomIndex);
      }
    }
    const selectedProduct = randomIndices.map((index) => Productstate[index]);
    return selectedProduct;
  }
  const [selectedProduct, setSelectedProduct] = useState([]);
  useEffect(() => {
    if (Productstate.length > 0) {
      setSelectedProduct(getRandomProduct(Productstate));
    }
  }, [Productstate]);
  const navigate = useNavigate();

  const [radio, setRadio] = useState("");
  const [categors, setCategors] = useState("");
  const [tages, settages] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [filteredUsers2, setFilteredUsers2] = useState([]);
  const [filteredUsers3, setFilteredUsers3] = useState([]);

  useEffect(() => {
    if (!radio) {
      const filteredByBrand = Productstate;
      setFilteredUsers(filteredByBrand);
    } else {
      const filteredByBrand = Productstate.filter(
        (product) => product.brand === radio
      );
      setFilteredUsers(filteredByBrand);
    }

    if (!categors) {
      const filteredByCategory = Productstate;
      setFilteredUsers2(filteredByCategory);
    } else {
      const filteredByCategory = Productstate.filter(
        (product) => product.category === categors
      );

      setFilteredUsers2(filteredByCategory);
    }
    if (!tages) {
      const filterbytags = Productstate;
      setFilteredUsers3(filterbytags);
    } else {
      const filterbytags = Productstate.filter(
        (product) => product.tags === tages
      );

      setFilteredUsers3(filterbytags);
    }
  }, [radio, categors, Productstate, tages]);

  const uniqueBrands = new Set();
  Productstate.forEach((product) => {
    if (product.brand) {
      uniqueBrands.add(product.brand);
    }
  });

  const uniqueCategories = new Set();
  Productstate.forEach((product) => {
    if (product.category) {
      uniqueCategories.add(product.category);
    }
  });
  const uniquetags = new Set();
  Productstate.forEach((product) => {
    if (product.tags) {
      uniquetags.add(product.tags);
    }
  });

  const handleBrandChange = (value) => {
    setRadio(value);
  };

  const handleCategoryChange = (value) => {
    setCategors(value);
  };

  const handletagsChange = (value) => {
    settages(value);
  };
  const filteredProducts = Productstate.filter((product) => {
    const brandFilterPassed = radio ? product.brand === radio : true;
    const categoryFilterPassed = categors
      ? product.category === categors
      : true;
    const tagsFilterPassed = tags ? product.tags.includes(tages): true;
    return brandFilterPassed && categoryFilterPassed && tagsFilterPassed;
  });

  return (
    <>
      <PageHelmet title="Store" />
      <BreadCump title="Store" />
      <div className="store-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3 ">
                <h3 className="filter-title">Chercher par marque.</h3>
                <div className="ps-0">
                  {Array.from(uniqueBrands).map((brand) => (
                    <Radio
                      key={brand}
                      value={brand}
                      checked={radio === brand}
                      onChange={(e) => handleBrandChange(e.target.value)}
                    >
                      {brand}
                    </Radio>
                  ))}
                </div>
              </div>

              <div className="filter-card mb-3">
                <h3 className="filter-title">filter avec</h3>

                <div>
                  <h5 className="sub-title">Prix</h5>
                  {/* //hedhi */}
                  <div className="d-flex align-items-center gap-10">
                    <div class="form-floating mb-3">
                      <input
                        type="Number"
                        class="form-control"
                        id="floatingInput"
                        placeholder="0.0 DT"
                      />
                      <label for="floatingInput">Prix min</label>
                    </div>
                    <div class="form-floating mb-3">
                      <input
                        type="Number"
                        class="form-control"
                        id="floatingInput"
                        placeholder="0.0 DT"
                      />
                      <label for="floatingInput">Prix max</label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="filter-card mb-3 ">
                <h3 className="filter-title ">Catégories de produits</h3>
                <div>
                  <div className="Product-tags d-flex flex-wrap align-items-center gap-10">
                    {Array.from(uniqueCategories).map((cat) => (
                      <Radio
                        key={cat}
                        value={cat}
                        checked={categors === cat}
                        onChange={(e) => handleCategoryChange(e.target.value)}
                      >
                        {cat}
                      </Radio>
                    ))}
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Produits aléatoires</h3>
                <div>
                  <div className="random-products d-flex">
                    <div className="w-50">
                      {selectedProduct.map((product, key) => (
                        <>
                          <div className="d-flex">
                            <img
                              src={product?.images[0]?.url}
                              alt={key}
                              className="img14"
                              onClick={() => {
                                navigate(`/produit/${product._id}`);
                              }}
                            />
                            <h6>{product.title}</h6>
                          </div>
                          <div className="w-50">
                            <Rate allowHalf defaultValue={2.5} />
                            <p>{product.price} DT</p>
                          </div>
                        </>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="filter-sort-grid d-flex justify-content-center">
                <div className="d-flex align-items-center gap-10">
                  <p className="mb-0">Trier par:</p>
                  <select
                    className="form-select form-control"
                    aria-label="Default select example"
                    value={tages} // Assurez-vous de lier la valeur sélectionnée à l'état 'tag'
                    onChange={(e) => handletagsChange(e.target.value)} // Utilisez l'événement onChange sur le select lui-même
                  >
                    <option value="" disabled>
                      chercher par tags
                    </option>
                    {Array.from(uniquetags).map((tag) => (
                      <option key={tag} value={tag}>
                        {tag}
                      </option>
                    ))}
                  </select>
                </div>
                <p className="totalproducts mb-0" style={{ marginLeft: "50%" }}>
                  {Productstate?.length} produits
                </p>
              </div>
              <div className="products-list gap-10 d-flex pb-5 mt-3">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((product, key) => (
                      <div key={key} className="col-6">
                        <Productcart
                          title={product.title}
                          src={product.images[0].url}
                          prix={product.price}
                          description={
                            <RenderHTML htmlContent={product.description} />
                          }
                          totalrating={product.totalrating}
                          id={product._id}
                        />
                      </div>
                    ))
                  ) : (
                    <Empty className="img-fluid" />
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

export default Store;

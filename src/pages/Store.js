import { FrownOutlined, MehOutlined, SmileOutlined } from "@ant-design/icons";
import { Button, Empty, Flex, Radio, Rate } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import BreadCump from "../conmponentes/BreadCump";
import PageHelmet from "../conmponentes/Helmet";
import Productcart from "../conmponentes/Productcart";
import InfiniteScroll from "react-infinite-scroll-component";
import { IoIosRefresh } from "react-icons/io";
import { LoadingOutlined } from '@ant-design/icons';
import { getproductss } from "../features/Product/productSlice";
import { Alert, Spin } from "antd";
const contentStyle = {
  padding: 50,
  background: "rgba(0, 0, 0, 0.05)",
  borderRadius: 4,
};
const content = <div style={contentStyle} />;
const Store = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true); // Nouvel état de chargement
  const [loading1, setLoading1] = useState(true); // Nouvel état de chargement
  const [loading2, setLoading2] = useState(true); // Nouvel état de chargement

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
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
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
    dispatch(getproductss()).then(()=>{
      setLoading(false)
    });
  }, [dispatch, marques, categorys, tag, page]);

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
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [filteredUsers2, setFilteredUsers2] = useState([]);
  const [filteredUsers3, setFilteredUsers3] = useState([]);
  const [filteredUsers4, setFilteredUsers4] = useState([]);
  const [filteredUsers5, setFilteredUsers5] = useState([]);
  const [filteredUsers6, setFilteredUsers6] = useState([]);
  const [filteredUsers7, setFilteredUsers7] = useState([]);
  useEffect(() => {
    setFilteredUsers6(min);
  }, [min]);
  console.log(filteredUsers6);
  useEffect(() => {
    // Filtre par marque
    const filteredByBrand = radio
      ? Productstate.filter((product) => product.brand === radio)
      : Productstate;
    setFilteredUsers(filteredByBrand);

    // Filtre par catégorie
    const filteredByCategory = categors
      ? Productstate.filter((product) => product.category === categors)
      : Productstate;
    setFilteredUsers2(filteredByCategory);

    // Filtre par tags
    const filterByTags = tages
      ? Productstate.filter((product) => product.tags === tages)
      : Productstate;
    setFilteredUsers3(filterByTags);

    // Filtre par prix minimum
    const filterByMin = min
      ? Productstate.filter(
          (product) => parseFloat(product.price) >= parseFloat(min)
        )
      : Productstate;
    setFilteredUsers4(filterByMin);

    const filterByMax = max
      ? Productstate.filter(
          (product) => parseFloat(product.price) <= parseFloat(max)
        )
      : Productstate;
    setFilteredUsers5(filterByMax);
  }, [radio, categors, tages, min, max, Productstate]);

  const uniqueBrands = new Set();
  Productstate.forEach((product) => {
    if (product.brand) {
      uniqueBrands.add(product.brand);
    }
  });
  const handleBrandChange = (value) => {
    setRadio(value);
  };
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

  const uniqueMin = new Set();
  Productstate.forEach((product) => {
    if (product.price) {
      uniqueMin.add(product.price);
    }
  });

  const uniqueMax = new Set();
  Productstate.forEach((product) => {
    if (product.price) {
      uniqueMax.add(product.price);
    }
  });
  const handleCategoryChange = (value) => {
    setCategors(value);
  };

  const handletagsChange = (value) => {
    settages(value);
  };
  const handleMinChange = (value) => {
    setMin(value);
  };

  const handleMaxChange = (value) => {
    setMax(value);
  };
  // Fonction pour réinitialiser tous les filtres
  const handleResetFilters = () => {
    setRadio("");
    setCategors("");
    settages("");
    setMin("");
    setMax("");
    setPage(1);
  };
  const filteredProducts = Productstate.filter((product) => {
    const brandFilterPassed = radio ? product.brand === radio : true;
    const minFilterPassed = min
      ? parseFloat(product.price) >= parseFloat(min)
      : true;
    const maxFilterPassed = max
      ? parseFloat(product.price) <= parseFloat(max)
      : true;
    const categoryFilterPassed = categors
      ? product.category === categors
      : true;
    const tagsFilterPassed = tags ? product.tags.includes(tages) : true;
    return (
      brandFilterPassed &&
      categoryFilterPassed &&
      tagsFilterPassed &&
      minFilterPassed &&
      maxFilterPassed
    );
  });

  const fetchMoreData = () => {
    // Mettez à jour la page actuelle
    setPage(page + 1);
  };
  useEffect(() => {
    if (Productstate.length > 0) {
      setProducts([...products, ...Productstate]); // Ajoutez les nouveaux produits à la liste existante
    }
  }, [Productstate]); // Mettre à jour la liste des produits lorsque Productstate change

  return (
    <>
      <PageHelmet title="Store" />
      <BreadCump title="Store" />
      <div className="store-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-3">
              <div className="filter-card mb-3 ">
                <h3 className="filter-title">Chercher par marque.</h3>
                {loading ? ( // Affiche l'animation de chargement si loading est vrai
                <Spin
    indicator={
      <LoadingOutlined
        style={{
          fontSize: 24,
        }}
        spin
      />
    }
  />
        ) : (
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
                </div>)}
              </div>

              <div className="filter-card mb-3">
                <h3 className="filter-title">filter avec</h3>
                <div>
                  <h5 className="sub-title">Prix</h5>
                  {loading ? ( // Affiche l'animation de chargement si loading est vrai
                <Spin
    indicator={
      <LoadingOutlined
        style={{
          fontSize: 24,
        }}
        spin
      />
    }
  />
        ) : (
                  <div className="d-flex align-items-center gap-10">
                    <div class="form-floating mb-3">
                      <input
                        type="number"
                        className="form-control"
                        id="floatingInput"
                        placeholder="0.0 DT"
                        onChange={(e) => {
                          const value = parseFloat(e.target.value);
                          if (!isNaN(value)) {
                            // Vérifie si la valeur saisie est un nombre valide
                            handleMinChange(value);
                          } else {
                            // Gérer le cas où la valeur saisie n'est pas un nombre valide
                            // Par exemple, afficher un message d'erreur à l'utilisateur
                          }
                        }}
                      />

                      <label for="floatingInput">Prix min</label>
                    </div>
                    <div class="form-floating mb-3">
                      <input
                        type="number"
                        className="form-control"
                        id="floatingInput"
                        placeholder="0.0 DT"
                        min={filteredUsers6}
                        onChange={(e) => {
                          const value = parseFloat(e.target.value);
                          if (!isNaN(value) && value >= filteredUsers6) {
                            // Vérifie si la valeur saisie est un nombre valide et supérieure ou égale à min
                            handleMaxChange(value);
                          } else {
                            // Gérer le cas où la valeur saisie n'est pas un nombre valide ou est inférieure à min
                            // Par exemple, afficher un message d'erreur à l'utilisateur
                          }
                        }}
                        disabled={isNaN(filteredUsers6)}
                      />
                      <label for="floatingInput">Prix max</label>
                    </div>
                  </div>)}
                </div>
              </div>

              <div className="filter-card mb-3 ">
                <h3 className="filter-title ">Catégories de produits</h3>
                {loading ? ( // Affiche l'animation de chargement si loading est vrai
                <Spin
    indicator={
      <LoadingOutlined
        style={{
          fontSize: 24,
        }}
        spin
      />
    }
  />
        ) : (
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
                </div>)}
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Produits aléatoires</h3>
                {loading ? ( // Affiche l'animation de chargement si loading est vrai
                <Spin
    indicator={
      <LoadingOutlined
        style={{
          fontSize: 24,
        }}
        spin
      />
    }
  />
        ) : (
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
                            <Rate
                              allowHalf
                              defaultValue={product.totalrating}
                            />
                            <p>{product.price} DT</p>
                          </div>
                        </>
                      ))}
                    </div>
                  </div>
                </div>)}
              </div>
            </div>
            <div className="col-9 ">
              <div className="filter-sort-grid  d-flex justify-content-between align-items-center flex-wrap ">
                <Flex gap="small" vertical>
                  <Button
                    type="primary"
                    shape="circle"
                    onClick={handleResetFilters}
                  >
                    R
                  </Button>
                </Flex>

                <div className=" d-flex align-items-center gap-10  mb-sm-0 ">
                  <select
                    className="form-select form-control"
                    aria-label="Default select example"
                    value={tages}
                    onChange={(e) => handletagsChange(e.target.value)}
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

                <p className="totalproducts mb-0 text-center text-sm-start">
                  {" "}
                  {/* Utilisez des classes text-center et text-sm-start pour aligner le texte */}
                  {filteredProducts?.length} produits
                </p>
              </div>
              {loading ? ( // Affiche l'animation de chargement si loading est vrai
          <div className="loading-container">
            <Flex gap="small" vertical>
              <Flex gap="small"></Flex>
              <Spin tip="Chargement en cours...">
  <Alert
    message="Liste des Produits"
    description="Consultez ci-dessous la liste de tous nos produits disponibles."
    type="info"
  />
</Spin>

            </Flex>
          </div>
        ) : (
              <div className="products-list gap-10 d-flex pb-5 mt-3">
                <InfiniteScroll
                  dataLength={8}
                  style={{
                    maxHeight: "1300px",
                  }}
                  inverse={false}
                  next={fetchMoreData}
                  hasMore={false}
                  loader={<h4>Loading...</h4>}
                  endMessage={
                    <p style={{ textAlign: "center" }}>Yay! Tu as tout vu</p>
                  }
                >
                  <div className="row">
                    {filteredProducts.length > 0 ? (
                      filteredProducts.map((product, key) => (
                        <div
                          key={key}
                          className="col-12 col-sm-12 col-md-6 col-lg-6"
                        >
                          <Productcart
                            title={product.title}
                            src={product.images[0].url}
                            prix={product.price}
                            description={
                              <RenderHTML htmlContent={product.description} />
                            }
                            id={product._id}
                          />
                        </div>
                      ))
                    ) : (
                      <Empty className="img-fluid" />
                    )}
                  </div>
                </InfiniteScroll>
              </div>)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Store;

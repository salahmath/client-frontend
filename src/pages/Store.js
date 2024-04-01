import React, { useEffect, useState } from "react";
import BreadCump from "../conmponentes/BreadCump";
import PageHelmet from "../conmponentes/Helmet";
import { Rate, Select } from "antd";
import { FrownOutlined, MehOutlined, SmileOutlined } from "@ant-design/icons";
import Productcart from "../conmponentes/Productcart";
import Color from "../conmponentes/Color";
import { useDispatch, useSelector } from "react-redux";
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
    dispatch(getproductss({marques,categorys,tag}));
  }, [dispatch,marques,categorys,tag]);

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
                  <ul>
                    {marque &&
                      [...new Set(marque)].map((item, index) => {
                        return (
                          <li key={index} onClick={() => setMarques(item)}>
                            {item}
                          </li>
                        );
                      })}
                  </ul>
                </div>
                </div>

                <div className="filter-card mb-3">
                  <h3 className="filter-title">filter avec</h3>
                  <div>
                    <h5 className="sub-title">disponibilité</h5>
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
                        On stock (1)
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
                        Hors stock (12)
                      </label>
                    </div>
                  </div>
                  <div>
                    <h5 className="sub-title">Prix</h5>

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
                  <div>
                    <h5 className="sub-title">coleur</h5>
                  </div>
                 
                </div>
                

                
                <div className="filter-card mb-3 ">
                  <h3 className="filter-title ">Categories de produits</h3>
                  <div>
                    <div className="Product-tags d-flex flex-wrap align-items-center gap-10">
                      {category &&
                        [...new Set(category)].map((item, index) => {
                          return (
                            <span
                              className="badge bg-light text-secondary rounded-3 py-2 px-3"
                              key={index}
                              onClick={() => setCategorys(item)}
                            >
                              {item}
                            </span>
                          );
                        })}
                    </div>
                  </div>
                  <div>
                    <div className="Product-tags d-flex flex-wrap align-items-center gap-10">
                      {category &&
                        [...new Set(category)].map((item, index) => {
                          return (
                            <span
                              className="badge bg-light text-secondary rounded-3 py-2 px-3"
                              key={index}
                              onClick={() => setCategorys(item)}
                            >
                              {item}
                            </span>
                          );
                        })}
                    </div>
                  </div>
                </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Produits aléatoires</h3>
                <div>
                  <div className="random-products d-flex">
                    <div className="w-50">
                      <img
                        src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw34d84041/images/Titan/Catalog/1698KM02_1.jpg?sw=800&sh=800"
                        alt="watch"
                        className="img14"
                      />
                    </div>
                    <div className="w-50">
                      <h6>the best watch</h6>
                      <Rate allowHalf defaultValue={2.5} />
                      <p>100 DT</p>
                    </div>
                  </div>
                  <div className="random-products d-flex">
                    <div className="w-50">
                      <img
                        src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw34d84041/images/Titan/Catalog/1698KM02_1.jpg?sw=800&sh=800"
                        alt="watch"
                        className="img14"
                      />
                    </div>
                    <div className="w-50">
                      <h6>the best watch</h6>
                      <Rate allowHalf defaultValue={2.5} />
                      <p>100 DT</p>
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
  value={tag} // Assurez-vous de lier la valeur sélectionnée à l'état 'tag'
  onChange={(e) => setTag(e.target.value)} // Utilisez l'événement onChange sur le select lui-même
>
  <option value="" disabled>chercher par tags</option>
  {tags &&
    [...new Set(tags)].map((item, index) => {
      return (
        <option key={index} value={item}>
          {item}
        </option>
      );
    })}
</select>

                </div>
                <p className="totalproducts mb-0" style={{ marginLeft: "50%" }}>
                  44 produits
                </p>
              </div>
              <div className="products-list gap-10 d-flex pb-5 mt-3">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                  {Productstate.map((product, key) => {
                    return (
                      <div key={key} className="col">
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
                    );
                  })}
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

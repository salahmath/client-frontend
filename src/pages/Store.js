import React from "react";
import BreadCump from "../conmponentes/BreadCump";
import PageHelmet from "../conmponentes/Helmet";
import { Rate, Select } from "antd";
import { FrownOutlined, MehOutlined, SmileOutlined } from "@ant-design/icons";
import Productcart from "../conmponentes/Productcart";

const Store = () => {
  const customIcons = {
    1: <FrownOutlined />,
    2: <FrownOutlined />,
    3: <MehOutlined />,
    4: <SmileOutlined />,
    5: <SmileOutlined />,
  };

  return (
    <>
      <PageHelmet title="Store" />
      <BreadCump title="Store" />
      <div className="store-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Chercher par catégorie.</h3>
                <div className="ps-0">
                  <ul>
                    <li>watch</li>
                    <li>tv</li>
                    <li>Camera</li>
                    <li>laptop</li>
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

                  <div>
                    <div>
                      <ul className="colors ps-0">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <h5 className="sub-title">Taille</h5>
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
                  <div class="form-check form-check-label">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label class="form-check-label" for="flexCheckChecked">
                      xl(12)
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
                      xxl(12)
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
                      xxxl (12)
                    </label>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3 ">
                <h3 className="filter-title ">étiquettes de produits</h3>
                <div>
                  <div className="Product-tags d-flex flex-wrap align-items-center gap-10">
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      casque de musique
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      PC
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Mobile
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Fil
                    </span>
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
                  >
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                  </select>
                </div>
                <p className="totalproducts mb-0" style={{ marginLeft: "50%" }}>
                  44 produits
                </p>
              </div>
              <div className="products-list gap-10 d-flex pb-5 mt-3">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                  <div className="col">
                    <Productcart
                      title="card 1"
                      src="https://img-0.journaldunet.com/JgOAEEaKp00acGdrktPUB8Y2__8=/1500x/smart/32d90de13a5f411c86709152f70fc67c/ccmcms-jdn/10861192.jpg"
                    />
                  </div>
                  <div className="col">
                    <Productcart
                      title="card 1"
                      src="https://img-0.journaldunet.com/JgOAEEaKp00acGdrktPUB8Y2__8=/1500x/smart/32d90de13a5f411c86709152f70fc67c/ccmcms-jdn/10861192.jpg"
                    />
                  </div>
                  <div className="col">
                    <Productcart
                      title="card 1"
                      src="https://img-0.journaldunet.com/JgOAEEaKp00acGdrktPUB8Y2__8=/1500x/smart/32d90de13a5f411c86709152f70fc67c/ccmcms-jdn/10861192.jpg"
                    />
                  </div>
                  <div className="col">
                    <Productcart
                      title="card 1"
                      prix="55 DT"
                      description="the best product in the word"
                      src="https://img-0.journaldunet.com/JgOAEEaKp00acGdrktPUB8Y2__8=/1500x/smart/32d90de13a5f411c86709152f70fc67c/ccmcms-jdn/10861192.jpg"
                    />
                  </div>{" "}
                  <div className="col">
                    <Productcart
                      title="card 1"
                      src="https://img-0.journaldunet.com/JgOAEEaKp00acGdrktPUB8Y2__8=/1500x/smart/32d90de13a5f411c86709152f70fc67c/ccmcms-jdn/10861192.jpg"
                    />
                  </div>{" "}
                  <div className="col">
                    <Productcart
                      title="card 1"
                      src="https://img-0.journaldunet.com/JgOAEEaKp00acGdrktPUB8Y2__8=/1500x/smart/32d90de13a5f411c86709152f70fc67c/ccmcms-jdn/10861192.jpg"
                    />
                  </div>{" "}
                  <div className="col">
                    <Productcart
                      title="card 1"
                      src="https://img-0.journaldunet.com/JgOAEEaKp00acGdrktPUB8Y2__8=/1500x/smart/32d90de13a5f411c86709152f70fc67c/ccmcms-jdn/10861192.jpg"
                    />
                  </div>
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

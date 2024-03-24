import React from "react";
import { Card, Col, Row } from "antd";

import BreadCump from "../conmponentes/BreadCump";
import PageHelmet from "../conmponentes/Helmet";
import Color from "../conmponentes/Color";
import { RxCross2 } from "react-icons/rx";
const Compareproduct = () => {
  return (
    <>
      <PageHelmet title="Comparer produits" />
      <BreadCump title="Comparer produits" />
      <div className="compare-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="compare-product-card">
                <Row gutter={16}>
                  <Col span={8}>
                    <Card title="Produit 1 i7 ram 10 full hd" bordered={false}>
                      <div className="product-content">
                        <img
                          className="img-fluid"
                          src="https://media.wired.com/photos/6511aab1189c419c40374c92/4:3/w_1803,h_1352,c_limit/Apple-Watch-Ultra-2-Alt-Gear.jpg"
                          alt=""
                        />

                        <div className="product-detail">
                          <h4>type</h4>
                          <p>lenovo</p>
                        </div>
                        <div className="product-detail">
                          <h4>coleur</h4>
                          <p>lenovo</p>
                        </div>
                        <div className="product-detail">
                          <h4>taille</h4>
                          <p>lenovo</p>
                        </div>
                        <div className="product-detail">
                          <h4>marque</h4>

                          <div className="d-flex gap-15">
                            <p>S</p>
                            <p>M</p>
                          </div>
                        </div>
                        <div className="product-detail">
                          <h4>coleur:</h4>
                          <Color />
                        </div>
                        <div className="product-detail">
                          <h4>Avalability:</h4>
                          <p> En stock</p>
                        </div>
                      </div>
                      <div className="icon-top-right">
                          <RxCross2 name="plus" />
                        </div>
                    </Card>
                  </Col>
                  <Col span={8}>
                    <Card title="produit 2" bordered={false}>
                      <div className="product-content">
                        <img
                          className="img-fluid"
                          src="https://media.wired.com/photos/6511aab1189c419c40374c92/4:3/w_1803,h_1352,c_limit/Apple-Watch-Ultra-2-Alt-Gear.jpg"
                          alt=""
                        />
                        <div className="product-detail">
                          <h4>type</h4>
                          <p>lenovo</p>
                        </div>
                        <div className="product-detail">
                          <h4>coleur</h4>
                          <p>lenovo</p>
                        </div>
                        <div className="product-detail">
                          <h4>taille</h4>
                          <p>lenovo</p>
                        </div>
                        <div className="product-detail">
                          <h4>marque</h4>
                          <div className="d-flex gap-15">
                            <p>S</p>
                            <p>M</p>
                          </div>
                        </div>
                        <div className="icon-top-right">
                          <RxCross2 name="plus" />
                        </div>
                        <div className="product-detail">
                          <h4>coleur:</h4>
                          <Color />
                        </div>
                        <div className="product-detail">
                          <h4>Avalability:</h4>
                          <p> En stock</p>
                        </div>
                      </div>
                    </Card>
                  </Col>
                  <Col span={8}>
                    <Card title="produit 3" bordered={false}>
                      <div className="product-content">
                        <img
                          className="img-fluid"
                          src="https://media.wired.com/photos/6511aab1189c419c40374c92/4:3/w_1803,h_1352,c_limit/Apple-Watch-Ultra-2-Alt-Gear.jpg"
                          alt=""
                        />
                        <div className="product-detail">
                          <h4>type</h4>
                          <p>lenovo</p>
                        </div>
                        <div className="product-detail">
                          <h4>coleur</h4>
                          <p>lenovo</p>
                        </div>
                        <div className="product-detail">
                          <h4>taille</h4>
                          <p>lenovo</p>
                        </div>
                        <div className="product-detail">
                          <h4>marque</h4>

                          <div className="d-flex gap-15">
                            <p>S</p>
                            <p>M</p>
                          </div>
                        </div>
                        <div className="product-detail">
                          <h4>coleur:</h4>
                          <Color />
                        </div>
                        <div className="product-detail">
                          <h4>Avalability:</h4>
                          <p> En stock</p>
                        </div>
                        <div className="icon-top-right">
                          <RxCross2 name="plus" />
                        </div>
                      </div>
                    </Card>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Compareproduct;

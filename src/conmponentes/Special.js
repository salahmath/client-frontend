import React from "react";
import {
  FrownOutlined,
  MehOutlined,
  SmileOutlined,
  brand,
  totalrating,
} from "@ant-design/icons";
import { Flex, Rate } from "antd";
import { Link } from "react-router-dom";
const customIcons = {
  1: <FrownOutlined />,
  2: <FrownOutlined />,
  3: <MehOutlined />,
  4: <SmileOutlined />,
  5: <SmileOutlined />,
};

const Special = ({
  solde,
  price,
  brand,
  totalrating,
  title,
  src,
  key,
  quatite,
}) => {
  return (
    <div className="col-6   m-t-20 ">
      <div className="special-product-card">
        <div className="d-flex justify-content-between">
          <div>
            <img className="img12 img-fluid" src={src} alt={key} />
          </div>
          <div className="special-product-content">
            <h5 className="brand">{brand}</h5>
            <h6 className="title">{title}</h6>
            <Flex gap="middle" vertical>
              <Rate
                value={totalrating}
                character={({ index = 0 }) => customIcons[index + 1]}
              />
            </Flex>
            <p className="price">
              <span className="red-p">
                {price - solde}
                <strike> {price}</strike>
              </span>
            </p>
            <div className="discount-till d-flex align-items-center gap-10">
              <p>
                <b>5 days</b>
              </p>
              <div className="d-flex gap-10 align-items-center">
                <span className="badge rounded-circle p-4 bg-danger">1</span>:
                <span className="badge rounded-circle p-4 bg-danger">1</span>:
                <span className="badge rounded-circle p-4 bg-danger">1</span>:
              </div>
            </div>
            <div class="progress my-3">
              <div
                class="progress-bar"
                role="progressbar"
                style={{ width: `${(quatite / (quatite + solde)) * 100}%` }}
                aria-valuenow={(quatite / (quatite + solde)) * 100}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
            <Link className="button">Add to cart</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Special;

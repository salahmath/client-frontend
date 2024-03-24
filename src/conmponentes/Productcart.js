import React from "react";
import { Link } from "react-router-dom";
import { Card } from "antd";
import { FrownOutlined, MehOutlined, SmileOutlined } from "@ant-design/icons";
import { Rate } from "antd";
import { IoIosNotificationsOutline } from "react-icons/io";
import { GrView } from "react-icons/gr";
import { MdAddShoppingCart } from "react-icons/md";
import { FaCodeCompare } from "react-icons/fa6";
import { GiSelfLove } from "react-icons/gi";
import { useDispatch } from 'react-redux'; // Add import for useDispatch
import { AddToLoves } from "../features/Product/productSlice";

const customIcons = {
  1: <FrownOutlined />,
  2: <FrownOutlined />,
  3: <MehOutlined />,
  4: <SmileOutlined />,
  5: <SmileOutlined />,
};
const { Meta } = Card;
const Productcart = ({ src, title, description, prix, totalrating, id }) => {
  const dispatch = useDispatch(); // Get dispatch function from Redux

  const addtowishlist = (id) => {
    dispatch(AddToLoves(id));
  };

  return (
    <div className="position-relative">
      <Card
        className="cardproduct"
        hoverable
        style={{
          width: 240,
        }}
        cover={<img alt="title" src={src} />}
      >
        
          <GiSelfLove  onClick={() => addtowishlist(id)} className="love d-flex flex-column text-darck position-obsolute"/>
       
        <div className="icon-wrapper d-flex flex-column align-items-center">
          <Link>
            <IoIosNotificationsOutline />
          </Link>
          <Link to={`/produit/${id}`}>
            <GrView />
          </Link>
          <Link>
            <MdAddShoppingCart />
          </Link>
          <Link>
            <FaCodeCompare />
          </Link>
        </div>
        <h4>{title}</h4>
        <Meta title={prix} description={description} />
        <br />
        <Rate
          value={totalrating}
          character={({ index = 0 }) => customIcons[index + 1]}
        />
      </Card>
    </div>
  );
};

export default Productcart;

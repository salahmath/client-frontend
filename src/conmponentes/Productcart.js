import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Card } from "antd";
import { FrownOutlined, MehOutlined, SmileOutlined } from "@ant-design/icons";
import { Rate } from "antd";
import { IoIosNotificationsOutline } from "react-icons/io";
import { GrView } from "react-icons/gr";
import { MdAddShoppingCart } from "react-icons/md";
import { FaCodeCompare } from "react-icons/fa6";
import { GiSelfLove } from "react-icons/gi";
import { useDispatch } from 'react-redux';
import { AddToLoves, GetLoves } from "../features/Product/productSlice";
import { IoHeartSharp,IoHeartOutline } from "react-icons/io5";

const customIcons = {
  1: <FrownOutlined />,
  2: <FrownOutlined />,
  3: <MehOutlined />,
  4: <SmileOutlined />,
  5: <SmileOutlined />,
};
const { Meta } = Card;
const Productcart = ({ src, title, description, prix, totalrating, id }) => {
  const dispatch = useDispatch();

  const [isAddedToWishlist, setIsAddedToWishlist] = useState(false);
const navigate=useNavigate()
  const addtowishlist = () => {
    dispatch(AddToLoves(id));
    setIsAddedToWishlist(true);
  };
  return (
    <div className="position-relative">
      <Card
      onClick={()=>{navigate(`/produit/${id}`)}}
        className="cardproduct"
        hoverable
        style={{
          width: 240,
        }}
        cover={<img alt="title" src={src} />}
      >
        {isAddedToWishlist ? (
          <IoHeartSharp className="love d-flex flex-column text-darck position-obsolute" />
        ) : (
          <IoHeartOutline onClick={addtowishlist} className="love d-flex flex-column text-darck position-obsolute" />
        )}
      
        <div className="icon-wrapper d-flex flex-column align-items-center">
        </div>
        <h4>{title}</h4>
        <Meta title={prix +"DT"} description={description} />
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

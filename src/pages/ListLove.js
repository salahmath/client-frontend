import React, { useEffect } from "react";
import { Card, Col, Row } from "antd";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";

import BreadCump from "../conmponentes/BreadCump";
import PageHelmet from "../conmponentes/Helmet";
import { AddToLoves, GetLoves } from "../features/Product/productSlice";
import { useNavigate } from "react-router-dom";
import { Empty } from 'antd';

const ListLove = () => {

  const dispatch = useDispatch()
  useEffect(()=>{
dispatch(GetLoves())
  },[dispatch])
  const addtowishlist = (id)=>{
    dispatch(AddToLoves(id))
    setTimeout(() => {
      dispatch(GetLoves())

    }, 300);
  }
  

  const Panierstate=useSelector((state)=>state?.Product?.Loves)
  
  function RenderHTML({ htmlContent }) {
    return (
      <div
        style={{
          display: '-webkit-box',
          overflow: 'hidden',
          WebkitBoxOrient: 'vertical',
          WebkitLineClamp: 3,
        }}
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    );
  }
  const navigate=useNavigate()
  return (
    <>
      <PageHelmet title="Favorite" />
      <BreadCump title="Favorite" />
      <div className="py-5 ">
  <div className="container-xxl">
    <div className="row">
    {Panierstate?.wishlist.length === 0 ? (
<Empty description={false} />
) : (
  // Si la wishlist n'est pas vide
  <>
    {Panierstate?.wishlist?.map((item, key) => (
      <div className="col-12 col-md-4 col-lg-4 col-xl-3" key={key}>
        <div className="">
          <Card title={item.title} bordered={false}>
            <div className="">
              <img
                className="img-fluid"
                src={item?.images[0]?.url}
                alt={key}
                onClick={() => {
                  navigate(`/produit/${item?._id}`)
                }}
              />
              <div className="panier-detail">
                <br />
                <h4>
                  <RenderHTML htmlContent={item?.description} />
                </h4>
                <h5>{item?.price}</h5>
              </div>
              <div className="icon-top-right">
                <RxCross2 onClick={() => {
                  addtowishlist(item?._id)
                }} name="plus" />
              </div>
            </div>
          </Card>
        </div>
      </div>
    ))}
  </>
)}


      
    </div>
  </div>
</div>

    </>
  );
};

export default ListLove;

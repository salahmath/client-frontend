import React, { useEffect } from "react";
import { Card, Col, Row } from "antd";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";

import BreadCump from "../conmponentes/BreadCump";
import PageHelmet from "../conmponentes/Helmet";
import { AddToLoves, GetLoves } from "../features/Product/productSlice";
import { useNavigate } from "react-router-dom";
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
      <div className="wishlist-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="wishlist-product-card">
                <Row gutter={16}>
                {Panierstate  && Panierstate?.wishlist?.map((i,key)=>{
                  return (
                    <Col span={8}>
                    <Card title={i.title} bordered={false}>
                      <div className="product-content">
                        <img
                          className="img-fluid"
                          src={i.images[0].url}
                          alt={key}
                          onClick={()=>{
                            navigate(`/produit/${i._id}`)
                          }}
                        />
                        <div className="panier-detail">
                        <br/>
                          <h4>
                          <RenderHTML htmlContent={i.description} />

                          </h4>
                          <h5>{i.price}</h5>
                        </div>
                        <div className="icon-top-right">
                          <RxCross2 onClick={()=>{
                            addtowishlist(i._id)
                          }} name="plus" />
                        </div>
                      </div>
                    </Card>
                  </Col>
                  
                  )
                })
                  
                    
                }
               
                </Row>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListLove;

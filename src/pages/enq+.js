import React, { useEffect, useState } from "react";
import BreadCump from "../conmponentes/BreadCump";
import PageHelmet from "../conmponentes/Helmet";
import { useDispatch, useSelector } from "react-redux";
import { Tag,Table } from 'antd';
import { geteteenquirys } from "../features/User/UserSlice";
function RenderHTML({ htmlContent }) {
  return (
    <div
      style={{
        display: "-webkit-box",
        overflow: "hidden",
        WebkitBoxOrient: "vertical",
      }}
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
}
const Enquirymessage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(geteteenquirys());
  }, [dispatch]);
const enqstate=useSelector((state)=>state?.auth?.geteteenquirys)
  const columns1 = [
   
    {
      title: 'nom ',
      dataIndex: 'lastname',
      defaultSortOrder: "descend",
      sorter: (a, b) => a.lastname.length - b.lastname.length,
    },
    {
      title: 'email',
      dataIndex: 'email',
    },
    {
      title: 'Reponse',
      dataIndex: 'mobile',
    },
    {
        title: "Statut de enquéte",
        dataIndex: "orderStatus",
        key: "orderStatus",
        render: (_, { orderStatus }) => {
          let color;
          switch (orderStatus.toUpperCase()) {
            case 'EN ATTENTE':
              color = 'volcano';
              break;
            case 'VOIR':
              color = 'blue';
              break;
            case 'RESPONSE':
              color = 'green';
              break;
            
            default:
              color = 'default';
          }
          return (
            <Tag color={color} key={orderStatus}>
              {orderStatus.toUpperCase()}
            </Tag>
          );
        },
      }
    ];
  const data1 = []
  for (let i = 0; i < enqstate?.length; i++) {
    data1.push({
        key: i, 
        lastname: enqstate[i]?.name,
        email: enqstate[i]?.comment,
        mobile: <RenderHTML htmlContent={enqstate[i]?.reponse} />,
        orderStatus:enqstate[i]?.status,
    });
}  
  return (
    <>
      <PageHelmet title="Mon ENquiry_essage" />
      <BreadCump title="Mon ENquiry_essage" />
      <div className="profile-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row justify-content-center">
            <div className="col-7">
              <div className="profile_card">
          <Table columns={columns1} dataSource={data1} size="middle" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Enquirymessage;
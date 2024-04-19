import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { GetOrder } from "../features/User/UserSlice";
import { QRCode } from 'antd';

import BreadCump from "../conmponentes/BreadCump";
import PageHelmet from "../conmponentes/Helmet";
import { Tag } from 'antd';

const Order = () => {
  const dispatch = useDispatch();
  const orderState = useSelector((state) => state.auth);
  const [expandedRowKeys, setExpandedRowKeys] = useState([]);

  useEffect(() => {
    dispatch(GetOrder());
  }, [dispatch]);

  const handleExpand = (expanded, record) => {
    const keys = expanded ? [record.key] : [];
    setExpandedRowKeys(keys);
  };

  const expandedRowRender = (record) => {
    const columns1 = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Quantity',
        dataIndex: 'quantity',
        key: 'quantity',
      },
      {
        title: 'color',
        dataIndex: 'color',
        key: 'color',
      },{
        title: "QR Code",
        dataIndex: "qrValue",
        key: "qrCode",
        render: (qrValue) => (
          <QRCode value={qrValue || "-"} />
        ),
      },
    ];

    const data1 = record.shippingInfo.map((info, index) => ({
      ...info,
      key: index,
    }));

    return <Table columns={columns1} dataSource={data1} pagination={false} />;
  };
  const generateQRValue = (order) => {
    const productNames = order?.orderItems?.map((item) => item?.product?.title);
    const totalPrice = order?.totalPriceAfterdiscount;
    const createdAt = order?.createdAt;
    const id = order?._id;
    const status = order?.orderStatus;
    const quantite = order?.orderItems?.map((item) => item?.quantity);
    const url = `https://say123.netlify.app/facture?num_de_commande=${id}&produits=${quantite +""+"+"+""+ encodeURIComponent(productNames.join(','))}&Prix_total=${totalPrice}&commander_Le=${createdAt}&status_de_commande=${status}`;
    return url;
  };
  const columns = [
    {
      title: "Id de commande",
      dataIndex: "OrderId",
      key: "OrderId",
    },
   
    {
      title: "Prix ​​total après remise",
      dataIndex: "totalPriceAfterdiscount",
      key: "totalPriceAfterdiscount",
    },
    {
      title: "Date de commande",
      dataIndex: "Date",
      key: "Date",
    },
    {
      title: "Statut de commande",
      dataIndex: "orderStatus",
      key: "orderStatus",
      render: (_, { orderStatus }) => {
        let color; // Couleur par défaut
        switch (orderStatus.toUpperCase()) {
          case 'EN ATTENTE':
            color = 'volcano';
            break;
          case 'EN COURS DE TRAITEMENT':
            color = 'blue';
            break;
          case 'TERMINÉ':
            color = 'green';
            break;
          case 'ANNULÉ':
            color = 'grey';
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

  const data = orderState?.orders?.map((order) => ({
    OrderId: order?._id,
    totalPriceAfterdiscount: order?.totalPriceAfterdiscount+"DT",
    Date: order?.createdAt,
    orderStatus: order?.orderStatus,
    key: order?._id,
    shippingInfo: order?.orderItems.map((item) => ({
      name: item?.product?.title,
      quantity: item?.quantity,
      color: item?.color?.name,
      qrValue: generateQRValue(order),
    }))
  }));

  return (
    <><PageHelmet title=" Commande" />
    <BreadCump title=" Commande" />
    <Table
      columns={columns}
      expandable={{ expandedRowRender, onExpand: handleExpand, expandedRowKeys }}
      dataSource={data}
    />
    </>
  );
};

export default Order;

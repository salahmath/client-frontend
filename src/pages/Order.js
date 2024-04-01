import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { GetOrder } from "../features/User/UserSlice";

import BreadCump from "../conmponentes/BreadCump";
import PageHelmet from "../conmponentes/Helmet";
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
      },
    ];

    const data1 = record.shippingInfo.map((info, index) => ({
      ...info,
      key: index,
    }));

    return <Table columns={columns1} dataSource={data1} pagination={false} />;
  };

  const columns = [
    {
      title: "OrderId",
      dataIndex: "OrderId",
      key: "OrderId",
    },
    {
      title: "Total Price",
      dataIndex: "totalPrice",
      key: "totalPrice",
    },
    {
      title: "Total Price After Discount",
      dataIndex: "totalPriceAfterdiscount",
      key: "totalPriceAfterdiscount",
    },
    {
      title: "Date",
      dataIndex: "Date",
      key: "Date",
    },
    {
      title: "Order Status",
      dataIndex: "orderStatus",
      key: "orderStatus",
    },
  ];

  const data = orderState.orders.map((order) => ({
    OrderId: order?._id,
    totalPrice: order?.totalPrice,
    totalPriceAfterdiscount: order?.totalPriceAfterdiscount,
    Date: order?.createdAt,
    orderStatus: order?.orderStatus,
    key: order?._id,
    shippingInfo: order?.orderItems.map((item) => ({
      name: item.product.title,
      quantity: item.quantity,
      color: item.color.name,
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

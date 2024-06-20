import React, { useEffect, useState } from "react";
import { Button, Flex, Select, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  Chek,
  GetAllOrdersanspay,
  GetOrder,
  Konnect,
  Udateorder,
  exporState,
  updateaquan2,
} from "../features/User/UserSlice";
import { Alert, Spin } from "antd";
import { GiTimeSynchronization } from "react-icons/gi";
import { MdOutlinePayment } from "react-icons/md";

import { MdPayment } from "react-icons/md";

import BreadCump from "../conmponentes/BreadCump";
import PageHelmet from "../conmponentes/Helmet";
import { Tag } from "antd";
const contentStyle = {
  padding: 50,
  background: "rgba(0, 0, 0, 0.05)",
  borderRadius: 4,
};
const content = <div style={contentStyle} />;
const Order = () => {
  const dispatch = useDispatch();
  const orderState = useSelector((state) => state.auth);
  const konnectState = useSelector((state) => state?.auth?.Konnect);
  const konnectState1 = useSelector((state) => state?.auth?.orders);
  const [expandedRowKeys, setExpandedRowKeys] = useState([]);
  const [loading, setLoading] = useState(true); // Nouvel état de chargement

  useEffect(() => {
    dispatch(GetOrder()).then(() => {
      setLoading(false); // Déclenche l'état de chargement
      orderState?.orders?.forEach((order) => {
        dispatch(Chek(order?.payment_ref));
      });
      dispatch(GetOrder());
    });
    dispatch(GetOrder()).then(() => {
      setLoading(false); // Déclenche l'état de chargement
    });
  }, [dispatch]);
  const handleExpand = (expanded, record) => {
    const keys = expanded ? [record.key] : [];
    setExpandedRowKeys(keys);
  };
  const handleclicks1 = (orderId) => {
    const order = orderState?.orders.find((order) => order._id === orderId);
    if (order) {
      const data = {
        nom: order?.user?.lastname,
        prenom: order?.user?.lastname,
        email: order?.user?.lastname,
        amount : Math.round(order?.totalPriceAfterdiscount * 1000),
        mobile: order?.user?.mobile,
        oredrid: order?._id,
      };

      dispatch(Konnect(data));
    }
  };
  useEffect(() => {
    orderState?.orders?.forEach((order) => {
      dispatch(Chek(order?.payment_ref));
    });
  }, [dispatch, orderState?.orders]);

  useEffect(() => {
    dispatch(GetAllOrdersanspay());
  }, [dispatch]);

  useEffect(() => {
    if (konnectState) {
       window.location.href = konnectState.payUrl;
    }
  }, [konnectState, dispatch]);
  const expandedRowRender = (record) => {
    const columns1 = [
      {
        title: "Num",
        dataIndex: "key",
        key: "key",
      },
      {
        title: "Produit(s)",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "Quantite",
        dataIndex: "quantity",
        key: "quantity",
      },
      {
        title: "Coleur",
        dataIndex: "color",
        key: "color",
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
      title: "Id ",
      dataIndex: "OrderId",
      key: "OrderId",
    },

    {
      title: "Prix ​​total",
      dataIndex: "totalPriceAfterdiscount",
      key: "totalPriceAfterdiscount",
    },
    {
      title: "Date ",
      dataIndex: "Date",
      key: "Date",
    },

    {
      title: "Statut ",
      dataIndex: "orderStatus",
      key: "orderStatus",
      render: (_, { orderStatus }) => {
        let color; // Couleur par défaut
        switch (orderStatus.toUpperCase()) {
          case "EN ATTENTE":
            color = "volcano";
            break;
          case "EN COURS DE TRAITEMENT":
            color = "blue";
            break;
          case "TERMINÉ":
            color = "green";
            break;
          case "ANNULÉ":
            color = "grey";
            break;
          default:
            color = "default";
        }
        return (
          <Tag color={color} key={orderStatus}>
            {orderStatus.toUpperCase()}
          </Tag>
        );
      },
    },
    {
      title: "STATUT",
      dataIndex: "STATUS",
      key: "STATUS",
    },
    {
      title: "Payement",
      dataIndex: "Payer",
      key: "Payer",
    },
    {
      title: "Chronométre",
      dataIndex: "chronométre",
      key: "chronométre",
    },

    {
      title: "Statut de paiement",
      dataIndex: "paymentStatus",
      key: "paymentStatus",
      render: (_, record) => (
        <Tag color={record.paymentStatus === "1" ? "green" : "volcano"}>
          <MdPayment />
        </Tag>
      ),
    },
    {
      title: "Méthode de paiement",
      dataIndex: "méthode",
      key: "méthode",
      render: (_, { méthode }) => {
        let image;
        switch (méthode.toUpperCase()) {
          case "WALLET":
            image = (
              <img
                className="img14"
                src="https://www.harberlondon.com/cdn/shop/products/Card-Wallet-with-RFID-Protection-Tan-4.jpg?v=1657192113"
                alt="Wallet"
              />
            );
            break;
          case "BANK_CARD":
            image = (
              <img
                className="img14"
                src="https://tsb.com.tn/sites/default/files/2020-04/Carte-PLATINUM-INTERNATIONALE.png"
                alt="Bank Card"
              />
            );
            break;
          case "E-DINAR":
            image = (
              <img
                className="img14"
                src="https://play-lh.googleusercontent.com/lOgvUGpz6YUSXJG48kbzGrTEohIC8FDr_WkP6rwgaELR0g5o6OQu5-VPGexKoB8F0C-_"
                alt="E-DINAR"
              />
            );
            break;
          case "NON":
            image = (
              <img
                className="img14"
                src="https://png.pngtree.com/png-vector/20221020/ourmid/pngtree-no-payment-nope-disbursement-grunge-vector-png-image_23053080.png"
                alt="non"
              />
            );
            break;
          default:
            image = null;
        }
        return image;
      },
    },
  ];
  const Udateorders = (a, b) => {
    dispatch(Udateorder({ a, b }));
  };
  const data = orderState?.orders?.map((order) => {
    // Calculer la date d'expiration en ajoutant 48 heures à la date de création de la commande
    const expirationDate = new Date(order?.createdAt);
    expirationDate.setHours(expirationDate.getHours() + 48);

    // Calculer le temps restant jusqu'à la date d'expiration
    const currentTime = new Date();
    const timeRemaining = expirationDate - currentTime;

    // Convertir le temps restant en heures, minutes et secondes
    const hoursRemaining = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutesRemaining = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
    );
    const secondsRemaining = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    const chronométre =
      (hoursRemaining >= 0 || minutesRemaining >= 0 || secondsRemaining >= 0) &&
      order?.type !== "1" &&
      order?.orderStatus === "En attente"
        ? `${hoursRemaining}h ${minutesRemaining}m ${secondsRemaining}s`
        : "";
    const dates = new Date(order?.createdAt);
    return {
      OrderId: order?._id,
      totalPriceAfterdiscount: order?.totalPriceAfterdiscount + "DT",
      Date: dates.toLocaleString("en-US", { timeZone: "Africa/Tunis" }),
      paymentStatus: order?.type,
      orderStatus: order?.orderStatus,
      chronométre:
        chronométre !== "" ? (
          chronométre
        ) : (
          <GiTimeSynchronization
            color={order?.orderStatus === "Annulé" ? "red" : "green"}
          />
        ),
      key: order?._id,
      méthode: order?.method,
      shippingInfo: order?.orderItems.map((item) => ({
        name: item?.product?.title,
        quantity: item?.quantity,
        color: item?.color?.name,
        STATUS: (
          <Select
            labelInValue
            defaultValue={order?.orderStatus}
            style={{ width: 120 }}
            onChange={(e) => Udateorders(order?._id, e.value)}
            options={[
              {
                value: "Annulé",
                label: "Annulé",
              },
            ]}
          />
        ),
      })),
      STATUS:
        order?.type === "1" ? (
          <Tag color="green">
            {order?.orderStatus === "Terminé"
              ? "Merci pour avoir choisi notre service"
              : "Attend notre téléphone"}
          </Tag>
        ) : order?.orderStatus === "Annulé" ? (
          <Tag color="volcano">Votre commande a été annulée avec succès.</Tag>
        ) : (
          <Select
            labelInValue
            defaultValue={order?.orderStatus}
            style={{ width: 120 }}
            onChange={(value) => Udateorders(order?._id, value.value)}
            options={[
              {
                value: "Annulé",
                label: "Annulé",
              },
            ]}
          />
        ),
      Payer: (
        <Flex gap="small" vertical>
          <Flex wrap="wrap" gap="small">
            <Button
              disabled={order?.type === "1" || order?.orderStatus === "Annulé"}
              onClick={() => handleclicks1(order._id)}
              className={
                (order?.type === "1") | (order?.orderStatus === "Annulé")
                  ? ""
                  : "btn-success"
              }
              icon={<MdOutlinePayment />}
            >
              Payer
            </Button>
          </Flex>
        </Flex>
      ),
    };
  });

  useEffect(() => {
    const cancelledOrders = orderState?.orders?.filter(
      (order) => order.orderStatus === "Annulé"
    );
    cancelledOrders?.forEach((order) => {
      dispatch(updateaquan2(order._id));
    });
  }, [dispatch]);

  return (
    <>
      <PageHelmet title=" Commande" />
      <BreadCump title=" Commande" />
      {loading ? ( // Affiche l'animation de chargement si loading est vrai
        <div className="loading-container">
          <Flex gap="small" vertical>
            <Flex gap="small"></Flex>
            <Spin tip="Veuillez patienter...">
              <Alert
                message="trétement les commandes"
                description="Nous traitons votre commande. Merci de votre patience."
                type="info"
              />
            </Spin>
          </Flex>
        </div>
      ) : (
        <Table
          columns={columns}
          expandable={{
            expandedRowRender,
            onExpand: handleExpand,
            expandedRowKeys,
          }}
          dataSource={data}
          scroll={{ x: "100%" }}
        />
      )}
    </>
  );
};

export default Order;

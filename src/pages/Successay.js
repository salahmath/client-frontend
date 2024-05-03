import React from 'react';
import { Button, Result } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Chek, GetOrder } from '../features/User/UserSlice';

const Succ = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const orderState = useSelector((state) => state.auth);

  const cliq = () => {
    dispatch(GetOrder()).then(() => {
      orderState?.orders?.forEach((order) => {
        dispatch(Chek(order?.payment_ref));
      });
      navigate('/order'); // Redirection vers la page de commande
    });
  };

  return (
    <Result
      status="success"
      title="Achat réussi !"
      subTitle="Numéro de commande : 2017182818828182881. La configuration du serveur cloud prendra 1 à 5 minutes, veuillez patienter."
      extra={[
        <Button type="primary" key="console" onClick={cliq}>
          <Link>Retour à la page de commande</Link>
        </Button>
      ]}
    />
  );
};

export default Succ;

import React from 'react';
import { CloseCircleOutlined } from '@ant-design/icons';
import { Button, Result, Typography } from 'antd';
import { Link, useNavigate } from 'react-router-dom'; // Importez useNavigate depuis 'react-router-dom'

const { Paragraph, Text } = Typography;

const Faileds = () => {
  const navigate = useNavigate(); // Initialisez la constante navigate avec useNavigate()

  return (
    <Result
      status="error"
      title="Paiement Échoué"
      subTitle="Veuillez vérifier et modifier les informations suivantes avant de soumettre à nouveau."
      extra={
        <Button type="primary" onClick={() => navigate("/order")}>Voir mon commande</Button> // Utilisez la constante navigate pour naviguer vers '/order'
      }
    >
      <div className="desc">
        <Paragraph>
          <Text
            strong
            style={{
              fontSize: 16,
            }}
          >
            Le contenu que vous avez soumis présente des erreurs :
          </Text>
        </Paragraph>
        <Paragraph>
          <CloseCircleOutlined className="site-result-demo-error-icon" /> Veuillez vérifier votre mode de paiement.
        </Paragraph>
        <Paragraph>
          <CloseCircleOutlined className="site-result-demo-error-icon" /> Veuillez vérifier votre commande. <Link to={"/order"}>Vérifier ! &gt;</Link>
        </Paragraph>
      </div>
    </Result>
  );
};

export default Faileds;

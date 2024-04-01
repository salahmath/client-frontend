import axios from "axios";
import React, { useEffect } from "react"; // Importez useEffect si vous en avez besoin
import { useLocation, useNavigate } from "react-router-dom";
import { getClient } from "../utils/URL";

const Success = () => {
  const headers = getClient();
  const location = useLocation();
  const locationId = location.search.split("?payment_id=")[1];
  console.log(locationId);

  useEffect(() => {
    // Utilisez useEffect pour exécuter handlePayment lorsque le composant est monté
    handlePayment();
  }, []); // Assurez-vous de spécifier une dépendance vide pour exécuter une seule fois au montage
const navigate = useNavigate()
  const handlePayment = async () => {
    try {
      const response = await axios.post(
        `http://127.0.0.1:5000/api/user/paymentverif/${locationId}`, // Utilisez backticks pour incorporer la variable locationId
        null, // Passer null comme corps de la requête si vous n'avez pas besoin de données supplémentaires
        headers // Passer les en-têtes en tant qu'option de la requête
      );
      const data = response.data;
      console.log( )

      // Vérifiez si le statut est "success"
      if (data.data.result.details.status === "SUCCESS") {
        // Affichez une alerte de succès
        setTimeout(() => {
        alert("Payment succeeded!");
/* 
navigate("/") */
        },300)
      }
    } catch (error) {
      console.error("Error during payment:", error);
    }
  };

  return <>

    {

    }
  </>;
};

export default Success;

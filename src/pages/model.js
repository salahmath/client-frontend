import React, { useState } from 'react';
import { Button, Modal, Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Chek } from '../features/User/UserSlice';

const Models = ({ status, setStatus, url, ord }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false); // État pour suivre si l'action est en cours d'exécution
  const cheked = useSelector((state) => state?.auth?.Chek);

  const handleOk = () => {
    setLoading(true); // Définir le chargement sur true au début de l'exécution
  
    dispatch(Chek(ord))
      .then(() => {
        window.location.reload();
      })
      .catch(error => {
        // Gérer les erreurs, si nécessaire
        console.error("Une erreur s'est produite :", error);
      })
      .finally(() => {
        setLoading(false); // Définir le chargement sur false après l'exécution
      });
  };
  const handleCancel = () => {
    setStatus(false);
  };

  return (
    <>
      <Modal title="Basic Modal" visible={status} onOk={handleOk} onCancel={handleCancel}>
        <iframe
          title="Contenu de la page"
          src={url}
          style={{ width: '100%', height: '1000px', border: 'none' }} // Style personnalisé pour l'iframe
        />
        {loading && <Spin />} {/* Affichez le Spinner si loading est vrai */}
      </Modal>
    </>
  );
};

export default Models;

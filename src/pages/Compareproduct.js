import React, { useEffect, useState } from "react";
import {  message } from "antd";

import { IconButton } from "@mui/material"; // Importation de IconButton depuis MUI
import { Fingerprint } from "@mui/icons-material"; import BreadCump from "../conmponentes/BreadCump";
import PageHelmet from "../conmponentes/Helmet";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from "react-redux";
import { GetAllcoupon } from "../features/User/UserSlice";
import { Alert, Flex, Spin } from "antd";
const contentStyle = {
  padding: 50,
  background: "rgba(0, 0, 0, 0.05)",
  borderRadius: 4,
};
const content = <div style={contentStyle} />;
const Compareproduct = () => {
  const dispatch = useDispatch();
  const [copiedId, setCopiedId] = useState(null); // État pour stocker l'ID copié
  const [loading, setLoading] = useState(true); // Nouvel état de chargement

  useEffect(() => {
    dispatch(GetAllcoupon()).then(()=>{
      setLoading(false)
    });
  }, [dispatch]);

  const couponState = useSelector((state) => state?.auth?.GetAllcoupon);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  function createData(nom, id, expiry, discount) {
    return { nom, id, expiry, discount };
  }

  const rows = couponState?.map((item) => createData(item.name, item._id, item.expiry, item.discount));

  const handleCopyId = (id) => {
    navigator.clipboard.writeText(id);
    setCopiedId(id);
    message.success('ID copied to clipboard');
  };

  return (
    <>
      <PageHelmet title="Coupon" />
      <BreadCump title="Coupon" />
      <div className="cart-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
            {loading ? ( // Affiche l'animation de chargement si loading est vrai
          <div className="loading-container">
            <Flex gap="small" vertical>
              <Flex gap="small"></Flex>
              <Spin tip="Chargement en cours...">
  <Alert
    message="Coupons disponibles"
    description="Consultez ci-dessous les coupons disponibles pour bénéficier de réductions sur vos achats."
    type="info"
  />
</Spin>

            </Flex>
          </div>
        ) : (
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell align="right">nom de coupon</StyledTableCell>
                      <StyledTableCell align="right">Id de coupon</StyledTableCell>
                      <StyledTableCell align="right">réduction</StyledTableCell>
                      <StyledTableCell align="right">expirée</StyledTableCell>
                      <StyledTableCell align="right">Actions</StyledTableCell> {/* Ajout de cette colonne pour les actions */}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows?.map((row, index) => (
                      <StyledTableRow key={index}>
                        <StyledTableCell component="th" scope="row">
                          {row.nom}
                        </StyledTableCell>
                        <StyledTableCell align="right">{row.id}</StyledTableCell>
                        <StyledTableCell align="right">{row.discount}%</StyledTableCell>
                        <StyledTableCell align="right">{row.expiry}</StyledTableCell>
                        <StyledTableCell align="right">
                        <IconButton aria-label="fingerprint" color="secondary">
  <Fingerprint onClick={() => handleCopyId(row.id)}/>
</IconButton>{/*  */} 
                          
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Compareproduct;

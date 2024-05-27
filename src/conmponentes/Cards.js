import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FrownOutlined, MehOutlined, SmileOutlined,brand ,totalrating} from "@ant-design/icons";
import { Flex, Rate } from "antd";
import {Link, useNavigate}  from "react-router-dom"
import { AddToLoves } from '../features/Product/productSlice';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
const customIcons= {
    1: <FrownOutlined />,
    2: <FrownOutlined />,
    3: <MehOutlined />,
    4: <SmileOutlined />,
    5: <SmileOutlined />,
  };
  
export default function ImgMediaCard({id,solde,price,brand,totalrating,title,src,description,quatite} ) {
    const dispatch =useDispatch()
    const navigate =useNavigate()
    const addtowishlist = (id) => {
        dispatch(AddToLoves(id)).then(() => {
          toast.success("Vérifiez vos favoris.");
        })
        .catch((error) => {
          toast.error("Erreur lors de l'ajout aux favoris : " + error.message);
        })};
     
      
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="auto"
        image={src}
        onClick={()=>{
          navigate(`/produit/${id}`) 
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <br/>
        <Typography variant="body2" color="text.secondary">
        {description}
        </Typography>

        <br/>
        <Typography variant="body2" color="text.secondary">
        
        <span className="red-p colores">
                {price }DT
              </span>
        </Typography>
        <br/>
        <Flex gap="middle" vertical>
              <Rate
                value={totalrating}
                character={({ index = 0 }) => customIcons[index + 1]}
              />
            </Flex>
      </CardContent>
      
      <CardActions>
      <Button onClick={() => addtowishlist(id)}>
  Ajouter aux favoris
</Button>

       
      </CardActions>
    </Card>
  );
}
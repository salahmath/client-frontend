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
        dispatch(AddToLoves(id));
      };
      
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
      <div class="progress my-3">
              <div
                class="progress-bar"
                role="progressbar"
                style={{ width: `${(quatite / (quatite + solde)) * 100}%` }}
                aria-valuenow={(quatite / (quatite + solde)) * 100}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
      <CardActions>
        <Button onClick={() => addtowishlist(id)} size="small">ajouter aux Favoris</Button>
      </CardActions>
    </Card>
  );
}
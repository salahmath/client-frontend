import React from 'react';
import { Link } from "react-router-dom";
import { Card, Button } from 'antd';

const { Meta } = Card;

const Blogcard = ({ src, title, description,date,id }) => (
  <Card
    hoverable
    style={{
     
    }}
    cover={<img alt="title" src={src} />}
  >
    
    <Meta title={title} description={description} />
    <br />
    <p>{date}</p>
    <Link to={`/blog/${id}`}>
      <Button type="dashed">Consulter</Button> 
    </Link>
  </Card>
);

export default Blogcard;

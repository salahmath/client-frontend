import React from 'react';
import { Link } from "react-router-dom";
import { Card, Button } from 'antd';

const { Meta } = Card;

const Blogcard = ({ src, title, description }) => (
  <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="title" src={src} />}
  >
    <h4>7 October 2002</h4>
    <Meta title={title} description={description} />
    <br />
    <Link to="/">
      <Button type="dashed">Consulter</Button> 
    </Link>
  </Card>
);

export default Blogcard;

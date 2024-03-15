import React from 'react';
import { Link } from "react-router-dom";
import { Card } from 'antd';
import { FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons';
import { Rate } from 'antd';
import { IoIosNotificationsOutline } from "react-icons/io";
import { GrView } from "react-icons/gr";
import { MdAddShoppingCart } from "react-icons/md";
import { FaCodeCompare } from "react-icons/fa6";
import { GiSelfLove } from "react-icons/gi";

const customIcons= {
  1: <FrownOutlined />,
  2: <FrownOutlined />,
  3: <MehOutlined />,
  4: <SmileOutlined />,
  5: <SmileOutlined />,
};

const { Meta } = Card;

const Productcart = ({ src, title, description, prix }) => (
  <div className='position-relative'>
    <Card className='cardproduct'
      hoverable
      style={{
        width: 240,
      }}
      cover={<img alt="title" src={src} />}
    >
         <Link to="/contact" className='love d-flex flex-column position-obsolute'>
          <GiSelfLove />
        </Link>
      <div className="icon-wrapper d-flex flex-column align-items-center">
        <Link to="/contact">
          <IoIosNotificationsOutline />
        </Link>
        <Link>
          <GrView />
        </Link>
        <Link>
          <MdAddShoppingCart />
        </Link>
        <Link>
          <FaCodeCompare />
        </Link>
      </div>
      <h4>{title}</h4>
      <Meta title={prix} description={description} />
      <Rate defaultValue={3} character={({ index = 0 }) => customIcons[index + 1]} />
    </Card>
  </div>
);

export default Productcart;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.scss'

const URL = process.env.REACT_APP_DEV_URL;

const Product = ({id, item}) => {
  const navigate = useNavigate();
  return (
    <div className="product-card" onClick={ () => navigate(`/product/${id}`, {state: {item}, replace: false})}>
      <div className="thumbnail">
        <img src={`${URL}${item.img.data[0].attributes.url}`} alt="prod" />
      </div>
      <div className="prod-details">
        <span className="name">
          {item.text}
        </span>
        <span className="price">&#8377;{item.price}</span>
      </div>
    </div>
  );
}

export default Product
import React, { useState, useContext } from 'react'
import { useParams} from 'react-router-dom'
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaCartPlus
} from 'react-icons/fa';

import RelatedProducts from './RelatedProducts/RelatedProducts';
import './SingleProduct.scss'
import useFetch from '../../hooks/useFetch';
import { Context } from '../../utils/context';

function SingleProduct() {
  const [ quantity, setQuantity ] = useState(1)
  const {id} = useParams()
  const {data} = useFetch(`/api/products?populate=*&[filters][id]=${id}`)

  const { handleAddToCart, handleRemoveFromCart } = useContext(Context);
  
  const decrement = () => {
    setQuantity(prevQuant => {
      if (prevQuant === 1) return 1;
      return prevQuant - 1
    })
  }

  const increment = () => {setQuantity(prevQuant => prevQuant + 1)}

  if(!data) return
  const item = data && data.data[0].attributes;
  return (
    <div className='single-product-main-content' >
      <div className='layout'>
        <div className='single-product-page'>
          <div className='left'>
            <img src={`${process.env.REACT_APP_DEV_URL}${item?.img?.data[0]?.attributes?.url}`} alt="singleProd" />
          </div>
          <div className='right'>
            <span className='name'>{item?.text}</span>
            <span className='price'>&#8377;{item?.price}</span>
            <span className='desc'>{item?.desc}</span>
            <div className='cart-buttons' >
              <div className='quantity-buttons'>
                <span onClick={decrement} >-</span>
                <span>{quantity}</span>
                <span onClick={increment} >+</span>
              </div>
              <button className='add-to-cart-button' onClick={() =>{
                 handleAddToCart(data.data[0], quantity)
                 setQuantity(1)
                 }} >
                <FaCartPlus size={20} />
                Add to cart
              </button>
            </div>
            <span className='divider' />
            <div className='info-items'>
              <span className='text-bold'>
                Category:
                <span>{item?.categories?.data[0]?.attributes?.title}</span>
              </span>
              <span className='text-bold'>
                Share:
                <span className='social-icons'>
                  <FaTwitter size={16} />
                  <FaFacebookF size={16} />
                  <FaInstagram size={16} />
                  <FaLinkedinIn size={16} />
                  <FaPinterest size={16} />
                </span>
              </span>
            </div>
          </div>
        </div>
        <RelatedProducts
          productId={id}
          categoriesId={item?.categories?.data[0]?.id}
        />
      </div>
    </div>
  )
}

export default SingleProduct
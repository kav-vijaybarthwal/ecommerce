import React from 'react'
import { 
  FaLocationArrow,
  FaMobileAlt,
  FaEnvelope,
 } from 'react-icons/fa';

import './Footer.scss'
import Payments from '../../assets/payments.png'

function Footer() {
  return (
    <footer className='footer' >
      <div className='footer-content'>
        <div className='col'>
          <div className='title' >About</div>
          <div className='text'>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
          </div>
        </div>
        <div className='col'>
          <div className='title' >Contact</div>
          <div className='c-item'>
            <FaLocationArrow />
            <span className='text' >
              karakoram, pass, nathula tunnel, Sikkim, manipuram, keralla, 834
            </span>
          </div>
          <div className='c-item'>
            <FaMobileAlt />
            <span className='text' >
              Phone: 9928383949
            </span>
          </div>
          <div className='c-item'>
            <FaEnvelope />
            <span className='text' >
              Email: karakorampass@ataparru.com
            </span>
          </div>
        </div>
        <div className='col'>
          <div className='title' >Category</div>
            <span className='text' >
              Categories
            </span>
            <span className='text' >
              Headphones
            </span>
            <span className='text' >
              Smart Watch
            </span>
            <span className='text' >
              Bluetooth Speaker
            </span>
            <span className='text' >
              Wireless Earbudd
            </span>
            <span className='text' >
              Home Theater
            </span>
            <span className='text' >
              Projector
            </span>

        </div>
        <div className='col'>
          <div className='title' >Pages</div>
            <span className='text' >
              Home
            </span>
            <span className='text' >
              About
            </span>
            <span className='text' >
              Privacy policy
            </span>
            <span className='text' >
              Returns
            </span>
            <span className='text' >
              Term & Conditions
            </span>
            <span className='text' >
              Contact Us
            </span>
        </div>
      </div>
      <div className='bottom-bar'>
        <div className='bottom-bar-content'>
        <span className='text'>
          VIJAYSTORE 2022 CREATED BY VIJAY DEV. PREMIUM ECOMMERCE
        </span>
        <img src={Payments} alt='payments'/>
        </div>

      </div>
    </footer>
  )
}

export default Footer
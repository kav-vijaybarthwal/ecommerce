import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { TbSearch } from 'react-icons/tb';
import { CgShoppingCart } from 'react-icons/cg';
import { AiOutlineHeart } from 'react-icons/ai';

import Search from './Search/Search.js';
import Cart from '../Cart/Cart.js';
import { Context } from '../../utils/context.js';

import './Header.scss';

function Header() {

  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () =>{
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrolled])


  

  const handleScroll = () => {
    const offset = window.scrollY;
    if(offset > 200) {
      setScrolled(true)
    } else setScrolled(false)
  }
  return (
   <header className={`main-header ${scrolled ? "sticky-header" : ""}`} >
    <div className="header-content">
      <ul className="left" >
        <li>Home</li>
        <li>About</li>
        <li>Category</li>
      </ul>
      <div className='center' >Ecommerce App</div>
      <div className="right" >
        <TbSearch />
        <AiOutlineHeart />
        <span className='cart-icon' >
          <CgShoppingCart />
          <span className='cart-icon' >5</span>
        </span>
      </div>
    </div>
   </header>
)}

export default Header
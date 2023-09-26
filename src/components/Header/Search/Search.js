import React from 'react'
import {MdClose} from 'react-icons/md'

import prod from '../../../assets/products/ear-phone.png';
import './Search.scss'

const Search = ({ handleShowSearch }) => {
  return (
    <div className='search-modal' >
      <div className='form-field'>
        <input
          type='text'
          autoFocus
          placeholder='Search for Products'
        />
        <MdClose
          onClick ={() => handleShowSearch()}
        />
      </div>
      <div className='search-result-content'>
        <div className='search-results'>
          <div className='search-result-item'>
            <div className='img-container'>
          <img src={prod} alt='prod' />
        </div>
        <div className='prod-details' >
          <span className='name' >Product name</span>
          <span className='desc' >Product Description</span>
        </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search
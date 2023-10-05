import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {MdClose} from 'react-icons/md'

import prod from '../../../assets/products/ear-phone.png';
import './Search.scss'
import useFetch from '../../../hooks/useFetch.js';

const Search = ({ handleShowSearch }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const onChange = (e) => {
    setQuery(e.target.value)
  }

  let {data} = useFetch(`/api/products?populate=*&filters[text][$contains]=${query}`)

  if (!query.length){
    data = null
  }

  return (
    <div className='search-modal' >
      <div className='form-field'>
        <input
          type='text'
          autoFocus
          placeholder='Search for Products'
          value={query}
          onChange={onChange}
        />
        <MdClose
          onClick ={() => handleShowSearch()}
        />
      </div>
      <div className='search-result-content'>
        <div className='search-results'>
        {data?.data?.map(item => (
          <div key={item.id} className='search-result-item' onClick={() => {
            navigate(`/product/${item.id}`)
            handleShowSearch()
            }} >
            <div className='img-container'>
          <img src={`${process.env.REACT_APP_DEV_URL}${item?.attributes?.img?.data[0]?.attributes?.url}`} alt='prod' />
        </div>
        <div className='prod-details' >
          <span className='name' >{item.attributes.text}</span>
          <span className='desc' >{item.attributes.desc}</span>
        </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default Search
import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Category.scss';

const URL = process.env.REACT_APP_DEV_URL

function Category({categories}) {

  const navigate = useNavigate()

  return (
    <div className='shop-by-category'>
      <div className='categories'>
      {categories?.data?.map((item) => (
        <div key={item.id} id={item.id} className='category' onClick={() => navigate(`/category/${item.id}`)} >
          <img src={`${URL}${item.attributes.img.data.attributes.url}`} alt="cat1" />
        </div>
      ))}
      </div>
    </div>
  )
}

export default Category
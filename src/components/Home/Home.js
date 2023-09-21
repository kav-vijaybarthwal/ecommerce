import React from 'react'


import './Home.scss'
import Banner from './Banner/Banner.js'
import Category from '../Category/Category'
import { Products } from '../Products/Products'


function Home() {
  return (
    <div>
      <Banner />
      <div className='main-content'>
        <div className='layout'>
          <Category />
          <Products />
        </div>
      </div>
    </div>
  )
}

export default Home
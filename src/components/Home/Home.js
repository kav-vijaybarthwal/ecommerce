import React from 'react'


import './Home.scss'
import Banner from './Banner/Banner.js'
import { Products } from '../Products/Products'
import Category from './Category/Category.js'


function Home() {
  return (
    <div>
      <Banner />
      <div className='main-content'>
        <div className='layout'>
          <Category/>
          <Products />
        </div>
      </div>
    </div>
  )
}

export default Home
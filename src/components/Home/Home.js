import React, {useEffect} from 'react'


import './Home.scss'
import Banner from './Banner/Banner.js'
import { Products } from '../Products/Products'
import Category from './Category/Category.js'
import { fetchDataFromApi } from '../../utils/api'

function Home() {

  useEffect(() => {
    getCategories()
  }, []);

  const getCategories = () => {
    fetchDataFromApi("/api/categories").then(res => console.log(res))
  }

  return (
    <div>
      <Banner />
      <div className='main-content'>
        <div className='layout'>
          <Category/>
          <Products headingText = "Popular Products"/>
        </div>
      </div>
    </div>
  )
}

export default Home
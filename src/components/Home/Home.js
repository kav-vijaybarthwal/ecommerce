import React, {useEffect, useContext} from 'react'
import { Context } from '../../utils/context'


import './Home.scss'
import Banner from './Banner/Banner.js'
import { Products } from '../Products/Products'
import Category from './Category/Category.js'
import { fetchDataFromApi } from '../../utils/api'

function Home() {

  const { categories, setCategories, products, setproducts} = useContext(Context)

  useEffect(() => {
    getCategories();
    getProducts();
  }, []);

  const getCategories = () => {
    fetchDataFromApi("/api/categories?populate=*").then(res => {
      setCategories(res)
    })
  }
  const getProducts = () => {
    fetchDataFromApi("/api/products?populate=*").then(res => {
      setproducts(res)
    })
  }

  return (
    <div>
      <Banner />
      <div className='main-content'>
        <div className='layout'>
          <Category categories={categories} />
          <Products
            products={products}
            headingText = "Popular Products"
          />
        </div>
      </div>
    </div>
  )
}

export default Home
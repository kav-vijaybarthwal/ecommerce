import React from 'react'
import Products from '../../Products/Products.js'

import useFetch from '../../../hooks/useFetch.js'

const RelatedProducts = ({productId, categoriesId}) => {

  const {data} = useFetch(`/api/products?populate=*&[filters][id][$ne]=${productId}&filters[categories][id]=${categoriesId}&pagination[start]=0&pagination[limit]=4`)


  if (!data) return
  return (
    <div className='related-products' >
      <Products headingText = "Related Products" products={data}/>
    </div>
  )
}

export default RelatedProducts
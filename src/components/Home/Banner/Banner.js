import React from 'react'
import './Banner.scss'
import BannerImg from '../../../assets/banner-img.png'

const Banner = () => {
  return (
    <div className='hero-banner' >
      <div className='content' >
        <div className='text-content left-col'>
          <h1>SALES</h1>
          <p>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour. 
          </p>
          <div className='ctas'>
            <div className='banner-cta'>Read More</div>
            <div className='banner-cta v2'>Shop Now</div>
          </div>
        </div>
        <div className='right-col' >
          <img className='banner-img' src={BannerImg} alt='NoImg' />
        </div>
      </div>
    </div>
  )
}

export default Banner
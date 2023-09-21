import React from 'react'
import './Banner.scss'
import BannerImg from '../../../assets/banner-img.png'

const Banner = () => {
  return (
    <div className='hero-banner' >
      <div className='content' >
        <div className='text-content'>
        <h1>SALES</h1>
        <p>
          here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour. 
        </p>
        <div className='ctas'>
          <div className='banner-cta'>Read More</div>
          <div className='banner-cta v2'>Shop Now</div>
        </div>
        </div>
        <img className='banner-img' src={BannerImg} alt='NoImg' />
      </div>
    </div>
  )
}

export default Banner
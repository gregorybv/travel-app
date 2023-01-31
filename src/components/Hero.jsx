import React from 'react';
import pexels from '../assets/pexels.jpg'

const Hero = () => {
  return (
    <div className='w-full h-screen'>
      <img className='top-0 left-0 w-full h-screen object-cover' src={pexels} alt="/"/>
      <div className='bg-black/30 absolute top-0 left-0 w-full h-screen' />
      <div>

      </div>
    </div>
  )
}

export default Hero




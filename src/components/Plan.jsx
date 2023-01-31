import React from 'react';
import photo1 from '../assets/photo1.png'
import photo2 from '../assets/photo2.png'
import photo3 from '../assets/photo3.png'
import photo4 from '../assets/photo4.png'
import photo5 from '../assets/photo5.jpg'

const Plan = () => {
  return (
    <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
      <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
        <img className='row-span-3 object-cover w-full h-full p-2 ' src={photo1} alt="photo1"/>
        <img className='row-span-2 object-cover w-full h-full p-2 ' src={photo2} alt="photo2"/>
        <img className='row-span-2 object-cover w-full h-full p-2 ' src={photo3} alt="photo3"/>
        <img className='row-span-3 object-cover w-full h-full p-2 ' src={photo4} alt="photo4"/>
        <img className='row-span-2 object-cover w-full h-full p-2 ' src={photo5} alt="photo5"/>
      </div>
      <div className='flex flex-col h-full justify-center'>
        <h3 className='text-5xl md:text-6xl font-bold'>Plan Your Trip</h3>
        <p className='text-2xl py-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, iste.</p>
        <p className='pb-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aspernatur cumque dolore illum quaerat quisquam rem voluptas! Amet atque, corporis dicta doloribus earum eligendi eveniet, iure nesciunt officia quasi voluptate.</p>
      </div>
      <div>
        <button className='border-black mr-4 hover:shadow-xl'>Learn More</button>
        <button className='bg-black text-white border-black hover:shadow-xl'>Book Your Trip</button>
      </div>
    </div>
  )
}

export default Plan




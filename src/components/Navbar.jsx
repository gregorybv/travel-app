import React, {useState} from 'react';
import {HiMenuAlt3} from "react-icons/all";

const Navbar = () => {
  const [nav, setNav] = useState()

  return (
    <div className='absolute w-full flex justify-between p-4 items-center'>
      <h1 className='text-white font-bold text-2xl z-20'>Experiences</h1>
      <HiMenuAlt3 className='z-20 text-white cursor-pointer' size={25}/>
      <div className='fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex-col z-10'>
        <ul className='flex flex-col fixed w-full h-full items-center justify-center'>
          <li className='font-bold text-3xl p-8'>Home</li>
          <li className='font-bold text-3xl p-8'>Destinations</li>
          <li className='font-bold text-3xl p-8'>Reservations</li>
          <li className='font-bold text-3xl p-8'>Amenities</li>
          <li className='font-bold text-3xl p-8'>Rooms</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar




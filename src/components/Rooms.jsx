import React from 'react';
import rooms1 from '../assets/rooms1.png'
import rooms2 from '../assets/rooms2.png'
import rooms3 from '../assets/rooms3.png'

const Rooms = () => {
  return (
    <div>
      <div>
        <h3>Fine Interior Rooms</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur impedit libero non, saepe veniam
          voluptatem?
        </p>
      </div>

      <div>
        <img src={rooms1} alt="/"/>
        <img src={rooms2} alt="/"/>
        <img src={rooms3} alt="/"/>
      </div>
    </div>
  )
}

export default Rooms




import React from 'react';

const ImageSlider = () => {

  const slides = [
    {
      url: "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      title: 'Lobster',
    },
    {
      url: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80",
      title: 'Sushi',
    },
    {
      url: "https://images.unsplash.com/photo-1611270629569-8b357cb88da9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      title: 'Pasta',
    },
    {
      url: "https://images.unsplash.com/photo-1627308594171-ebd99b564ff6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
      title: 'Salmon',
    },
  ]
  return (
    <div className='max-w-[1400px] h-[580px] w-full m-auto py-16 px-4 relative'>
      <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500' style={{backgroundImage: `url(${slides[0].url})`}}></div>
    </div>
  )
}

export default ImageSlider




import React from 'react'
import imageOne from '../Images/Hawk.jpg';
import imageTwo from '../Images/Hawk1.jpg';

const Content = () => {
  return (
    <>
      <div className=''>
        <img src={imageOne} alt="Hawk" className="h-full rounded mb-40
          shadow"/>
        <div className="flex flex-col justify-center
          items-center">
          <h2 className="text-4x1 mb-2">Counter</h2>
          <p className="mb-5 ">Life hack!</p>
          <span>$10</span>


        </div>

      </div>




      <div className=''>
        <img src={imageTwo} alt="Hawk" className="h-full rounded mb-40
  shadow"/>
        <div className="flex flex-col justify-center
  items-center">
          <h2 className="text-2x1 mb-2">Counter</h2>
          <p className="mb-8 ">Life hack!</p>
          <span>$10</span>



        </div>

      </div>
    </>
  )

}

export default Content

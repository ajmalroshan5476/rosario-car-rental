import React, { useState } from 'react'
import Title from '../Components/Title'
import { assets, dummyCarData } from '../assets/assets'
import CarCard from '../Components/CarCard'
import Footer from '../Components/Footer'
const Cars = () => {
  const [input, setInput] = useState('')

  return (
    <div>
      <div className='flex flex-col items-center py-20 bg-light max-md:px-4'>
        <Title title='Available Cars' subTitle='Browse our selection of premium vehicles available for your next adventure' />
      </div>

      <div className='px-6 md:px-16 lg:px-24 xl:px-32'>
        <div className='flex items-center bg-white px-4 mt-6 w-full h-12 rounded-full shadow'>
          <img src={assets.search_icon} alt='' className='w-5 h-5 mr-2' />
          <input
            onChange={(e) => setInput(e.target.value)}
            type='text'
            placeholder='Search by make, model or features'
            className='w-full h-full outline-none text-gray-500 text-sm'
          />
          <img src={assets.filter_icon} alt='' className='w-5 h-5 ml-2 cursor-pointer' />
        </div>

        <p className='text-gray-500 mt-6'>
          Showing {dummyCarData.length} cars
        </p>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
          {dummyCarData.map((car, index) => (
            <CarCard key={index} car={car} />
          ))}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Cars


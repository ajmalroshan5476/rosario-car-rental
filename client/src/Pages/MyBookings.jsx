import React, { useEffect, useState } from 'react'
import { assets, dummyMyBookingsData } from '../assets/assets'
import Title from '../Components/Title'

const MyBookings = () => {
  const [bookings, setBookings] = useState([])
  const currency = import.meta.env.VITE_CURRENCY

  const fetchMyBookings = async () => {
    setBookings(dummyMyBookingsData)
  }

  useEffect(() => {
    fetchMyBookings()
  }, []) // Run only once on mount

  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32 2xl:px-48 mt-16 text-sm max-w-7xl'>
      <Title
        title='My Bookings'
        subTitle='View and manage your all car bookings'
        align='left'
      />
      <div>
        {bookings.map((booking, index) => (
          <div key={booking._id} className='p-6 border border-borderColor rounded-lg mt-5'>
            <div className='md:flex justify-between gap-6'>

              {/* Left Column: Car image and basic details */}
              <div className='md:w-1/4'>
                <div className='rounded-md overflow-hidden mb-3'>
                  <img
                    src={booking.car.image}
                    alt=''
                    className='w-full h-auto aspect-video object-cover'
                  />
                </div>
                <p className='text-lg font-medium mt-2'>
                  {booking.car.brand} {booking.car.model}
                </p>
                <p className='text-gray-500'>
                  {booking.car.year} • {booking.car.category} • {booking.car.location}
                </p>
              </div>

              {/* Middle Column: Booking info */}
              <div className='md:w-2/4 mt-4 md:mt-0'>
                <div className='flex items-center gap-2'>
                  <p className='px-3 py-1.5 bg-gray-100 text-gray-700 rounded'>
                    Booking #{index + 1}
                  </p>
                  <p
                    className={`px-3 py-1 text-xs rounded-full ${
                      booking.status === 'confirmed'
                        ? 'bg-green-400/15 text-green-600'
                        : 'bg-red-400/15 text-red-600'
                    }`}
                  >
                    {booking.status}
                  </p>
                </div>

                <div className='flex items-start gap-2 mt-3'>
                  <img src={assets.calendar_icon_colored} alt='' className='w-4 h-4 mt-1' />
                  <div>
                    <p className='text-gray-500'>Rental Period</p>
                    <p>
                      {booking.pickupDate.split('T')[0]} To {booking.returnDate.split('T')[0]}
                    </p>
                  </div>
                </div>

                <div className='flex items-start gap-2 mt-3'>
                  <img src={assets.calendar_icon_colored} alt='' className='w-4 h-4 mt-1' />
                  <div>
                    <p className='text-gray-500'>Pickup Location</p>
                    <p>{booking.car.location}</p>
                  </div>
                </div>
              </div>

              {/* Right Column: Price and date */}
              <div className='md:w-1/4 flex flex-col items-end text-right mt-4 md:mt-0'>
                <p className='text-sm text-gray-500'>Total Price</p>
                <h1 className='text-2xl font-semibold text-primary'>
                  {currency}
                  {booking.price}
                </h1>
                <p className='text-sm text-gray-500 mt-2'>
                  Booked on {booking.createdAt.split('T')[0]}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyBookings



import React, { useEffect, useState } from 'react'
import { dummyMyBookingsData } from '../../assets/assets'
import { assets } from '../../assets/assets'
import Title from '../../Components/Owner/Title'

const ManagerBookings = () => {
  const [bookings, setBookings] = useState([])
  const currency = import.meta.env.VITE_CURRENCY || '₹' // fallback to ₹ if not set

  const fetchOwnerBookings = async () => {
    setBookings(dummyMyBookingsData)
  }

  useEffect(() => {
    fetchOwnerBookings()
  }, [])

  return (
    <div className='px-4 pt-10 md:px-10 w-full'>
      <Title
        title='Manage Bookings'
        subTitle='Track all customer bookings, approve or cancel requests, and manage booking statuses'
      />

      <div className='max-w-3xl w-full rounded-md overflow-hidden border border-borderColor mt-6'>
        <table className='w-full border-collapse text-left text-sm text-gray-600'>
          <thead className='bg-gray-50 text-gray-500'>
            <tr>
              <th className='p-3 font-medium'>Car</th>
              <th className='p-3 font-medium max-md:hidden'>Date Range</th>
              <th className='p-3 font-medium'>Total</th>
              <th className='p-3 font-medium max-md:hidden'>Payment</th>
              <th className='p-3 font-medium'>Actions</th>
            </tr>
          </thead>

          <tbody>
            {bookings.length === 0 ? (
              <tr>
                <td colSpan='5' className='p-4 text-center text-gray-400'>
                  No bookings available
                </td>
              </tr>
            ) : (
              bookings.map((booking, index) => (
                <tr key={index} className='border-t border-borderColor text-gray-600'>
                  <td className='p-3 flex items-center gap-3'>
                    <img
                      src={booking.car?.image || assets.carIconColored}
                      alt='car'
                      className='w-12 h-12 aspect-square rounded-md object-cover'
                    />
                    <p className='font-medium max-md:hidden'>
                      {booking.car?.brand || 'Unknown'} {booking.car?.model || ''}
                    </p>
                  </td>

                  <td className='p-3 max-md:hidden'>
                    {booking.dateRange?.start || 'N/A'} to {booking.dateRange?.end || 'N/A'}
                  </td>

                  <td className='p-3'>
                    {currency}
                    {booking.total || 0}
                  </td>

                  <td className='p-3 max-md:hidden'>
                    <span
                      className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                        booking.paymentStatus === 'Paid'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-yellow-100 text-yellow-700'
                      }`}
                    >
                      {booking.paymentStatus || 'Pending'}
                    </span>
                  </td>

                  <td className='p-3'>
                    <button className='text-blue-500 hover:underline'>View</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ManagerBookings


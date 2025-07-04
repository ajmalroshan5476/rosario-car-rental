import React, { useEffect, useState } from 'react'
import Title from '../../Components/Owner/Title'
import { dummyMyBookingsData } from '../../assets/assets'

const ManagerBookings = () => {
  const currency = import.meta.env.VITE_CURRENCY
  const [bookings, setBookings] = useState([])

  // Simulated fetch function
  const fetchOwnerBookings = async () => {
    setBookings(dummyMyBookingsData)
  }

  useEffect(() => {
    fetchOwnerBookings()
  }, [])

  // Handle status dropdown change
  const handleStatusChange = (index, newStatus) => {
    const updatedBookings = [...bookings]
    updatedBookings[index].status = newStatus
    setBookings(updatedBookings)
  }

  return (
    <div className='px-4 pt-10 md:px-10 w-full'>
      <Title
        title='Manage Bookings'
        subTitle='Track all customer bookings, approve or cancel requests, and manage booking statuses.'
      />

      <div className='max-w-3xl w-full rounded-md overflow-hidden border border-borderColor mt-6'>
        <table className='w-full border-collapse text-left text-sm text-gray-600'>
          <thead className='text-gray-500'>
            <tr>
              <th className='p-3 font-medium'>Car</th>
              <th className='p-3 font-medium max-md:hidden'>Date Range</th>
              <th className='p-3 font-medium'>Total</th>
              <th className='p-3 font-medium max-md:hidden'>Payment</th>
              <th className='p-3 font-medium'>Actions</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((booking, index) => (
              <tr key={index} className='border-t border-borderColor text-gray-500'>
                <td className='p-3 flex items-center gap-3'>
                  <img
                    src={booking.car.image}
                    alt=''
                    className='h-12 w-12 aspect-square rounded-md object-cover'
                  />
                  <p>{booking.car.brand} {booking.car.model}</p>
                </td>

                <td className='p-3 max-md:hidden'>
                  {booking.pickUpDate ? booking.pickUpDate.split('T')[0] : 'N/A'} to{' '}
                  {booking.returnDate ? booking.returnDate.split('T')[0] : 'N/A'}
                </td>

                <td className='p-3'>
                  {currency} {booking.price}
                </td>

                <td className='p-3 max-md:hidden'>
                  <span className='bg-gray-300 px-3 py-1 rounded-full text-xs'>
                    {booking.paymentStatus || 'Offline'}
                  </span>
                </td>

                <td className='p-3'>
                  {booking.status === 'pending' ? (
                    <select
                      value={booking.status}
                      onChange={(e) => handleStatusChange(index, e.target.value)}
                      className='px-2 py-1.5 mt-1 text-gray-500 border border-borderColor rounded-md outline-none'
                    >
                      <option value='pending'>Pending</option>
                      <option value='cancelled'>Cancelled</option>
                      <option value='confirmed'>Confirmed</option>
                    </select>
                  ) : (
                    <span
                      className={`${
                        booking.status === 'confirmed'
                          ? 'bg-green-100 text-green-600'
                          : 'bg-red-100 text-red-600'
                      } px-3 py-1 rounded-full text-xs capitalize`}
                    >
                      {booking.status}
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ManagerBookings




import React, { useEffect, useState } from 'react'
import { dummyDashboardData } from '../../assets/assets'
import { assets } from '../../assets/assets'
import Title from '../../Components/Owner/Title'

const Dashboard = () => {
  const currency = import.meta.env.VITE_CURRENCY

  const [data, setData] = useState({
    totalCars: 0,
    totalBookings: 0,
    pendingBookings: 0,
    completedBookings: 0,
    recentBookings: [],
    monthlyRevenue: 0,
  })

  const dashboardCards = [
    { title: 'Total Cars', value: data.totalCars, icon: assets.carIconColored },
    { title: 'Total Bookings', value: data.totalBookings, icon: assets.listIconColored },
    { title: 'Pending', value: data.pendingBookings, icon: assets.cautionIconColored },
    { title: 'Confirmed', value: data.completedBookings, icon: assets.listIconColored },
  ]

  useEffect(() => {
    setData(dummyDashboardData)
  }, [])

  return (
    <div className='px-4 pt-10 md:px-10 flex-1'>
      <Title
        title='Admin Dashboard'
        subTitle='Monitor overall platform performance including total cars, bookings, revenue, and recent activities'
      />

      {/* Dashboard Cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10'>
        {dashboardCards.map((card, index) => (
          <div key={index} className='p-4 border rounded-lg shadow-sm flex items-center gap-4'>
            <img src={card.icon} alt={card.title} className='w-8 h-8' />
            <div>
              <p className='text-gray-500 text-sm'>{card.title}</p>
              <h2 className='text-xl font-semibold text-primary'>{card.value}</h2>
            </div>
          </div>
        ))}
      </div>

      <div className='flex flex-wrap items-start gap-6 mb-8 w-full'>
        {/* Recent Bookings */}
        <div className='p-4 md:p-6 border border-borderColor rounded-md max-w-lg w-full'>
          <h1 className='text-lg font-medium'>Recent Bookings</h1>
          <p className='text-gray-500'>Latest customer bookings</p>

          {Array.isArray(data.recentBookings) && data.recentBookings.length > 0 ? (
            data.recentBookings.map((booking, index) => (
              <div key={index} className='mt-4 flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                  <div className='hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-primary/10'>
                    <img src={assets.listIconColored} alt='' className='h-5 w-5' />
                  </div>
                  <div>
                    <p>
                      {booking.car?.brand || 'Unknown'} {booking.car?.model || ''}
                    </p>
                    <p className='text-sm text-gray-500'>
                      {booking.createdat
                        ? new Date(booking.createdat).toLocaleDateString()
                        : 'Unknown date'}
                    </p>
                  </div>
                </div>

                <div className='flex items-center gap-2 font-medium'>
                  <p className='text-sm text-gray-500'>
                    {currency}
                    {booking.price || 0}
                  </p>
                  <p
                    className={`px-3 py-0.5 border border-borderColor rounded-full text-sm ${
                      booking.status === 'confirmed'
                        ? 'bg-green-100 text-green-700'
                        : booking.status === 'pending'
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {booking.status || 'N/A'}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className='mt-4 text-gray-400'>No recent bookings available.</p>
          )}
        </div>

        {/* Monthly Revenue */}
        <div className='p-4 md:p-6 mb-6 border border-borderColor rounded-md w-full md:max-w-xs'>
          <h1 className='text-lg font-medium'>Monthly Revenue</h1>
          <p className='text-gray-500'>Revenue for current month</p>
          <p className='text-3xl mt-6 font-semibold text-primary'>
            {currency} {data.monthlyRevenue || 0}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard



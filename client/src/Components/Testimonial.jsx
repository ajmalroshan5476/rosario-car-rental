import React from 'react'

const Testimonial = () => {
  return (
    <div className="flex flex-wrap items-center justify-center px-4 py-2 mt-25 rounded-full bg-white border border-gray-300 text-sm shadow-md max-w-fit mx-auto">
      <div className="flex items-center -space-x-3">
        <img
          className="w-10 h-10 rounded-full border-2 border-white"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=100"
          alt="User 1"
        />
        <img
          className="w-10 h-10 rounded-full border-2 border-white"
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100"
          alt="User 2"
        />
        <img
          className="w-10 h-10 rounded-full border-2 border-white"
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100"
          alt="User 3"
        />
      </div>
      <p className="ml-4 text-base font-medium text-gray-600">
        Trusted by <span className="text-primary font-semibold">10,000+</span> people
      </p>
    </div>
  )
}

export default Testimonial




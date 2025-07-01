import React, { useState } from 'react'
import { assets, dummyCarData, ownerMenuLinks } from '../../assets/assets'
import { NavLink, useLocation } from 'react-router-dom'

const Sidebar = () => {
  const user = dummyCarData
  const location = useLocation()
  const [image, setImage] = useState('')

  const updateImage = async () => {
    user.image = URL.createObjectURL(image)
    setImage('')
  }

  return (
    <div className='relative min-h-screen flex flex-col items-center pt-8 w-full max-w-[240px] border-r border-borderColor text-sm bg-white'>
      <div className='group relative'>
        <label htmlFor='image'>
          <img
            src={
              image
                ? URL.createObjectURL(image)
                : user?.image || 'assets.ajmal'
            }
            alt='Profile'
            className='w-20 h-20 rounded-full object-cover border border-gray-300'
          />
          <input
            type='file'
            id='image'
            accept='image/*'
            hidden
            onChange={(e) => setImage(e.target.files[0])}
          />
          <div className='absolute hidden top-0 right-0 left-0 bottom-0 bg-black/10 rounded-full group-hover:flex items-center justify-center cursor-pointer'>
            <img src={assets.edit_icon} alt='Edit' />
          </div>
        </label>
      </div>

      {image && (
        <button
          className='absolute top-0 right-0 flex gap-1 p-2 bg-primary/10 text-primary cursor-pointer items-center'
          onClick={updateImage}
        >
          Save <img src={assets.check_icon} width={13} alt='Confirm' />
        </button>
      )}

      <p className='mt-2 text-base max-md:hidden'>{user?.name}</p>

      <div className='w-full'>
        {ownerMenuLinks.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            className={`relative flex items-center gap-2 w-full py-3 pl-4 first:mt-6 ${
              link.path === location.pathname ? 'bg-primary/10 text-primary' : 'text-gray-600'
            }`}
          >
            <img
              src={link.path === location.pathname ? link.coloredIcon : link.icon}
              alt={`${link.name} icon`}
              className='w-5 h-5'
            />
            <span className='max-md:hidden'>{link.name}</span>
            {link.path === location.pathname && (
              <div className='bg-primary w-1.5 h-8 rounded-l right-0 absolute'></div>
            )}
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default Sidebar



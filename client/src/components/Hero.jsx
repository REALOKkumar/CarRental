import React, { useState } from 'react'
import { assets, cityList } from '../assets/assets'

const Hero = () => {

  const [pickupLocation, setPickupLocation ]=useState('')
  return (
    
    <div className='flex h-screen flex-col items-center justify-center gap-14 bg-light text-center px-4'>

        <h1 className='text-4xl md:text-5xl font-semibold'>Luxury cars on Rent</h1>

        
        <form className='flex flex-col md:flex-row items-center justify-between p-4 md:p-3 rounded-3xl md:rounded-full w-full max-w-sm md:max-w-5xl bg-white shadow-[0px_8px_20px_rgba(0,0,0,0.1)]'>

            <div className='flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 w-full md:px-6'>

              
              <div className='flex flex-col items-start gap-1'>
                <select required value={pickupLocation} onChange={(e)=>setPickupLocation(e.target.value)}>
                  <option value="">Pickup Location</option>
                  {cityList.map((city)=> <option key={city} value={city}>{city}</option>)}
                </select>
                <p className='px-1 text-sm text-gray-400'>{pickupLocation ? pickupLocation : 'Please Select Location'}</p>
              </div>

              
              <div className='flex flex-col items-start gap-1'>
                <label htmlFor='pickup-date' className='text-sm font-medium'>Pick-Up Date</label>
                <input type="date" id="pickup-date" min={new Date().toISOString().split('T')[0]} className='text-sm text-gray-500' required/>
              </div>
              
              
              <div className='flex flex-col items-start gap-1'>
                <label htmlFor='return-date' className='text-sm font-medium'>Return Date</label>
                <input type="date" id="return-date" className='text-sm text-gray-500' required/>
              </div>

              

              <button className='flex items-center justify-center gap-2 px-9 py-3 max-sm:mt-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full cursor-pointer whitespace-nowrap'>
                <img src={assets.search_icon} alt="search" className='brightness-300 w-4'/>
                Search
              </button>
            </div>
            
          </form>

                             
        <img src={assets.main_car} alt="car" className='max-h-74'/>
      
    </div>
  )
}

export default Hero
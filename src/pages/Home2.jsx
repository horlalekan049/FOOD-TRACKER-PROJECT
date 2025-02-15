import React from 'react'
import HouseImage from '../assets/icons/leaf-logo.png';
import { Link } from "react-router-dom";

const Home2 = () => {
    return (
        <div className='h-screen w-screen bg-background flex p-5'>
        <div className='w-1/2'>
        <div className='flex items-center gap-3 p-5'>
            <img src={HouseImage} alt='leaf logo' className='w-5 h-4' />  
            <h1 className='text-2xl font-bold'>FRESH TRACK</h1>
            </div>
        <div className='flex justify-center w-full flex-col mt-20 px-8'>
            <h2 className='text-4xl font-bold '>
                Never  waste food again <br /> with smart expiry <br /> tracking
            </h2>
            <p className='tracking-tighter pt-4 font-medium leading-5'>Track your groceries, get timely notifications, and reduce food waste with our intelligent exoir date management system</p>
            <div className='w-full flex justify-center gap-4 mt-4 pr-20'>
            <Link to="/Login">
                        <button className='rounded-md bg-secondary px-4 py-2 text-xs font-bold hover:bg-red-600 text-white'>Login</button>
                  </Link>
                  <Link to="/Register">
                        <button className='rounded-md bg-secondary p-4 py-2 text-xs font-bold hover:bg-red-600 text-white'>Sign Up</button>
                  </Link>
            </div>
        </div>
        </div>
        <div className='w-1/2 bg-[url("https://images.pexels.com/photos/541216/pexels-photo-541216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")] flex justify-center items-center bg-no-repeat bg-center bg-cover'></div>

        </div>
      )
}

export default Home2
import React from 'react'
import { paymentLogo } from './assests'
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaYoutube,
    FaHome,
    

} from 'react-icons/fa'

import {ImGithub} from 'react-icons/im'
import { BsPersonFill,BsPaypal} from "react-icons/bs";
import {MdLocationOn} from 'react-icons/md'

const footer = () => {
  return (
    <div className='bg-black text-[#949494] py-20 font-titleFont'>
      <div className='max-w-screen-xl mx-auto grid grid-cols-4'>
        <div className='flex flex-col gap-7'>
        <h1 className="font-bold text-3xl text-white font-cursive">
        Shop Now
          </h1>
          <p className='text-white text-sm tracking-wide'>@ ReactBD.com</p>
          <img className="w-56"src={paymentLogo} alt="" />
        <div className='flex gap-5 text-lg text-grey-400'>
        <ImGithub className='hover:text-white duration-3000 cursor-pointer'></ImGithub>
        <FaFacebookF className='hover:text-white duration-3000 cursor-pointer'></FaFacebookF>
        <FaInstagram className='hover:text-white duration-3000 cursor-pointer'></FaInstagram>

        <FaTwitter className='hover:text-white duration-3000 cursor-pointer'></FaTwitter>
        <FaYoutube className='hover:text-white duration-3000 cursor-pointer'></FaYoutube>
        <FaHome className='hover:text-white duration-3000 cursor-pointer'></FaHome>
            
        </div>
        </div>
        <div>

      <div className='text-base flex flex-col gap-2'>
      <h2 className='text-2xl font-semibold text-white mb-4'> Locate Us</h2>
        <p>Delhi, India</p>
        <p>Mobile: 93xxxxxx</p>
        <p>Phone: 92xxxxxx</p>
        <p>e-mail:arpit341@gmail.com</p>

      </div>
        </div>
        <div className='flex flex-col gap-2 text-base'>
        <h2 className='text-2xl font-semibold text-white mb-4'> Profile</h2>
        <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'><span className='text-lg'><BsPersonFill/></span>my account</p>
        <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'><span className='text-lg'><BsPaypal/></span>checkout</p>
        <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'><span className='text-lg'><FaHome/></span>Order tracking</p>
        <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'><span className='text-lg'><MdLocationOn/></span>help & support</p>


        </div>
        <div className='flex flex-col justify-center'>
            <input className='bg-transparent border px-4 py-2 text-sm' type="text"  placeholder='e-email' />
            <button className='"text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black"'>Subscribe</button>
        </div>
      </div>
    </div>

  )
}

export default footer

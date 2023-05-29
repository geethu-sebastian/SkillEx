//import React from 'react'

import { ConnectWallet } from "@thirdweb-dev/react"
import Link from "next/link"

//import logo from '../assets/logo.png'
const Header = () => {
  return (
    //
    <div className='w-4/5 flex justify between md:justify-center items-center py-4 mx-auto bg-[] ;'>
    
      <div className='md:flex-[0.5] flex-initial justify-center items-center'>
        <h3 className='text-white text-6xl font-semibold'>SkillEx</h3>
      </div>
     
      <ul className=' md:flex-[0.5]  text-white md:flex hidden list-none justify-between items-center'>
      
      <li className='mx-8 cursor-pointer'>Explore</li>
        <li className='mx-8 cursor-pointer'><Link href="/pages/marketplace">Marketplace</Link></li>
        <li className='mx-8 cursor-pointer'>How it works</li>
        <li className=" justify-between items-center" >
        <ConnectWallet/>
        </li>
    
     
        </ul>
     
   
     
    </div>
  )
}

export default Header
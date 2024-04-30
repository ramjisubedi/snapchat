import React from 'react'
import SnapLogo from '@/public/logo.png'
import Image from "next/image";
const Navbar = () => {
  return (
    <div className='flex items-center justify-between w-screen px-10 py-4'>
        <div>
            <Image alt="logo" src={SnapLogo} width={50} height={50} />
            
        </div>
        <div></div>
        <div></div>
    </div>
  )
}

export default Navbar
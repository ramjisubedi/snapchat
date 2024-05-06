import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import SnapLogo from '@/public/logo.png'
import { FaLaptop } from 'react-icons/fa'

const Header = () => {
  return (
    <div className='flex justify-between items-center max-w-6xl mx-auto'>
        <div >
            <h1 className='text-7xl font-medium'>Snapchat is <br/> now on the <br/> web! </h1>
            <h1 className='my-5 text-xl'>Chat, Snap, and video call your friends from <br/> wherever you are.</h1>
            <Button className='gap-2 rounded-full'><FaLaptop /> Login to chat</Button>
        </div>
        <div>
            <Image src={SnapLogo} alt="myai" width={650} height={650} />
        </div>
    </div>
  )
}

export default Header
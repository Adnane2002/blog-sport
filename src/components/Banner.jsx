import Image from 'next/image'
import React from 'react'
import banner from '../../public/Images/banner.png'

export default function Banner() {
  return (
    <div > 
        <Image className='container-banner' src={banner} alt='banner'/>
    </div>
  )
}

import Image from 'next/image'
import React from 'react'
import banner from '.././../Images/banner1.jpg'

export default function Banner() {
  return (
    <div className='container-fluide'>
      <div className='row'>
        <div className='col-md-12'>
        <Image src={banner} alt='banner'/>
        </div>
      </div>
    </div>
  )
}

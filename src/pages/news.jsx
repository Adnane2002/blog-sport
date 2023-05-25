import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Footer from './components/Footer'

export default function News() {
  return (
    <div>
        <main>
         <Navbar/>
         <Banner/>
         <Footer/>
      </main>
      <h1>News</h1>
    </div>
  )
}

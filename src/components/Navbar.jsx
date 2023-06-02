import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../../Images/logo.png'
import styles from "../../styles/Navbar.module.css"

export default function Navbar() {
  return (
   <div className={styles.Navbar}>
   <nav className="navbar navbar-expand-lg bg-body-tertiary py-3 shadow">
<div className="container">
<Image src={logo} height={70} width={200} alt='logo'/>
 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
   <span className="navbar-toggler-icon"></span>
 </button>
 <div className="collapse navbar-collapse d-flex justify-content-around aligne-items-center" id="navbarNav">
   <ul className="navbar-nav fs-5 ">
     <li className="nav-item">
       <Link className="nav-link px-4" aria-current="page" href="/">Home</Link>
     </li>
     <li className="nav-item">
       <Link className="nav-link px-4" href="/news">Latest news</Link>
     </li>
     <li className="nav-item">
       <Link className="nav-link px-4" href="/about">About</Link>
     </li>
   </ul>
 </div>
 <div className="btn btn-dark ">Sign in</div>
</div>
</nav>
 </div>
  )
}

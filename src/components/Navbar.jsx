import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../../public/Images/logo.png'
import styles from "../styles/Header.module.css"


export default function Navbar() {
  return (
    <header className={styles.header}>
    <div className={styles.logo}>
      <Link className='link' href="/">
      <Image src={logo} height={70} width={200} alt='logo'/>
      </Link>
    </div>
    <nav>
      <ul>
        <li>
          <Link className='link' href="/news">
            News
          </Link>
        </li>
        <li>
          <Link className='link' href="/about">
            About
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);
}
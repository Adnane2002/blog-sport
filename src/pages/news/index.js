import Banner from '@/components/Banner'
import Navbar from '@/components/Navbar'
import NewsItem from '@/components/Newsitem'
import Link from 'next/link'
import React from 'react'
import styles from "../../styles/News.module.css"
import { API_URL } from "@/config/index";


export default function News({ news }) {
  return (
    <div>
      <main>
        <Navbar />
        <Banner />
      </main>
      <h1 className='title'>News</h1>
      {news && news.length === 0 && <h3>No News</h3>}
      {news && news.map((item) => (
        <NewsItem key={item.id} news={item} />
      ))}
      <Link className="btn-view" href="/">
        Go Back
      </Link>
    </div>
  );
}
export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/api/news`);
  const news = await res.json();
  
  return {
  props: { news },
  };
}



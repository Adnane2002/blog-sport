import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { API_URL } from "@/config/index";
import styles from "../../styles/News.module.css"

export default function SingleNews({ news }) {
  const router = useRouter();
  console.log("router===>", router);

  // Add a conditional check to handle the case when 'news' is undefined
  if (!news) {
    return <div>Loading...</div>; // You can replace this with an appropriate loading indicator
  }

  return (
    <div className={styles.news}>
      <span>
        {news.date} {news.time}
      </span>

      <h1>{news.name}</h1>
      {news.image && (
        <div className={styles.image}>
          <Image alt="image" src={news.image} width={900} height={600} />
        </div>
      )}
      <p>{news.detail}</p>
      <Link className="btn-view" href="/news">
        Go Back
      </Link>
    </div>
  );
}
export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/api/news`);
  const news = await res.json();
  const paths = news.map((item) => ({
    params: { slug: item.slug },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const res = await fetch(`${API_URL}/api/news/${slug}`);
  const singleNews = await res.json();
  return {
    props: {
      news: singleNews[0],
    },
    revalidate: 1,
  };
}

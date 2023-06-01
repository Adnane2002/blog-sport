import Link from "next/link";
import styles from "../../styles/NewsItem.module.css";
import Image from "next/image";

export default function NewsItem({ news }) {
  return (
    <div className={styles.news}>
      <div className={styles.img}>
        <Image
          src={news.image ? news.image : "No Image"}
          width={150}
          height={100}
          alt="image"
        />
      </div>
      <div className={styles.info}>
        <span>
          {news.date} {news.time}
        </span>
        <h3>{news.name}</h3>
      </div>
      <div className={styles.link}>
        <Link href={`/news/${news.slug}`}>
          <div className="btn">Read More</div>
        </Link>
      </div>
    </div>
  );
}

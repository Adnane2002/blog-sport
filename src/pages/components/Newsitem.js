import Link from "next/link";
import styles from "../../styles/NewsItem.module.css";

export default function NewsItem({ news }) {
  return (
    <div className={styles.news}>
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

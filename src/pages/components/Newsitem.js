import Link from "next/link";
import styles from "../../styles/NewsItem.module.css";

export default function NewsItem({ news }) {
  const { date, time, name, slug } = news;

  return (
    <div className={styles.news}>
      <div className={styles.info}>
        {date && time && (
          <span>
            {date} {time}
          </span>
        )}
        {name && <h3>{name}</h3>}
      </div>
      <div className={styles.link}>
        {slug && (
          <Link href={`/news/${slug}`}>
            <div className="btn">Read More</div>
          </Link>
        )}
      </div>
    </div>
  );
}

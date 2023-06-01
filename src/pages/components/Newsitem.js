import Link from "next/link";
import styles from "../../styles/NewsItem.module.css";

export default function NewsItem({ news }) {
  const { time, name, slug } = news; 

  return (
    <div className={styles.news}>
      <div className={styles.info}>
        <span>
        {time}
        </span>
        <h3>{name}</h3>
      </div>
      <div className={styles.link}>
        <Link href={`/news/${slug}`}>
          <div className="btn">Read More</div>
        </Link>
      </div>
    </div>
  );
}

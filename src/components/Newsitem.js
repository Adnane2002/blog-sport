import Link from "next/link";

import styles from "../styles/NewsItem.module.css";

export default function NewsItem({ news }) {
  const { date, time, name, slug } = news;

  return (
    <div className={styles.news}>
      <div className={styles.info}>
        {date != null && time != null ? (
          <span>
            {date} {time}
          </span>
        ) : (
          <span>No Date or Time</span>
        )}
        {name ? <h3>{name}</h3> : <h3>No Name</h3>}
      </div>
      <div className={styles.link}>
        {slug ? (
          <Link href={`/news/${slug}`}>
            <div className="btn">Read More</div>
          </Link>
        ) : (
          <div className="btn">No Slug</div>
        )}
      </div>
    </div>
  );
}


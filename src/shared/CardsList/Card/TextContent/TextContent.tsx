import React from 'react';
import styles from './textcontent.css';
import { Link } from 'react-router-dom';


interface ICardProps {
  title: string
  author: string
}


export function TextContent({ title, author }: ICardProps) {

   
  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <div className={styles.userLink}>
          <img
            className={styles.avatar}
            src="https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295806139337963.png"
          />
          <a href="#user-url" className={styles.username}>{author}</a>
        </div>
        <span className={styles.createdAt}>
          <span className={styles.publishedLabel}>опубликовано</span>
          4 Часа назад
        </span>
      </div>
      <h2 className={styles.title}>
        <Link to="/posts/123" className={styles.postLink}>
          {title}
        </Link>
      </h2>
    </div>
  );
}

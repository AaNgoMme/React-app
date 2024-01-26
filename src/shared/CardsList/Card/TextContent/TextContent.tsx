import React from 'react';
import styles from './textcontent.css';
import { Post } from '../../Post';

export function TextContent() {

  const [isModalOpend, setIsModalOpend] = React.useState(false)
   
  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <div className={styles.userLink}>
          <img
            className={styles.avatar}
            src="https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295806139337963.png"
          />
          <a href="#user-url" className={styles.username}>Иван Иванов</a>
        </div>
        <span className={styles.createdAt}>
          <span className={styles.publishedLabel}>опубликовано</span>
          4 Часа назад
        </span>
      </div>
      <h2 className={styles.title}>
        <a href="#post-url" className={styles.postLink} onClick={(e) => {
          e.stopPropagation()
          setIsModalOpend(true)}
          }>
          Очень большое дерово на фоне лема и которое обнимает какой-то тип и
        </a>
      </h2>
      
      {isModalOpend && (
        <Post onClose={() => {
          setIsModalOpend(false)
        }} />
      )}
    </div>
  );
}

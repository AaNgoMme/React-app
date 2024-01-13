import React from 'react';
import styles from './card.css';

export function Card() {
  return (
    <li className={styles.card}>
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
            <a href="#post-url" className={styles.postLink}>
              Очень большое дерово на фоне лема и которое обнимает какой-то тип и 
            </a>
          </h2>
        </div>

        <div className={styles.preview}>
          <img
          className={styles.previewImg}
          src="https://cdn.botanichka.ru/wp-content/uploads/2021/01/rasteniya-lekarstva-dikie-derevya-01.jpg"
          />
        </div>



      <div className={styles.menu}>
        <button className={styles.menuButton}>
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12Z" fill="#c4c4c4"></path>
           <path d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" fill="#c4c4c4"></path>
            <path d="M21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12Z" fill="#c4c4c4"></path></svg>
        </button>
      </div>

      <div className={styles.controls}>
        <div className={styles.karmaCounter}>
          <button className={styles.up}>
            <svg width='19' height='10' viewBox='0 0 19 10' fill="none">
              <path d="M9.5 0L0 10H19L9.5 0Z" fill="#C4C4C4" />
            </svg>
          </button>
          <span className={styles.karmaValue}>123</span>
          <button className={styles.down}>
            <svg width='19' height='10' viewBox='0 0 19 10' fill="none">
              <path d="M9.5 0L0 10H19L9.5 0Z" fill="#C4C4C4" />
            </svg>
          </button>
        </div>

        <button className={styles.commentsButton}>
          <svg fill="#c4c4c4" width="15px" height="15px" viewBox="-0.5 0.5 42 42" stroke="#c4c4c4">
            <path d="M29.5,30.5h7c2.529,0,3-0.529,3-3v-21c0-2.41-0.59-3-3-3h-32c-2.47,0-3,0.53-3,3v20.971c0,2.469,0.41,3.029,3,3.029h13 c0,0,9.562,8.756,10.75,9.812c0.422,0.375,1.281,0.172,1.25-0.812V30.5z M7.5,21.5h21v3h-21V21.5z M7.5,15.5h13v3h-13V15.5z M7.5,9.5h26v3h-26V9.5z"></path>
          </svg>
          <span className={styles.commentsNumber}>12</span>
        </button>

        <div className={styles.actions}>
          <button className={styles.shareButton}>
          </button>
          <svg viewBox="-2.4 -2.4 28.80 28.80" fill="none" width={20} height={20}>
            <rect x="-2.4" y="-2.4" width="28.80" height="28.80" rx="14.4" fill="#c4c4c4"></rect>
            <path d="M13.803 5.33333C13.803 3.49238 15.3022 2 17.1515 2C19.0008 2 20.5 3.49238 20.5 5.33333C20.5 7.17428 19.0008 8.66667 17.1515 8.66667C16.2177 8.66667 15.3738 8.28596 14.7671 7.67347L10.1317 10.8295C10.1745 11.0425 10.197 11.2625 10.197 11.4872C10.197 11.9322 10.109 12.3576 9.94959 12.7464L15.0323 16.0858C15.6092 15.6161 16.3473 15.3333 17.1515 15.3333C19.0008 15.3333 20.5 16.8257 20.5 18.6667C20.5 20.5076 19.0008 22 17.1515 22C15.3022 22 13.803 20.5076 13.803 18.6667C13.803 18.1845 13.9062 17.7255 14.0917 17.3111L9.05007 13.9987C8.46196 14.5098 7.6916 14.8205 6.84848 14.8205C4.99917 14.8205 3.5 13.3281 3.5 11.4872C3.5 9.64623 4.99917 8.15385 6.84848 8.15385C7.9119 8.15385 8.85853 8.64725 9.47145 9.41518L13.9639 6.35642C13.8594 6.03359 13.803 5.6896 13.803 5.33333Z" fill="#ffffff"></path> 
          </svg>
          <button className={styles.saveButton}>
            <svg width="20px" height="20px" viewBox="-5.28 -5.28 34.56 34.56" fill="none">
              <rect x="-5.28" y="-5.28" width="34.56" height="34.56" rx="17.28" fill="#c4c4c4"></rect>
              <path d="M21.9998 5.11V16.47C21.9998 17.92 20.9598 18.53 19.6898 17.83L17.7598 16.75C17.5998 16.66 17.4998 16.49 17.4998 16.31V8.99C17.4998 6.45 15.4298 4.38 12.8898 4.38H8.81984C8.44984 4.38 8.18984 3.99 8.35984 3.67C8.87984 2.68 9.91984 2 11.1098 2H18.8898C20.5998 2 21.9998 3.4 21.9998 5.11Z" fill="#ffffff"></path> <path d="M12.89 5.87891H5.11C3.4 5.87891 2 7.27891 2 8.98891V20.3489C2 21.7989 3.04 22.4089 4.31 21.7089L8.24 19.5189C8.66 19.2889 9.34 19.2889 9.76 19.5189L13.69 21.7089C14.96 22.4089 16 21.7989 16 20.3489V8.98891C16 7.27891 14.6 5.87891 12.89 5.87891ZM11 12.7489H9.75V13.9989C9.75 14.4089 9.41 14.7489 9 14.7489C8.59 14.7489 8.25 14.4089 8.25 13.9989V12.7489H7C6.59 12.7489 6.25 12.4089 6.25 11.9989C6.25 11.5889 6.59 11.2489 7 11.2489H8.25V9.99891C8.25 9.58891 8.59 9.24891 9 9.24891C9.41 9.24891 9.75 9.58891 9.75 9.99891V11.2489H11C11.41 11.2489 11.75 11.5889 11.75 11.9989C11.75 12.4089 11.41 12.7489 11 12.7489Z" fill="#ffffff"></path> 
            </svg>
          </button>
        </div>

      </div>
    </li>
  );
}

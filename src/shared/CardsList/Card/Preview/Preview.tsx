import React from 'react';
import styles from './preview.css';

export function Preview() {
  return (
    <div className={styles.preview}>
      <img
        className={styles.previewImg}
        src="https://cdn.botanichka.ru/wp-content/uploads/2021/01/rasteniya-lekarstva-dikie-derevya-01.jpg"
      />
    </div>
  );
}

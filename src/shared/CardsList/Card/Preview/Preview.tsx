import React from 'react';
import styles from './preview.css';

interface ICardProps {
  url: string
}


export function Preview({url}: ICardProps) {
  return (
    <div className={styles.preview}>
      <img
        className={styles.previewImg}
        src={url}
      />
    </div>
  );
}

import React from 'react';
import styles from './preview.css';

interface ICardProps {
  url: string
  is_video: boolean
}


export function Preview({ url, is_video }: ICardProps) {
  return (
    <div className={styles.preview}>

      {!is_video ?
        (
          <img
            className={styles.previewImg}
            src={url}
          />
        ) : (
          <img
            className={styles.previewImg}
            src='https://g.foolcdn.com/image/?url=https%3A//g.foolcdn.com/editorial/images/579162/gettyimages-1145887344.jpg&w=2000&op=resize'
          />
        )
      }

    </div>
  );
}

import React from 'react';
import styles from './card.css';
import { Menu } from './Menu';
import { TextContent } from './TextContent';
import { Preview } from './Preview';
import { Controls } from './Controls';


interface ICardProps {
  title: string
  author: string
  url: string
  is_video: boolean
}

export function Card({ title, author, url, is_video}: ICardProps) {
  return (
    <li className={styles.card}>
        <TextContent title={title} author={author} />
        <Preview url={url} is_video={is_video} />
        <Menu />
        <Controls />
    </li>
  );
}

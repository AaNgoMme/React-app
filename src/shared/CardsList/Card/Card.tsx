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
}

export function Card({ title, author, url}: ICardProps) {
  return (
    <li className={styles.card}>
        <TextContent title={title} author={author} />
        <Preview url={url} />
        <Menu />
        <Controls />
    </li>
  );
}

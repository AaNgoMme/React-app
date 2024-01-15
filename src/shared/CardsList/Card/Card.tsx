import React from 'react';
import styles from './card.css';
import { Menu } from './Menu';
import { TextContent } from './TextContent';
import { Preview } from './Preview';
import { Controls } from './Controls';

export function Card() {
  return (
    <li className={styles.card}>
        <TextContent />
        <Preview />
        <Menu />
        <Controls />
    </li>
  );
}

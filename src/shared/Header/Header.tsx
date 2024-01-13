import React from 'react';
import styles from './header.css';
import { SeachBlock } from './SeachBlock';
import { ThreadTitle } from './ThreadTitle';
import { SortBlock } from './SortBlock';

export function Header() {
  return (
    <header className={styles.header}>
      <SeachBlock />
      <ThreadTitle />
      <SortBlock />
    </header>
  );
}

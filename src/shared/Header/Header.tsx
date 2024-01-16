import React from 'react';
import styles from './header.css';
import { SeachBlock } from './SeachBlock';
import { ThreadTitle } from './ThreadTitle';
import { SortBlock } from './SortBlock';

interface IHeaderProps {
  token: string
}


export function Header({ token }: IHeaderProps) {
  return (
    <header className={styles.header}>
      <SeachBlock token={token} />
      <ThreadTitle />
      <SortBlock />
    </header>
  );
}

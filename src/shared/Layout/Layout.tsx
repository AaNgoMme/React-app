import React from 'react';
import styles from './layout.css';

interface ILayoutPros {
  children?: React.ReactNode
}

export function Layout({children}: ILayoutPros) {
  return (
    <div className={styles.layout}>
      {children}
    </div>
  );
}

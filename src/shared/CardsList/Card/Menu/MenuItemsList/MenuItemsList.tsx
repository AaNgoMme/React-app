import React from 'react';
import styles from './menuitemslist.css';
import { BlockIcon, WarningIcon } from '../../../../Icons';

interface IMenuItemsListProps {
  postId: string
}

export function MenuItemsList({ postId }: IMenuItemsListProps) {
  return (
    <ul className={styles.menuItemsList}>
      <li className={styles.menuItem} onClick={() => console.log(postId)}>
        <BlockIcon />
        Скрыть
      </li>

      <div className={styles.divider} />

      <li className={styles.menuItem} onClick={() => console.log(postId)}>
        <WarningIcon />
        Пожаловаться
      </li>
    </ul>
  );
}

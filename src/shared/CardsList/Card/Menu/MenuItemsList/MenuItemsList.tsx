import React from 'react';
import styles from './menuitemslist.css';
import { BlockIcon, CommentIcon, SaveIcon, ShareIcon, WarningIcon } from '../../../../Icons';

interface IMenuItemsListProps {
  postId: string
}

export function MenuItemsList({ postId }: IMenuItemsListProps) {
  return (
    <ul className={styles.menuItemsList}>
      <li className={`${styles.menuItemDesktop} ${styles.menuItem}`} onClick={() => console.log(postId)}>
        <CommentIcon />
        Комментарии
      </li>

      <div className={`${styles.divider} ${styles.dividerDesktop}`} />

      <li className={`${styles.menuItemDesktop} ${styles.menuItem}`} onClick={() => console.log(postId)}>
        <ShareIcon />
        Поделиться
      </li>

      <div className={`${styles.divider} ${styles.dividerDesktop}`} />

      <li className={styles.menuItem} onClick={() => console.log(postId)}>
        <BlockIcon />
        Скрыть
      </li>

      <div className={styles.divider} />

      <li className={`${styles.menuItemDesktop} ${styles.menuItem}`} onClick={() => console.log(postId)}>
        <SaveIcon />
        Сохранить
      </li>

      <div className={`${styles.divider} ${styles.dividerDesktop}`} />

      <li className={styles.menuItem} onClick={() => console.log(postId)}>
        <WarningIcon />
        Пожаловаться
      </li>
    </ul>
  );
}

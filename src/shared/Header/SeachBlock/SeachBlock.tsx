import React, { useContext } from 'react';
import styles from './seachblock.css';
import { UserBlock } from './UserBlock';
import { userContext } from '../../context/userContext';


export function SeachBlock() {
  const userData = useContext(userContext)

  return (
    <div className={styles.searchBlock}>
      <UserBlock avatarSrc={userData.iconImg} username={userData.name} />
    </div>
  );
}

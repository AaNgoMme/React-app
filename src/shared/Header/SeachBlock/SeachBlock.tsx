import React, { useContext } from 'react';
import styles from './seachblock.css';
import { UserBlock } from './UserBlock';
import { useUserData } from '../../../hooks/useUserData';

export function SeachBlock() {

 const {data, loading}= useUserData()

  return (
    <div className={styles.searchBlock}>
      <UserBlock avatarSrc={data.iconImg} username={data.name} loading={loading} />
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import styles from './seachblock.css';
import { UserBlock } from './UserBlock';
import axios from 'axios';

interface ISeachBlockProps {
  token: string
}

interface IUserData {
  name?: string
  iconImg?: string
}

export function SeachBlock( {token}: ISeachBlockProps ) {

  const [data, setData] = useState<IUserData>({})

  useEffect( () => {
    axios.get('https://oauth.reddit.com/api/v1/me', {
      headers: { Authorization: `bearer ${token}` }
    })
    .then((resp) => {
      console.log(resp.data)
      console.log(resp.data.name)
      const userData = resp.data
      setData({ name: userData.name, iconImg: userData.icon_img.split('?')[0]})
    })
    .catch(console.log)
  }, [token])

  return (
    <div className={styles.searchBlock}>
      <UserBlock avatarSrc={data.iconImg} username={data.name} />
    </div>
  );
}

import React from 'react';
import styles from './userblock.css';
import { IconAnon } from '../../../Icons';
import { EColor, Text } from '../../../Text';



interface IUserBlockProps {
  avatarSrc?: string
  username?: string
  loading?: boolean
}


export function UserBlock({ avatarSrc, username, loading }: IUserBlockProps) {

  return (
    <a className={styles.userBox}
      href="https://www.reddit.com/api/v1/authorize?client_id=CsIig-AA7L5j8R4E3K2cUg&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity">
      <div className={styles.avatarBox}>
        {avatarSrc
          ? <img src={avatarSrc} className={styles.avatarImage} />
          : <IconAnon />
        }
      </div>

      <div className={styles.username}>
        {loading ? (
          <Text size={20} color={EColor.gray99}>
              загрузка...
          </Text>
        ):(
      <Text size = { 20 } color = { username? EColor.black : EColor.gray99}>
        {username || 'Аноним'}
      </Text>
      )
        }
    </div>
    </a >
  );
}

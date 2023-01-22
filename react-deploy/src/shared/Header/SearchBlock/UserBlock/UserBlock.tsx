import React from 'react';
import { IconAnon } from '../../../icons/IconAnon';
import { Ecolor } from '../../../Text';
import styles from './userblock.css';
import {Text} from '../../../Text';

interface IUserBlockProps {
  avatarSrc?: string;
  username?: string;
}

export function UserBlock({avatarSrc, username}: IUserBlockProps) {
  return (
    <a 
    href='https://www.reddit.com/api/v1/authorize?client_id=9fS4Dt6juujVLyBbhhldyA&response_type=code&state=random&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity'
    className={styles.userBox}>
      <div className={styles.avatarBox}>
        {avatarSrc
        ? <img src={avatarSrc} alt="user avatar" className={styles.avatarImage}/>
        : <IconAnon/>
}
      </div>
      <div className={styles.username}>

        <Text size={12} color={username ? Ecolor.black : Ecolor.grey99}>{username || 'Аноним'}</Text>
      </div>
    </a>
  );
}

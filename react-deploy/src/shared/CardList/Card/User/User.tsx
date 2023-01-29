import React, { useContext } from 'react';
import styles from './user.css';

interface IUser {
  url: string;
  author: string;
}

export function User({url, author}: IUser) {
  return (
  <div className={styles.userLink}>
    <img className={styles.avatar} src={url} alt="avatar"/>
    <a href='#user-url' className={styles.username}>{author}</a>
  </div>
  );
}

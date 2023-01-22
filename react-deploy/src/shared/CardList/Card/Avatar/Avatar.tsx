import React from 'react';
import { User } from '../User';
import styles from './avatar.css';

interface IAvatar {
  url: string;
  author: string;
  date:string;
  title: string;
}

export function Avatar({url, author, date, title}: IAvatar) {
  return (
<div className={styles.textContent}>
  <div className={styles.metaData}>
      <div className={styles.userLink}>
        <User url={url} author={author}></User>
      </div>
      <span className={styles.createdAt}>
      <span className={styles.publishedLabel}>опубликовано</span>
      {date}
      </span>
  </div>
  <h2 className={styles.title}>
    <a href='#post-url' className={styles.postLink}>
      {title}
    </a>
  </h2>
</div>
  );
}

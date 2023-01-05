import React from 'react';
import { User } from '../User';
import styles from './avatar.css';

export function Avatar() {
  return (
<div className={styles.textContent}>
  <div className={styles.metaData}>
      <div className={styles.userLink}>
        <User></User>
      </div>
      <span className={styles.createdAt}>
      <span className={styles.publishedLabel}>опубликовано</span>
      4 часа назад
      </span>
  </div>
  <h2 className={styles.title}>
    <a href='#post-url' className={styles.postLink}>
      Следует отметить, что новая модель организационной деятельности...
    </a>
  </h2>
</div>
  );
}

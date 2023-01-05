import React from 'react';
import styles from './user.css';

export function User() {
  return (
  <div className={styles.userLink}>
    <img
    className={styles.avatar}
    src="http://moonstudiosm.com/wp-content/img/2015/11/64x64_22.jpg"
    alt="avatar"/>
    <a href='#user-url' className={styles.username}>Дмитрий Гришин</a>
  </div>
  );
}

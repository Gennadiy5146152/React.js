import React from 'react';
import styles from './preview.css';

export function Preview() {
  return (
<div className={styles.preview}>
  <img className={styles.previewImg}
    src='https://cdn.dribbble.com/users/4945751/screenshots/20295470/media/f2172f68ca2e2e832fe9dba32ec16e65.jpg?compress=1&resize=1600x1200&vertical=top'>
  </img>
</div>
  );
}

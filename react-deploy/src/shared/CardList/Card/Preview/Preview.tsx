import React from 'react';
import styles from './preview.css';

export function Preview({image}: any) {
  return (
<div className={styles.preview}>
  <img className={styles.previewImg}
    src={image}>
  </img>
</div>
  );
}

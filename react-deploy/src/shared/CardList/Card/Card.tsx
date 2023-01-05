import React from 'react';
import { Avatar } from './Avatar';
import styles from './card.css';
import { CarmaCounter } from './CarmaCounter';
import { ComentsButton } from './ComentsButton';
import { MenuButton } from './MenuButton';
import { SaveButton } from './SaveButton';
import { ShareButton } from './ShareButton';

export function Card() {
  return (
    <li className={styles.card}>
    <div className={styles.textContent}>
    <Avatar></Avatar>
    </div>
      <div className={styles.preview}>
        <img
        className={styles.previewImg}
        src='https://cdn.dribbble.com/users/4945751/screenshots/20295470/media/f2172f68ca2e2e832fe9dba32ec16e65.jpg?compress=1&resize=1600x1200&vertical=top'>
        </img>
      </div>
     <MenuButton></MenuButton>
      <div className={styles.controls}>
        <CarmaCounter></CarmaCounter>
        <ComentsButton></ComentsButton>

        <div className={styles.actions}>
         <ShareButton></ShareButton>
         <SaveButton></SaveButton>
        </div>
      </div>
    </li>
  );
}

import React from 'react';
import { Avatar } from './Avatar';
import { ButtonControlsActions } from './ButtonControlsActions';
import styles from './card.css';
import { MenuButton } from './MenuButton';
import { Preview } from './Preview';

export function Card() {
  return (
    <li className={styles.card}>
    <div className={styles.textContent}>
    <Avatar></Avatar>
    </div>
      <Preview></Preview>
     <MenuButton></MenuButton>
     <ButtonControlsActions></ButtonControlsActions>
    </li>
  );
}

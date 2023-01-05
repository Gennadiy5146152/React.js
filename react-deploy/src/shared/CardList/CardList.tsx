import React from 'react';
import styles from './cardList.css';
import { Card } from './Card/Card'

export function CardList() {
  return (
    <ul className={styles.cardList}>
      <Card></Card>
    </ul>
  );
}

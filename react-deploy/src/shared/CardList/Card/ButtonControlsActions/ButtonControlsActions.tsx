import React from 'react';
import { CarmaCounter } from '../CarmaCounter';
import { ComentsButton } from '../ComentsButton';
import { SaveButton } from '../SaveButton';
import { ShareButton } from '../ShareButton';
import styles from './buttoncontrolsactions.css';

export function ButtonControlsActions() {
  return (
    <div className={styles.controls}>
    <CarmaCounter></CarmaCounter>
    <ComentsButton></ComentsButton>

    <div className={styles.actions}>
     <ShareButton></ShareButton>
     <SaveButton></SaveButton>
    </div>
  </div>
  );
}

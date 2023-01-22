import React from 'react';
import { CarmaCounter } from '../CarmaCounter';
import { ComentsButton } from '../ComentsButton';
import { SaveButton } from '../SaveButton';
import { ShareButton } from '../ShareButton';
import styles from './buttoncontrolsactions.css';

interface IButtonControlsActions {
  score: string;
  num_comments: number;
}

export function ButtonControlsActions({score, num_comments}: IButtonControlsActions) {
  return (
    <div className={styles.controls}>
    <CarmaCounter score={score}></CarmaCounter>
    <ComentsButton num_comments={num_comments}></ComentsButton>

    <div className={styles.actions}>
     <ShareButton></ShareButton>
     <SaveButton></SaveButton>
    </div>
  </div>
  );
}

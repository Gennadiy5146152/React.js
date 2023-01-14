import React from 'react';
import { IconComplain } from '../../../../../icons/IconComplain';
import { Esvg, Icons } from '../../../../../icons/Icons';
import styles from './dropdowncomponentcomplain.css';

export function DropdownComponentComplain() {
  return (
      <div className={styles.s16}>
        <Icons name={Esvg.iconComplain} style={styles.s16}/>    
        <span className={styles.textDp}>Пожаловаться</span>
      </div>
  );
}

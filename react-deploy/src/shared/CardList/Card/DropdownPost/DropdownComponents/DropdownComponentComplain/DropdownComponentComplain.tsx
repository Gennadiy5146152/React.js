import React from 'react';
import { IconComplain } from '../../../../../icons/IconComplain';
import styles from './dropdowncomponentcomplain.css';

export function DropdownComponentComplain() {
  return (
<li className={styles.liDropdownPost }>
        <IconComplain />
        <span className={styles.textDp}>Пожаловаться</span>
        </li>
  );
}

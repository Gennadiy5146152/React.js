import React from 'react';
import { IconShare } from '../../../../../icons/IconShare';
import styles from './dropdowncomponentshare.css';

export function DropdownComponentShare() {
  return (
<li className={styles.liDropdownPost }>
       <IconShare />
        <span className={styles.textDp}>Поделиться</span></li>
  );
}

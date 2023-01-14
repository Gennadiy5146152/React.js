import React from 'react';
import styles from './dropdowncomponentshare.css';
import { IconShare } from '../../../../../icons/IconShare';
import { Esvg, Icons } from '../../../../../icons/Icons';

export function DropdownComponentShare() {
  return (
    <div className={styles.s16}>
        <Icons name={Esvg.iconShare} style={styles.s16}/>
        <span className={styles.textDp}>Поделиться</span>
    </div>
  );
}

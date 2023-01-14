import React from 'react';
import { IconComents } from '../../../../../icons/IconComents';
import { Esvg, Icons } from '../../../../../icons/Icons';
import styles from './dropdowncomponentcoments.css';

export function DropdownComponentComents() {
  return (
    <div className={styles.s16}>
        <Icons name={Esvg.iconComents} style={styles.s16}/>
        <span className={styles.textDp}>Коментарии</span>
    </div>
  );
}

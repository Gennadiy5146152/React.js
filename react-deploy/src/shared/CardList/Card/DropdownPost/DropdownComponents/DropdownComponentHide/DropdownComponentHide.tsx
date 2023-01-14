import React from 'react';
import { IconComplain } from '../../../../../icons/IconComplain';
import { Esvg, Icons } from '../../../../../icons/Icons';
import styles from './dropdowncomponenthide.css';

export function DropdownComponentHide() {
  return (
<div className={styles.s16}>
  <Icons name={Esvg.iconHide} style={styles.s16}/>
  <span className={styles.textDp}>Скрыть</span>
</div>
  );
}

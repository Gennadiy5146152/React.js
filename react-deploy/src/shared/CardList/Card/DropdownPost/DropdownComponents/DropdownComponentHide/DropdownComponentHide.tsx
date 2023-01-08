import React from 'react';
import { IconHide } from '../../../../../icons/IconHide';
import styles from './dropdowncomponenthide.css';

export function DropdownComponentHide() {
  return (
<li className={styles.liDropdownPost }>
  <IconHide />
  <span className={styles.textDp}>Скрыть</span>
</li>
  );
}

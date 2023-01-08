import React from 'react';
import { IconComents } from '../../../../../icons/IconComents';
import styles from './dropdowncomponentcoments.css';

export function DropdownComponentComents() {
  return (
    <li className={styles.liDropdownPost }>
        <IconComents />
        <span className={styles.textDp}>Коментарии</span></li>
  );
}

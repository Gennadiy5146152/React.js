import React from 'react';
import { IconComents } from '../../../../../icons/IconComents';
import styles from './dropdowncomponentcoments.css';

export function DropdownComponentComents() {
  return (
    <div>
        <IconComents width={16} height={16}/>
        <span className={styles.textDp}>Коментарии</span></div>
  );
}

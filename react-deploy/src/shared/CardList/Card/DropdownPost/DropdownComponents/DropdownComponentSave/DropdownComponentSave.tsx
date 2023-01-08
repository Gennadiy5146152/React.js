import React from 'react';
import { IconSave } from '../../../../../icons/IconSave';
import styles from './dropdowncomponentsave.css';

export function DropdownComponentSave() {
  return (
    <li className={styles.liDropdownPost }>
      <IconSave />
      <span className={styles.textDp}>Сохранить</span>
    </li>
  );
}

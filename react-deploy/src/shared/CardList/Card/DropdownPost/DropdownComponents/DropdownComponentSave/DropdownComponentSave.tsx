import React from 'react';
import { Esvg, Icons } from '../../../../../icons/Icons';
import styles from './dropdowncomponentsave.css';

export function DropdownComponentSave() {
  return (
    <div>
      <Icons name={Esvg.iconSave} width={16} height={16}></Icons>
      <span className={styles.textDp}>Сохранить</span>
    </div>
  );
}

import React from 'react';
import { Esvg, Icons } from '../../../../../icons/Icons';
import { IconSave } from '../../../../../icons/IconSave';
import styles from './dropdowncomponentsave.css';

export function DropdownComponentSave() {
  return (
    <div className={styles.s16}>
      <Icons name={Esvg.iconSave} style={styles.s16}/>
      <span className={styles.textDp}>Сохранить</span>
    </div>
  );
}

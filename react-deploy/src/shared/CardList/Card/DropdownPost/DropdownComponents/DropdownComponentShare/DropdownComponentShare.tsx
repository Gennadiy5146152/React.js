import React from 'react';
import styles from './dropdowncomponentshare.css';
import { Esvg, Icons } from '../../../../../icons/Icons';

export function DropdownComponentShare() {
  return (
    <div>
        <Icons name={Esvg.iconShare} width={16} height={16}></Icons>
        <span className={styles.textDp}>Поделиться</span>
    </div>
  );
}

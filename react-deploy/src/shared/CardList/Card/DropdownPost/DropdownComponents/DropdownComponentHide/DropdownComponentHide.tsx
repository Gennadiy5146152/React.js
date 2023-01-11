import React from 'react';
import { Esvg, Icons } from '../../../../../icons/Icons';
import styles from './dropdowncomponenthide.css';

export function DropdownComponentHide() {
  return (
<div>
  <Icons name={Esvg.iconHide} width={16} height={16}></Icons>
  <span className={styles.textDp}>Скрыть</span>
</div>
  );
}

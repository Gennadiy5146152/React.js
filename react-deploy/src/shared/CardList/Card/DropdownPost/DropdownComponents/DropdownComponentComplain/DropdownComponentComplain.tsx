import React from 'react';
import { Esvg, Icons } from '../../../../../icons/Icons';
import styles from './dropdowncomponentcomplain.css';

export function DropdownComponentComplain() {
  return (
<div>
        <Icons name={Esvg.iconComplain} width={16} height={16}></Icons>    
        <span className={styles.textDp}>Пожаловаться</span>
        </div>
  );
}

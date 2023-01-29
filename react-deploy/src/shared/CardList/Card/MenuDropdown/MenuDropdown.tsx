import React from 'react';
import ReactDOM from 'react-dom';
import { GenericList, IItem } from '../../../../utilits/GenericList';
import styles from '../../../../main.global.css'

interface  IMenuDropdown {
  list: Array<IItem>,
  x: number | string,
  y: number | string,
}

export function MenuDropdown({list, x, y}: IMenuDropdown) {
  const node = document.querySelector('#modal_root');
  if (!node) return null;
  return ReactDOM.createPortal((
    <div className={ styles.dropdown } style={{top: y, left: x, position: 'absolute'}}>
    <ul className={styles.ulDropdown}>
      <GenericList list={list}></GenericList>
      <div className={styles.closeLiDropdownPost}><span className={styles.textcloseLiDropdownPost}>Закрыть</span></div>
    </ul>
</div>
  ), node);
}

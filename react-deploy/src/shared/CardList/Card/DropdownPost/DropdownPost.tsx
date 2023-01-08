import React from 'react';
import { DropdownComponentComents } from './DropdownComponents/DropdownComponentComents';
import { DropdownComponentComplain } from './DropdownComponents/DropdownComponentComplain';
import { DropdownComponentHide } from './DropdownComponents/DropdownComponentHide';
import { DropdownComponentSave } from './DropdownComponents/DropdownComponentSave';
import { DropdownComponentShare } from './DropdownComponents/DropdownComponentShare';
import styles from './dropdownpost.css';

interface IMenuItemsListProps {
  postId: string;
}

export function DropdownPost({postId}: IMenuItemsListProps) {
  return (
    <div className={ styles.dropdown }>
      <ul className={styles.ulDropdown}>
        <DropdownComponentComents />
        <DropdownComponentShare />
        <DropdownComponentHide />
        <DropdownComponentSave />
        <DropdownComponentComplain />
      </ul>
      <div className={styles.closeLiDropdownPost} onClick={() => console.log(postId)}><span className={styles.textcloseLiDropdownPost}>Закрыть</span></div>
    </div>
  );
}

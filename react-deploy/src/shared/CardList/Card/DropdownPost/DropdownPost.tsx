import React from 'react';
import { DropdownComponentComents } from './DropdownComponents/DropdownComponentComents';
import { DropdownComponentComplain } from './DropdownComponents/DropdownComponentComplain';
import { DropdownComponentHide } from './DropdownComponents/DropdownComponentHide';
import { DropdownComponentSave } from './DropdownComponents/DropdownComponentSave';
import { DropdownComponentShare } from './DropdownComponents/DropdownComponentShare';
import styles from './dropdownpost.css';
import { GeneticList, IItem } from '../../../../utilits/GeneticList';


interface IMenuItemsListProps {
  postId: string;
}

export function DropdownPost({postId}: IMenuItemsListProps) {
  const LIST: Array<IItem> = [
    {As: 'li', text: <DropdownComponentShare />,  id: '2', className: styles.liDropdownPost},
    {As: 'li', text: <DropdownComponentHide />,  id: '3', className: styles.liDropdownPost},
    {As: 'li', text: <DropdownComponentComents />, id: '1', className: styles.liDropdownPost},
    {As: 'li', text: <DropdownComponentSave />,   id: '4', className: styles.liDropdownPost},
    {As: 'li', text: <DropdownComponentComplain />, id: '5', className: styles.liDropdownPost},
  ];
  return (
    <div className={ styles.dropdown }>
      <ul className={styles.ulDropdown}>
       <GeneticList list={LIST}></GeneticList>
      </ul>
      <div className={styles.closeLiDropdownPost} onClick={() => console.log(postId)}><span className={styles.textcloseLiDropdownPost}>Закрыть</span></div>
    </div>
  );
}

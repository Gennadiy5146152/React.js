import React from 'react';
import { DropdownComponentComplain } from '../DropdownPost/DropdownComponents/DropdownComponentComplain';
import { DropdownComponentHide } from '../DropdownPost/DropdownComponents/DropdownComponentHide';
import styles from './dropdownpostm.css';
import { GeneticList, IItem } from '../../../../utilits/GeneticList';

interface IMenuItemsListProps {
  postId: string;
}

export function DropdownPostM({postId}: IMenuItemsListProps) {
  const LIST: Array<IItem> = [
    {As: 'li', text: <DropdownComponentHide />,  id: '2', className: styles.liDropdownPost},
    {As: 'li', text:  <DropdownComponentComplain />,  id: '3', className: styles.liDropdownPost},
  ];
  return (
    <div className={ styles.dropdown }>
    <ul className={ styles.ulDropdown }>
    <GeneticList list={LIST}></GeneticList>
    </ul>
    <div className={ styles.closeLiDropdownPost } onClick={() => console.log(postId)}><span className={ styles.textcloseLiDropdownPost }>Закрыть</span></div>
  </div>
  );
}

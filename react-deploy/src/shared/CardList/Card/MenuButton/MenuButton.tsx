import React from 'react';
import { IItem, GenericList } from '../../../../utilits/GenericList';
import { Esvg, Icons } from '../../../icons/Icons';
import { MenuIcon } from '../../../icons/MenuIcon';
import { Dropdown } from '../Dropdown';
import { DropdownComponentComents } from '../DropdownPost/DropdownComponents/DropdownComponentComents';
import { DropdownComponentComplain } from '../DropdownPost/DropdownComponents/DropdownComponentComplain';
import { DropdownComponentHide } from '../DropdownPost/DropdownComponents/DropdownComponentHide';
import { DropdownComponentSave } from '../DropdownPost/DropdownComponents/DropdownComponentSave';
import { DropdownComponentShare } from '../DropdownPost/DropdownComponents/DropdownComponentShare';
import styles from './menubutton.css';


export function MenuButton() {
  let [isOpen, setIsOpen] = React.useState(false);
  const LIST: Array<IItem> = [
    {As: 'li', text:  <Icons name={Esvg.iconComents} style={styles.s16} text={'Комментарии'}/>,  id: '2', className: `${styles.liDropdownPost} ${styles.liDropdownPostM}`},
    {As: 'li', text:  <Icons name={Esvg.iconShare} style={styles.s16} text={'Поделиться'}/>,  id: '3', className: `${styles.liDropdownPost} ${styles.liMargin}`},
    {As: 'li', text:  <Icons name={Esvg.iconHide} style={styles.s16} text={'Скрыть'}/>, id: '1', className: `${styles.liDropdownPost} ${styles.liDropdownPostM}`},
    {As: 'li', text:  <Icons name={Esvg.iconSave} style={styles.s16} text={'Сохранить'}/>,   id: '4', className: `${styles.liDropdownPost} ${styles.liDropdownPostM}`},
    {As: 'li', text:  <Icons name={Esvg.iconComplain} style={styles.s16} text={'Пожаловаться'}/>, id: '5', className: styles.liDropdownPost},
  ];
  return (
    <div className={styles.menu}>
      <Dropdown 
      isOpen={() =>isOpen} button={<button className={styles.menuButton} onClick={() => setIsOpen(isOpen === false ? isOpen = true : isOpen = false)}>
     <MenuIcon />
      </button>}>
        <div className={ styles.dropdown }>
          <ul className={styles.ulDropdown}>
            <GenericList list={LIST}></GenericList>
          </ul>
        <div className={styles.closeLiDropdownPost}><span className={styles.textcloseLiDropdownPost}>Закрыть</span></div>
    </div>
      </Dropdown>
  </div>
  );
}

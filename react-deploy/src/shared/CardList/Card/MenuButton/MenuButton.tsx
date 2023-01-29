import React, { useEffect } from 'react';
import { IItem, GenericList } from '../../../../utilits/GenericList';
import { Esvg, Icons } from '../../../icons/Icons';
import { MenuIcon } from '../../../icons/MenuIcon';
import { Dropdown } from '../Dropdown';
import { MenuDropdown } from '../MenuDropdown';
import styles from './menubutton.css';


export function MenuButton() {
  let [isOpen, setIsOpen] = React.useState(false);
  let [positionX, setPositionX] = React.useState(1);
  let [positionY, setPositionY] = React.useState(1);
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
      isOpen={() =>isOpen} button={<button className={styles.menuButton} onClick={(event) => {
        console.log(window.pageYOffset)
        let scroll = window.pageYOffset
        let position = event.currentTarget.getBoundingClientRect()
        setPositionX(position.x)
        setPositionY(position.y + scroll)
        setIsOpen(isOpen === false ? isOpen = true : isOpen = false)
      }}><MenuIcon />
      </button>}>
        <MenuDropdown list={LIST} x={positionX-55} y={positionY+20}></MenuDropdown>
      </Dropdown>
  </div>
  );
}

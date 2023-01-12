import React from 'react';
import { MenuIcon } from '../../../icons/MenuIcon';
import { Dropdown } from '../Dropdown';
import { DropdownPost } from '../DropdownPost';
import styles from './menubutton.css';


export function MenuButton() {
  let [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className={styles.menu}>
      <Dropdown 
      isOpen={() =>isOpen} button={<button className={styles.menuButton} onClick={() => setIsOpen(isOpen === false ? isOpen = true : isOpen = false)}>
     <MenuIcon />
      </button>}>
        <DropdownPost postId={'1'}></DropdownPost>
      </Dropdown>
  </div>
  );
}

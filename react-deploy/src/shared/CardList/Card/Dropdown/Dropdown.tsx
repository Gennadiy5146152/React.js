import React from 'react';
import styles from './dropdown.css';

interface IDropdownOpen {
  button: React.ReactNode;
  children: React.ReactNode;
  isOpen?: any;
  onOpen?: () => void;
  onClose?: () => void;
}

const NOOP = () => {};

export function Dropdown({button, children, isOpen, onOpen = NOOP, onClose = NOOP}: IDropdownOpen) {
  const [isDropdownOpen, setisDropdownOpen] = React.useState(isOpen);
  React.useEffect(() => setisDropdownOpen(isOpen), [isOpen])
  React.useEffect(() => isDropdownOpen ? onOpen() : onClose(), [isDropdownOpen])

  const handleOpen = () => {
    if (isOpen === undefined) {
      setisDropdownOpen(!isDropdownOpen)
    }
  }

  return (
    <div className={styles.container}>
      <div onClick={handleOpen}>
        {button}
      </div>
      {isDropdownOpen && (
        <div className={styles.listContainer}>
          <div className={styles.list} onClick={() => setisDropdownOpen(false)}>
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

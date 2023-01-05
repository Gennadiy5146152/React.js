import React from 'react';
import styles from './header.css';
import { SearchBlock } from './SearchBlock';
import { SortBlock } from './SortBlock';
import { ThreadTitle } from './ThreadTitle';

export function Header() {
  return (
    <header className={styles.header}>
      <SearchBlock></SearchBlock>
      <ThreadTitle></ThreadTitle>
      <SortBlock></SortBlock>
    </header>
  );
}



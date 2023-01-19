import React from 'react';
import { tokenContext } from '../context/tokenContext';
import styles from './header.css';
import { SearchBlock } from './SearchBlock';
import { SortBlock } from './SortBlock';
import { ThreadTitle } from './ThreadTitle';

export function Header() {
  const {Consumer} = tokenContext 
  console.log(tokenContext)
  return (
    <header className={styles.header}>
      <Consumer>
      {(token) => <SearchBlock token={token}></SearchBlock>}
    </Consumer>
      <ThreadTitle></ThreadTitle>
      <SortBlock></SortBlock>
    </header>
  );
}



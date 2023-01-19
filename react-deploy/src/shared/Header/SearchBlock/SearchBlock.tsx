import React from 'react';
import { useUserData } from '../../../hooks/useUserData';
import styles from './searchblock.css';
import { UserBlock } from './UserBlock';

interface ISearchBlockProps {
  token: string;
}


export function SearchBlock({token}: ISearchBlockProps) {
  const [data] = useUserData(token)
  console.log(useUserData(token))
  return (
    <div className={styles.searchBlock}>
      <UserBlock avatarSrc={data.iconImg} username={data.name}></UserBlock>
    </div>
  );
}

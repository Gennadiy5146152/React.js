import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useUserData } from '../../../hooks/useUserData';
import { saveToken } from '../../../store/me/actions';
import styles from './searchblock.css';
import { UserBlock } from './UserBlock';

export function SearchBlock() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(saveToken());
  }, [])
  const {data, loading} = useUserData();
  return (
    <div className={styles.searchBlock}>
      <UserBlock avatarSrc={data.iconImg} username={data.name} loading={loading}></UserBlock>
    </div>
  );
}

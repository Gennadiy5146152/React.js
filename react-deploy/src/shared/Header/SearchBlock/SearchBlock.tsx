import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useToken } from '../../../hooks/useToken';
import { useUserData } from '../../../hooks/useUserData';
import { RootState, setToken } from '../../../store';
import { userContext } from '../../context/userContext';
import styles from './searchblock.css';
import { UserBlock } from './UserBlock';

export function SearchBlock() {
  const [token] = useToken();
  const dispatch = useDispatch();
  useEffect(() => {
    if (token) {
      dispatch(setToken(token));
    }
  }, [token])
  //const {iconImg, name} = useContext(userContext);
  const {data, loading} = useUserData();
  return (
    <div className={styles.searchBlock}>
      <UserBlock avatarSrc={data.iconImg} username={data.name} loading={loading}></UserBlock>
    </div>
  );
}

import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useToken } from '../../../hooks/useToken';
import { RootState, updateToken } from '../../../store';
import { userContext } from '../../context/userContext';
import styles from './searchblock.css';
import { UserBlock } from './UserBlock';

export function SearchBlock() {
  const [token] = useToken();
  const dispatch = useDispatch();
  useEffect(() => {
    if (token) {
      dispatch(updateToken(token));
    }
  }, [token])
  const {iconImg, name} = useContext(userContext);
  return (
    <div className={styles.searchBlock}>
      <UserBlock avatarSrc={iconImg} username={name}></UserBlock>
    </div>
  );
}

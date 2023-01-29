import React, { useEffect, useRef, useState } from 'react';
import { CarmaCounter } from '../CardList/Card/CarmaCounter';
import { User } from '../CardList/Card/User';
import { ComentForm } from '../ComentForm';
import { Esvg, Icons } from '../icons/Icons';
import styles from './datacomments.css';

export function DataComments({url = 0, author, date, text}: any) {
  const [isModalOpened, setIsModalOpened ] = useState(false);
  const commentRef = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    if (isModalOpened === true) {
      commentRef.current?.focus();
    }
  },[isModalOpened])
  return (
    <div>
      <div className={styles.headerPost}>
       <div className={styles.iconComments}>
         <CarmaCounter></CarmaCounter>
        </div>
      <div className={styles.author}>
        <User url={url} author={author}></User>
      </div>
      <span className={styles.createdAt}>
      {date}</span>
      <span className={styles.division}>{'Лига юристов'}</span>
    </div>
    <h3 className={styles.textComment}>
      {text}
    </h3>
    <ul className={styles.menuButton}>
      <li className={styles.liMenuButton}>
        <button onClick={() => {
          setIsModalOpened(true); 
        }
        }>
          <Icons name={Esvg.iconComents} text={'Ответить'} style={styles.s16}></Icons>
          </button>
      </li>
      <li className={styles.liMenuButton}><Icons name={Esvg.iconShare} text={'Поделиться'} style={styles.s16}></Icons></li>
      <li className={styles.liMenuButton}><Icons name={Esvg.iconComplain} text={'Пожаловаться'} style={styles.s16}></Icons></li>
    </ul>
    {isModalOpened && (
    <ComentForm author={author} ref={commentRef} onClose={() => {
      setIsModalOpened(false)}}></ComentForm>)} 
    </div>
  );
}

import React, { useContext } from 'react';
import styles from './cardList.css';
import { Card } from './Card/Card'
import { postContext } from '../context/postContext';

export function CardList() {
  const data = useContext(postContext);
  console.log(data)
  return (
    <ul className={styles.cardList}>
      {data.map((el, index) => {
        return <Card author={el.data.author} image={el.data.thumbnail} url={el.data.url_overridden_by_dest} title={el.data.title} date={el.data.created} score={el.data.score} comments={el.data.num_comments} key={index} id={el.data.id} subreddit={el.data.subreddit}></Card>
      })}
    </ul>
  );
}

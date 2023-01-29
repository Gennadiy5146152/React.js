import React from 'react';
import { Avatar } from './Avatar';
import { ButtonControlsActions } from './ButtonControlsActions';
import styles from './card.css';
import { MenuButton } from './MenuButton';
import { Preview } from './Preview';

interface ICard {
    data?: any,
    author?: any,
    image?: any,
    url?: any,
    title?: any,
    date?: any,
    score?: any,
    comments?: any,
    id?: any,
    subreddit?: any,
}

export function Card({author, image, url, title, date, score, comments, id, subreddit}: ICard) {
  console.log(subreddit)
  return (
    <li className={styles.card}>
    <div className={styles.textContent}>
    <Avatar url={url} author={author} date={date} title={title} id={id} subreddit={subreddit}></Avatar>
    </div>
      <Preview image={image}></Preview>
     <MenuButton></MenuButton>
     <ButtonControlsActions score={score} num_comments={comments}></ButtonControlsActions>
    </li>
  );
}

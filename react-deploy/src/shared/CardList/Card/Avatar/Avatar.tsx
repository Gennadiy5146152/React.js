import React, { useState } from 'react';
import { User } from '../User';
import styles from './avatar.css';
import {Post} from '../../../Post'
import { useCommentsData } from '../../../../hooks/useCommentsData';
import { Link, Route } from 'react-router-dom';

interface IAvatar {
  url: string;
  author: string;
  date:number;
  title: string;
  direction?: string;
  id?: any;
  subreddit?: any;
}

export function Avatar({url, author, date, title, direction, id, subreddit}: IAvatar) {
  //const [isModalOpened, setIsModalOpened ] = useState(false);
  const [data] = useCommentsData({id, subreddit});
  return (
<div className={styles.textContent}>
  <div className={styles.metaData}>
  {direction && (
      <span className={styles.direction}>{direction}</span>
    )}
      <div className={styles.userLink}>
        <User url={url} author={author}></User>
      </div>
      <span className={styles.createdAt}>
      <span className={styles.publishedLabel}>опубликовано</span>
      {date}
      </span>
  </div>
  <h2 className={styles.title}>
    <Link to='/posts/1' className={styles.postLink}>
      {title}
    </Link>
    {/* {isModalOpened && (
      <Post data={data} onClose={() => {setIsModalOpened(false)}}></Post>
    )} */}
  </h2>
</div>
  );
}

import React, { useContext, useEffect, useRef, useState } from 'react';
import styles from './cardList.css';
import { Card } from './Card/Card'
import { postContext } from '../context/postContext';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export function CardList() {
  const token = useSelector<RootState>(state => state.token);
  const [post, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [errorLoading, setErrorLoading] = useState('');
  const [nextAfter, setNextAfter] = useState('');
  const [postLoading, setPostLoading] = useState(0);
  const [seeButton, setSeeButton] = useState(false);

  const bottomOfList = useRef<HTMLDivElement>(null);
  async function load() {
    setLoading(true);
    setErrorLoading('');
    try {
      const { data: {data: { after, children }}} = await axios.get('https://oauth.reddit.com/rising/', {
        headers: {Authorization: `bearer ${token}`},
        params: {
          limit: 3,
          after: nextAfter,
        }
        })
        setNextAfter(after)
        setPosts(prevChildren => prevChildren.concat(...children));
      } catch (error) {
        setErrorLoading(String(error));
      }
      setLoading(false)
    }

  useEffect(() => {

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPostLoading(postLoading + 1)
        if (postLoading % 3 != 0 || postLoading === 0) {
          setSeeButton(false)
          load();
        }else {
          setSeeButton(true)
        }
      }
    }, {
      rootMargin: '0px',
    })

    if (bottomOfList.current) {
      observer.observe(bottomOfList.current)
    }
    return () => {
      if (bottomOfList.current) {
        observer.unobserve(bottomOfList.current)
      }
    }
  }, [bottomOfList.current, nextAfter, token])


  return (
    <ul className={styles.cardList}>
      {post.length === 0 && !loading && !errorLoading && (
        <div style={{textAlign: 'center'}}>Нет ни одного поста</div>
      )}
      {post.map(post => (
        <Card
        key={post.data.id}
        title={post.data.title}
        id={post.data.id}
        subreddit={post.data.subreddit}
        />
      ))}
      {seeButton && (
        <button className={styles.button} onClick={() => load()}>Загрузить еще</button>
      )}
      

      <div ref={bottomOfList}>

      </div>

      {/* {loading && 'Загрузка...'} */}
      
      {errorLoading && (
        <div role='alert' style={{textAlign: 'center'}}>
          {errorLoading}
        </div>
      )}
    </ul>
  );
}

{/* <ul className={styles.cardList}>
{data.map((el, index) => {
  return <Card author={el.data.author} image={el.data.thumbnail} url={el.data.url_overridden_by_dest} title={el.data.title} date={el.data.created} score={el.data.score} comments={el.data.num_comments} key={index} id={el.data.id} subreddit={el.data.subreddit}></Card>
})}
</ul> */}

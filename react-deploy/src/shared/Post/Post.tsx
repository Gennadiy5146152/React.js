import React, { useEffect, useRef } from 'react';
import { Avatar } from '../CardList/Card/Avatar';
import { CarmaCounter } from '../CardList/Card/CarmaCounter';
import { ComentForm } from '../ComentForm';
import { DataComments } from '../DataComments';
import { IconClose } from '../icons/IconClose';
import styles from './post.css';

interface IPost {
  onClose?: () => void;
  data?: any;
}

export function Post(props: IPost) {
  const ref = useRef<HTMLDivElement>(null);
  const dataHeader = props.data.data[0].data.children[0].data;
  const dataComments = props.data.data[1].data.children
useEffect(() => {
  function handleClick(event: MouseEvent) {
    if (event.target instanceof Node && !ref.current?.contains(event.target)) {
      props.onClose?.();
    }
  }

  document.addEventListener('click', handleClick)

  return () => {
    document.removeEventListener('click', handleClick)
  }
}, [])

  return ((
    <div className={styles.modal} ref={ref}>
      <div className={styles.iconClose}>
      <IconClose></IconClose>
      </div>
      <div className={styles.headerModal}>
        <div className={styles.iconCommentsTotal}>
         <CarmaCounter score={dataHeader.score}></CarmaCounter>
        </div>
        <Avatar url={dataHeader.url_overridden_by_dest} author={dataHeader.author} date={dataHeader.created} title={dataHeader.title} direction={'Законодательство'}></Avatar>
      </div>

    <div className={styles.content}>
      <p>Есть над чем задуматься: тщательные исследования конкурентов представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть ассоциативно распределены по отраслям. Прежде всего, начало повседневной работы по формированию позиции однозначно фиксирует необходимость кластеризации усилий. Но сторонники тоталитаризма в науке и по сей день остаются уделом либералов, которые жаждут быть превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.</p>
    </div>
    <div>
    <img className={styles.img} src="https://cdn.dribbble.com/userupload/4384541/file/original-5561684e90a99ff9814455191bc95aa4.png?compress=1&resize=2048x1536"></img>
    </div>
    <span  className={styles.textFigcapture}>
      Учитывая ключевые сценарии поведения, социально-экономическое развитие играет определяющее значение.
    </span>
    <ul className={styles.ulDataComments}>
      {dataComments.map((el: any, index: any) => {
        return <li className={styles.liDataComments} key={index*2}>
          <DataComments url={el.data.url_overridden_by_dest} author={el.data.author} date={el.data.created}
          text={el.data.body}></DataComments>
        </li>
      })}
    </ul>
  </div>
  ));
}

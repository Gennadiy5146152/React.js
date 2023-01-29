import React, { ChangeEvent, FormEvent, forwardRef, useContext, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { commentContext } from '../context/commentContext';
import styles from './comentform.css';
import { IconComments } from './IconComments';

interface IPost {
  onClose?: () => void;
  author: string;
}

function ComentForm1(props: IPost, ref:any) {
  const [value, setValue]  = useState(props.author)
  const ref1 = useRef<HTMLDivElement>(null);

  const inputRef = useRef<HTMLTextAreaElement>(null);

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current?.focus();
    }
  }));


  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (event.target instanceof Node && !ref1.current?.contains(event.target)) {
        props.onClose?.();
      }
    }
  
    document.addEventListener('click', handleClick)
  
    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setValue(event.target.value)
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <div className={styles.comentForm} ref={ref1}>
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea className={styles.input} ref={inputRef} value={value} onChange={handleChange}></textarea>
      <div className={styles.blockIconsButton}>
        <div className={styles.componentIconComments}>
          <IconComments ></IconComments>
        </div>
        <button type='submit' className={styles.button}>Комментировать</button> 
      </div>  
    </form>
    </div>
  );
}

export const ComentForm = forwardRef(ComentForm1);

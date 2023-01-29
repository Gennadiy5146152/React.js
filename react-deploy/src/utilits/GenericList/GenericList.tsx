import React from 'react';
import ReactDOM from 'react-dom';
import styles from './genericlist.css';

export interface IItem {
  id: string;
  text: React.ReactNode;
  onClick?: (id:string) => void;
  className?: any;
  As?: 'a' | 'li' | 'button' | 'div';
  href?: string;
}

interface IGenericListProps {
  list: IItem[];
}

const noop = () => {};

export function GenericList( {list}: IGenericListProps) {

  return (
    <>
  {list.map(({ As = 'div', text, className, id, onClick = noop, href}) => {
    return (
      <As key={id} className={className}>
        {text}
      </As>
      )
  })}
    </>
  );
}

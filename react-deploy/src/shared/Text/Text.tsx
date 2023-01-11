import React from 'react';
import styles from './text.css';
import classNames from 'classnames';


export enum Ecolor {
  black = 'black',
  orange = 'orange',
  green = 'green',
  white  = 'white',
  grayF4 = 'grayF4',
  greyF3 = 'greyF3',
  greyD9 = 'greyD9',
  greyC4 = 'greyC4',
  grey99 =  'grey99',
  grey66 = 'grey66',
}

type Tsizes = 28 | 20 | 16 | 14 | 12 | 10;
interface ITextProps {
  As?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'div';
  children?: React.ReactNode;
  size: Tsizes;
  mobileSize?: Tsizes;
  tableSize?: Tsizes;
  desktopSize?: Tsizes;
  color?: Ecolor;
  bold?: boolean;
}

export function Text(props: ITextProps) {
  const {
    As = 'span', 
    color = Ecolor.black, 
    bold = false,
    children, 
    size, 
    mobileSize, 
    desktopSize, 
    tableSize
  } = props;
  const classes = classNames(
    styles[`s${size}`],
    {[styles.bold]: bold},
    {[styles[`m${mobileSize}`]]: mobileSize},
    {[styles[`t${tableSize}`]]: tableSize},
    {[styles[`d${desktopSize}`]]: desktopSize},
    styles[color]
  )
  return (
    <As className={classes}>
      {children}
    </As>
  );
}

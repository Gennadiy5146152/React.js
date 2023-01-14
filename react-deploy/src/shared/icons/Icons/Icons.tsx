import React from 'react';
import { IconComents } from '../IconComents';
import { IconComplain } from '../IconComplain';
import {Iiconprops} from './types';
import { IconHide } from '../IconHide';
import { IconSave } from '../IconSave';
import { IconShare } from '../IconShare';
import styles from './icons.css'

export enum Esvg {
 iconComents = 'IconComents',
 iconComplain = 'IconComplain',
 iconHide = 'IconHide',
 iconSave = 'IconSave',
 iconShare = 'IconShare',
}

const icons = {
  [Esvg.iconComents]: <IconComents />,
  [Esvg.iconComplain]: <IconComplain />,
  [Esvg.iconHide]: <IconHide />,
  [Esvg.iconSave]: <IconSave />,
  [Esvg.iconShare]: <IconShare />,
}
//type Tsizes = styles.s28 | 20 | 16 | 14 | 12 | 10;
interface IiconsProps {
  name?: Esvg;
  style: any;
}

export function Icons({ name = Esvg.iconComents, style }: IiconsProps) {

    return (
      <div className={`${style}`}>
        {icons[name]}
      </div>
    )
}

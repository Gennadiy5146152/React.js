import React from 'react';
import { IconComents } from '../IconComents';
import { IconComplain } from '../IconComplain';
import {Iiconprops} from './types';
import { IconHide } from '../IconHide';
import { IconSave } from '../IconSave';
import { IconShare } from '../IconShare';

export enum Esvg {
 iconComents = 'IconComents',
 iconComplain = 'IconComplain',
 iconHide = 'IconHide',
 iconSave = 'IconSave',
 iconShare = 'IconShare',
}

interface IiconsProps extends Iiconprops {
  name?: Esvg;
}

export function Icons(props: IiconsProps) {
  const {
    name = Esvg.iconComents,
    width,
    height,
  } = props;

  const icons = {
    [Esvg.iconComents]: <IconComents width={width} height={height}/>,
    [Esvg.iconComplain]: <IconComplain width={width} height={height}/>,
    [Esvg.iconHide]: <IconHide width={width} height={height}/>,
    [Esvg.iconSave]: <IconSave width={width} height={height}/>,
    [Esvg.iconShare]: <IconShare width={width} height={height}/>,
  }
    return (
      <>
        {icons[name]}
      </>
    )
}

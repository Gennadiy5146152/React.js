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
    name,
    width,
    height,
  } = props;

    switch(name) {
      case Esvg.iconComents:
        return (
          <IconComents width={width} height={height}/>
        );
      case Esvg.iconComplain:
        return (
          <IconComplain width={width} height={height}/>
        );
      case Esvg.iconHide:
        return (
          <IconHide width={width} height={height}/>
        );
      case Esvg.iconSave:
        return (
          <IconSave width={width} height={height}/>
        );
      case Esvg.iconShare:
        return (
          <IconShare width={width} height={height}/>
        );
        default:
          return (
            <></>
          )
    }
}

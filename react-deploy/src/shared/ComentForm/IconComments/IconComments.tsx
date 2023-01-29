import React from 'react';
import { IconChat, IconFastenFile, IconFile, IconFont, IconImage, IconLoad, IconParentheses, IconPdf, IconPeople, IconReddit, IconUpdate, IconVoice } from '../../icons/Index';
import styles from './iconcomments.css';

export function IconComments() {
  return (
    <ul className={styles.ulModalComments}>
      <li className={styles.liModalComments}><IconParentheses></IconParentheses></li>
      <li className={styles.liModalComments}><IconImage></IconImage></li>
      <li className={styles.liModalComments}><IconFile></IconFile></li>
      <li className={styles.liModalComments}><IconLoad></IconLoad></li>
      <li className={styles.liModalComments}><IconPeople></IconPeople></li>
      <li className={styles.liModalComments}><IconUpdate></IconUpdate></li>
      <li className={styles.liModalComments}><IconFastenFile></IconFastenFile></li>
      <li className={styles.liModalComments}><IconVoice></IconVoice></li>
      <li className={styles.liModalComments}><IconChat></IconChat></li>
      <li className={styles.liModalComments}><IconReddit></IconReddit></li>
      <li className={styles.liModalComments}><IconFont></IconFont></li>
      <li className={styles.liModalComments}><IconPdf></IconPdf></li>
    </ul>
  );
}

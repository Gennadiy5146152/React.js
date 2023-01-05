import { hot } from "react-hot-loader/root";
import * as React from "react";
import styles from "./header.css";
import { ConcatLine } from "./ConcatLine";

function HeaderComponent() {
  return (
    <header>
      <h1 className={styles.example}>Hslo Rseaact(hello)</h1>
      <ConcatLine a={'1'} b={'2'}/>
    </header>
  );
}

export const Header = hot(HeaderComponent);


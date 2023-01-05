import { hot } from "react-hot-loader/root";
import * as React from "react";
import styles from "./header.css";

interface ContactLineProps {
    a: string,
    b: string
  }
  export function ConcatLine(props: ContactLineProps) {
  const concat = () => {
    return props.a + props.b;
  }
    return (
      <header>
        <h1 className={styles.example}>{concat()}</h1>
      </header>
    );
  }

type withDataType = {
    howIDoIt: string,
    simeArray: Array<string | number>,
}

interface MySecondInterface {
    howIDoIt: string,
    simeArray: Array<string | number>,
    withData: Array<withDataType>,
}
    
  const MyHometask: MySecondInterface = {
    howIDoIt: "I Do It Wel",
    simeArray: ["string one", "string two", 42],
     withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
}
const myArray: MyArray<number> = [1,2,3];

interface MyArray<T> {
    [N: number]: T;
    reduce<K>(callbackfn: (previousValue: K, currentValue: T, currentIndex: number, array: T[]) => K, initialValue: K): K;
}

const initialValue = 0;
myArray.reduce((accumulator, value) => accumulator + value, initialValue); 
console.log(myArray.reduce((accumulator, value) => accumulator + value, initialValue));


interface IHomeTask {
    data: string;
    numbericData: number;
    date: Date;
    externalData: {
        basis: number;
        value: string;
    }
}
type MyPartial<T> = {
    [N in keyof T]?: T[N] extends object ? MyPartial<T[N]> : T[N];
}

const homeTask:  MyPartial<IHomeTask> = {
  externalData: {
      value: 'win'
  }
}
console.log(homeTask)

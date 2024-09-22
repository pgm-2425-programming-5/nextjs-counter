// components/CounterDisplay.tsx
import styles from './styles/CounterDisplay.module.css';
import { ReactNode } from 'react';

const CounterDisplay = ({ count }: { count: number}) => {
  return <div className={styles.display}>Current Count: {count}</div>;
};

export default CounterDisplay;

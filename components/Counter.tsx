'use client';

import { useState } from 'react';
// components/Counter.tsx
import CounterButton from './CounterButton';
import CounterDisplay from './CounterDisplay';
import styles from './styles/Counter.module.css';

const Counter = () => {
  const [count, setCount]= useState<number>(0) ;

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  
  return (
    <div className={styles.counterWrapper}>
      <CounterDisplay count={count} />
      <div className={styles.buttonGroup}>
        <CounterButton onClick={increment} color="green">Increment</CounterButton>
        <CounterButton onClick={decrement} color="red">Decrement</CounterButton>
      </div>
    </div>
  );
};

export default Counter;

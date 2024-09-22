'use client';

// components/Counter.tsx
import CounterButton from './CounterButton';
import CounterDisplay from './CounterDisplay';
import { useCounter } from './CounterContext';
import styles from './styles/Counter.module.css';

const Counter = () => {
  const { increment, decrement } = useCounter();

  return (
    <div className={styles.counterWrapper}>
      <CounterDisplay />
      <div className={styles.buttonGroup}>
        <CounterButton onClick={increment}>Increment</CounterButton>
        <CounterButton onClick={decrement}>Decrement</CounterButton>
      </div>
    </div>
  );
};

export default Counter;

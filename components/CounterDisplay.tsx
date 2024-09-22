// components/CounterDisplay.tsx
import styles from './styles/CounterDisplay.module.css';
import { useCounter } from './CounterContext';

const CounterDisplay = () => {
  const { count } = useCounter();
  return <div className={styles.display}>Current Count: {count}</div>;
};

export default CounterDisplay;

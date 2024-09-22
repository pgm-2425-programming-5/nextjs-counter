// components/CounterButton.tsx
import styles from './styles/CounterButton.module.css';

interface CounterButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const CounterButton = ({ onClick, children }: CounterButtonProps) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default CounterButton;

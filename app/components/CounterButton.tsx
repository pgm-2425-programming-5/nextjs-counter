// components/CounterButton.tsx
import styles from './styles/CounterButton.module.css';

interface CounterButtonProps {
  onClick: () => void;
  color?: string;
  children: React.ReactNode;
}

const CounterButton = ({ onClick, color, children }: CounterButtonProps) => {
  const buttonColor = styles[color === 'green' ? 'green' : 'red'];
  return (
    <button className={`${styles.button} ${buttonColor}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default CounterButton;

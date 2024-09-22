// pages/index.tsx
import { CounterProvider } from '../components/CounterContext';
import Counter from '../components/Counter';

const Home = () => {
  return (
    <CounterProvider>
      <Counter />
    </CounterProvider>
  );
};

export default Home;

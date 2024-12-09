import React, { useState } from "react";

interface CounterProps {
  count: number;
  increment: () => void;
}

const Counter: React.FC<CounterProps> = ({ count, increment }) => {
  return(
    <div className="container mx-auto bg-indigo-900 text-center py-4 lg:px-4 text-white">
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  ) 
};

const LiftingState: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount(count + 1);

  return (
    <div>
      <Counter count={count} increment={increment} />
      <Counter count={count} increment={increment} />
    </div>
  );
};

export default LiftingState;

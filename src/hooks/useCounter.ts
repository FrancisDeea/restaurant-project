import { useState } from "react";

export default function useCounter() {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter((prevCounter) => prevCounter + 1);
  const decrement = () => setCounter((prevCounter) => prevCounter - 1);

  return {
    counter,
    increment,
    decrement,
  };
}

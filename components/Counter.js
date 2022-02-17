import { useState } from "react";

export default function Counter() {
  const [counterNumber, setCounterNumber] = useState(0);

  const incrementCounter = () => setCounterNumber((prevState) => prevState + 1);

  const decrementCounter = () => setCounterNumber((prevState) => prevState - 1);

  const resetCounter = () => setCounterNumber(() => 0);

  return (
    <div id="Counter">
      <div data-testid="tCounterNumber">{`${counterNumber}`}</div>
      <button onClick={incrementCounter} type="button">
        Increment
      </button>
      <button onClick={decrementCounter} type="button">
        Decrement
      </button>
      <button onClick={resetCounter} type="reset">
        Reset
      </button>
    </div>
  );
}

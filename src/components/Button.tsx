import { useState } from "react";

type ButtonProps = {
  children?: String;
  text?: String;
};

export function Button1(props: ButtonProps) {
  return <button>{props.text || props.children}</button>;
}

export function Button2() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  function decrement() {
    setCounter(counter - 1);
  }

  return (
    <button onClick={increment} onAuxClick={decrement}>
      {counter}
    </button>
  );
}

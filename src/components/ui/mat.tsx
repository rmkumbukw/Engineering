export function Mats() {
  return <h1>Hello</h1>;
}

//Learning components and props

//creat the props
type CardProps = {
  title: string;
  count?: number; //? means optional
};

//create the component
export default function Cards({ title, count = 0 }: CardProps) {
  return (
    <div>
      <h2>{title}</h2>
      <p>Items: {count}</p>
    </div>
  );
}

// using data that changes useState

import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

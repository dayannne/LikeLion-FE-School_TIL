// import { useState } from 'react';
import React from 'react';

function Coint() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
    </div>
  );
}
export default Coint;

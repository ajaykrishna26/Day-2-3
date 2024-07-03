

import React, { useState } from 'react';

const Count =() => {
    var [count,setCount] = useState(0);

  const increment = (e) => {
    setCount(count=count + 1);
  };

  const decrement = (s) => {
    setCount(count=count - 1);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Count;
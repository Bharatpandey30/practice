import React, { useState } from 'react';
import Child from './Child';

function Parent() {
  const [parent, setParent] = useState(0);
  const [child, setChild] = useState(0);

  const changeHandle = () => {
    setParent(parent + 1);
  }

  const negativeHandleChange = () => {
    setChild(child - 1);
  }

  return (
    <div>
      <h1> {parent}</h1>
      <button onClick={changeHandle}>increment</button>

      <h1> {child}</h1>
      <button onClick={negativeHandleChange}>decrement</button>

      <Child count={child} />
    </div>
  );
}

export default Parent;

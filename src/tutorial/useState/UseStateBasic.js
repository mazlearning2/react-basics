import { useState } from "react";

const UseStateBasic = () => {
  const [count, setCount] = useState(0);
  const clickHandler = () => {
    setCount(2);
  };
  return (
    <div className="use-state-basic">
      <h4>You clicked {count} item</h4>
      <button type="button" onClick={clickHandler}>
        Click Me
      </button>
    </div>
  );
};

export default UseStateBasic;

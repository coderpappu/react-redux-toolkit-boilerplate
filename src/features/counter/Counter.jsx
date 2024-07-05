import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  selectCount,
} from "./CounterSlice";
const Counter = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div>
      counter {count}
      <div>
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          Increament By Value
        </button>
        <button
          onClick={() => {
            dispatch(incrementByAmount(5));
          }}
        >
          Increament By Value
        </button>
      </div>
    </div>
  );
};

export default Counter;

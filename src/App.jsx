import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, changeText } from "./redux/Counter";
import { getStudent } from "./redux/Student";
import React, { useEffect } from "react";
import "./App.css";

function App() {

  const counter = useSelector((store) => store.counter);
  const color = useSelector((store) => store.counter);
  const store = useSelector((store) => store.student);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStudent());
  }, []);

  return (
    <div className="App">
      Redux Toolkit {counter.data}
      <div>
        <h1>{color.text}</h1>
        <button onClick={() => dispatch(changeText("Hello world"))}>
          Change color
        </button>
      </div>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement({ a: 5 }))}>-</button>
        {store.student?.map((value, index) => {
          return (
            <div key={index}>
              <h1>{value.name}</h1>;
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;

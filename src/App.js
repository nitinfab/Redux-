import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "./actions/index";
import "./App.css";

function App() {
  const add = useSelector((state) => state.add);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1> Increment the count {add} </h1>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
}

export default App;

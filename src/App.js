import "./App.css";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bugAdded, bugDesUpdated, bugRemoved, bugResolved } from "./actions";
import ListItem from "./ListItem";
import { FaFontAwesome } from "react-icons/fa";

function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <ul style={{ listStyle: "none", rowGap: 10 }}>
          {state.map((item) => {
            return (
              <li key={item.id}>
                <ListItem item={item} bugDesUpdated={bugDesUpdated} />
              </li>
            );
          })}
        </ul>
        <h1>
          {state.length} tickets,
          {state.filter((bug) => bug.resolved === true).length} resolved
        </h1>
        <button onClick={() => dispatch(bugAdded())}>Add</button>
        <button onClick={() => dispatch(bugResolved(state.length - 1))}>
          Resolve
        </button>
        <button onClick={() => dispatch(bugRemoved(state.length))}>
          Remove
        </button>
      </div>
      <div className="App">
        <header className="App-header"></header>
      </div>
    </div>
  );
}

export default App;

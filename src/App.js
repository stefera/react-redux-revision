import logo from "./logo.svg";
import "./App.css";
import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bugAdded, bugResolved } from "./actions";

function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <h1> {state.length}</h1>
        <button onClick={() => dispatch(bugAdded())}>dispatch</button>
        <button onClick={() => dispatch(bugResolved(state.length - 1))}>
          resolve
        </button>
      </div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </div>
  );
}
App.contextTypes = {
  store: React.propTypes,
};

export default App;

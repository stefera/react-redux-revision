import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./store";
import * as actions from "./actions";

console.clear();

///GET STATE
console.log(store.getState());

///SUBSCRIBE- function that is executed any time any action is dispatched in store

/// DISPATCH- disaptches an action to the store. In our reducer.js, we have a pure function that runs conditionally on a type "bugAdded"
/// state = reducer(state,action)
/// notify the subscribers

store.dispatch(actions.bugAdded("Bug1"));

const unsubscribe = store.subscribe(() => {
  console.log("Store changed!", store.getState());
});

store.subscribe(() => {
  console.log("Store changed!", store.getState());
});

unsubscribe();

store.dispatch(actions.bugRemoved());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

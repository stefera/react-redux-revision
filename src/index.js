import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./store";
import * as actions from "./actions";
import { Provider } from "react-redux";

console.clear();

// console.log(store.getState());

// store.dispatch(actions.bugAdded("Bug1"));

// const unsubscribe = store.subscribe(() => {
// console.log("Store changed!", store.getState());
// });

// store.subscribe(() => {
// console.log("Store changed!", store.getState());
// });

// unsubscribe();

// store.dispatch(actions.bugRemoved());

//Exercise 1 resolve a bug (mark as resolved= true)

//creating unsubscribe
const unsubscribe = store.subscribe(() => {
  console.log("State changed!", store.getState());
});

store.getState();
store.subscribe(() => {
  console.log("State changed!", store.getState());
});

store.dispatch(actions.bugAdded("Bug 1"));
store.dispatch(actions.bugResolved(1));
unsubscribe();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

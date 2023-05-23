import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./store";
import * as actions from "./actions";
import { Provider } from "react-redux";
import * as Sentry from "@sentry/react";

console.clear();

// Sentry.init({
//   dsn: "https://76ef7436dcbe410cabe54adc58b8b222@o4505232536567808.ingest.sentry.io/4505232538402816",
//   integrations: [new Sentry.BrowserTracing(), new Sentry.Replay()],
//   // Performance Monitoring
//   tracesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
//   // Session Replay
//   replaysSessionSampleRate: 1.0, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
//   replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
// });

// Notes to ignore
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
// const unsubscribe = store.subscribe(() => {
//   console.log("State changed!", store.getState());
// });

// store.getState();
// store.subscribe(() => {
//   console.log("State changed!", store.getState());
// });

// store.dispatch(actions.bugAdded("Bug 1"));
// store.dispatch(actions.bugResolved(1));
// unsubscribe();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

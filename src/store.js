import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
import * as Sentry from "@sentry/react";

const logger = (store) => (next) => (action) => {
  console.log("dispatching", action);
  let result = next(action);
  console.log(result);
  console.log("next state", store.getState());
};

const crashReporter = (store) => (next) => (action) => {
  try {
    return next(action);
  } catch (err) {
    console.error("caught an error", err);
    Sentry.captureException(err, {
      extra: {
        action,
        state: store.getState(),
      },
    });
    throw err;
  }
};

// ("old method");
// const store = legacy_createStore(
//   reducer,
//   applyMiddleware(logger, crashReporter)
// );

// ("new method");
const store = configureStore({
  reducer,
  middleware: [logger, crashReporter],
});

export default store;

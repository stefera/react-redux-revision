import * as actions from "./actionTypes"; ///importing all of the hardcoded action statements
import { combineReducers } from "redux";
import { bugAdded, bugResolved } from "./actions";
import { createReducer } from "@reduxjs/toolkit";

let lastId = 0;

// createReducer is a function that returns a function (the reducer)

const reducer = createReducer([], (builder) =>
  builder
    .addCase(bugAdded, (state, action) => {
      state.push({
        id: ++lastId,
        description: action.payload?.description,
        resolved: false,
      });
    })
    .addCase(bugResolved, (state, action) => {
      const i = state.findIndex((bug) => bug.id === action.payload);
      state[i].resolved = !state[i].resolved;
    })
);

export default reducer;

// export default function reducer(state = [], action) {
//   console.log(combineReducers);
//   if (action.type === bugAdded.type) {
//     return [
//       ...state,
//       {
//         id: ++lastId,
//         description: action.payload.description,
//         resolved: false,
//       },
//     ];
//   } else if (action.type === actions.BUG_REMOVED) {
//     return state.filter((bug) => bug.id !== action.payload.id);
//   } else if (action.type === actions.BUG_RESOLVED) {
//     return state.map((bug) =>
//       bug.id === action.payload.id ? { ...bug, resolved: true } : bug
//     );
//   }

//   return state;
// }

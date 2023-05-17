import * as actionTypes from "./actionTypes";

export function bugRemoved() {
  return {
    type: actionTypes.BUG_REMOVED,
    payload: {
      id: "1",
    },
  };
}

export function bugAdded(description) {
  return {
    type: actionTypes.BUG_ADDED,
    payload: {
      description: "description",
    },
  };
}

export function bugResolved(id) {
  return {
    type: actionTypes.BUG_RESOLVED,
    payload: {
      id: id,
    },
  };
}

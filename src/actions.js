import * as actionTypes from "./actionTypes";

const createAction = (type) => {
  const action = (payload) => ({
    type,
    payload,
  });
  action.type = type;
  return action;
};

export function bugRemoved(id) {
  return {
    type: actionTypes.BUG_REMOVED,
    payload: id,
  };
}

export const bugAdded = createAction("bugAdded");

export const bugResolved = createAction("bugResolved");

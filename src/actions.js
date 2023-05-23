import * as actionTypes from "./actionTypes";

const createAction = (type) => {
  const action = (payload) => ({
    type,
    payload,
  });
  action.type = type;
  return action;
};

export const bugAdded = createAction("bugAdded");

export const bugResolved = createAction("bugResolved");

export const bugRemoved = createAction("bugRemoved");

export const bugDesUpdated = createAction("bugDesUpdated");

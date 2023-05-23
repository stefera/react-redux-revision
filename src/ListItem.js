import React from "react";
import { useState } from "react";
import { bugDesUpdated, bugResolved, bugRemoved } from "./actions";
import { useSelector, useDispatch } from "react-redux";
import { FaCheckCircle } from "react-icons/fa";

const ListItem = ({ item }) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [description, setDescription] = useState(
    item.description ? item.description : ""
  );
  const handleBugDesUpdated = () => {
    dispatch(bugDesUpdated({ id: item.id, description: description }));
  };

  const handleBugResolved = () => {
    dispatch(bugResolved(item.id));
  };

  const handleBugRemoved = () => {
    dispatch(bugRemoved(item.id));
  };

  return (
    <div>
      {/* name */}
      <pre style={{ fontSize: 18 }}>
        {item.removed ? (
          <span style={{ textDecoration: "line-through" }}>bug{item.id}</span>
        ) : item.resolved ? (
          <span style={{ color: "dark-green" }}>bug{item.id}</span>
        ) : (
          <span>bug{item.id}</span>
        )}{" "}
        {" | "} {/* description input */}
        <input
          value={description}
          placeholder="Add a bug description"
          onChange={(e) => setDescription(e.target.value)}
        ></input>{" "}
        <button onClick={handleBugDesUpdated}>Save</button> {" | "}{" "}
        {item.resolved ? (
          <span style={{ color: "green" }}>Resolved</span>
        ) : (
          <span>Pending</span>
        )}{" "}
        {" | "}
        {/* button1 */}
        <button disabled={item.removed} onClick={handleBugResolved}>
          {item.resolved ? "Mark as pending" : "Mark as resolved"}
        </button>{" "}
        {" | "} {/* button2 */}
        {item.resolved ? (
          <button onClick={handleBugRemoved}>
            {" "}
            {/* Call the handleBugRemoved function */}
            {item.removed ? "Restore" : "Remove"}
          </button>
        ) : null}
      </pre>
    </div>
  );
};

export default ListItem;

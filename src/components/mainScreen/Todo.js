import React from "react";
import "./todo.css";
import DeleteIcon from "@material-ui/icons/Delete";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
const Todo = ({ todo }) => {
  return (
    <div className="todo">
      <h5>{todo}</h5>
      <div className="delete">
        <HighlightOffIcon className="delete__Button" />
      </div>
    </div>
  );
};

export default Todo;

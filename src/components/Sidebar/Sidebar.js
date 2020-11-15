import React, { useEffect, useState } from "react";
import SidebarHeader from "./SidebarHeader";
import "./Sidebar.css";
import AddIcon from "@material-ui/icons/Add";
import { useDispatch } from "react-redux";
import { addTodo } from "../../features/todos/todoSlice";
import db, { auth } from "../../Firebase";
import firebase from "firebase";

const Sidebar = () => {
  const [input, setinput] = useState("");
  const dispatch = useDispatch();
  const [todos, setTodos] = useState([]);
  const AddTodo = () => {
    // dispatch(addTodo({ todo: input }));
    if (input) {
      db.collection("todoList").add({
        todo: input,
        des: "i am todo",
      });
      setinput("");
    }
  };
  useEffect(async () => {
    db.collection("todoList").onSnapshot((snapshot) => {
      // const value = snapshot.docs.map((doc) => ({
      //   id: doc.id,
      //   todo: doc.data(),
      // }));

      dispatch(
        addTodo(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            todo: doc.data(),
          }))
        )
      );
    });
  }, []);
  return (
    <div className="sidebar">
      <SidebarHeader />
      <input
        className="input"
        value={input}
        onChange={(e) => {
          setinput(e.target.value);
        }}
        placeholder="write something"
      />

      <div onClick={AddTodo} className="addTodo_button">
        <h4 className="btn__text">Add Todo</h4>
        <AddIcon className="add_Icon" />
      </div>
    </div>
  );
};

export default Sidebar;

import React, { useState, useEffect } from "react";
import "./MainScreen.css";
import Todo from "./Todo";
import db, { auth } from "../../Firebase";
import { addTodo, selectTodo } from "../../features/todos/todoSlice";
import { useDispatch, useSelector } from "react-redux";

const MainScreen = () => {
  const todos = useSelector(selectTodo);

  useEffect(async () => {}, []);
  return (
    <div className="mainScreen">
      <div className="main__header">
        <h1>TODOMO</h1>
      </div>
      <div className="todo_list">
        {todos.map((todo) => {
          return <Todo todo={todo.todo.todo} key={todo.id} />;
        })}
      </div>
    </div>
  );
};

export default MainScreen;

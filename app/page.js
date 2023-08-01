"use client";

import React, { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue.trim()]);
      setInputValue("");
    }
  };

  const removeTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div className="flex flex-col">
      <h1>Mini To-Do App</h1>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter your task"
        />
        <button onClick={addTodo} className="p-4 border-slate-500">
          Add
        </button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button
              onClick={() => removeTodo(index)}
              className="p-4 border-slate-500"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

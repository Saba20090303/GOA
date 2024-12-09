import React, { useState } from 'react';

function App() {

const [inputValue, setInputValue] = useState("");
const [todoList, setTodoList] = useState([]);
const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
const addTodo = () => {
    if (inputValue.trim() !== "") {
        setTodoList([...todoList, inputValue]);
        setInputValue("");
    }
  };
  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a task"
      />
      <button onClick={addTodo}>Add Task</button>
      <ul>
        {todoList.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
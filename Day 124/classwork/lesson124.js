const App = () => {
    return (
      <div>
        <h1>Welcome to My React App!</h1>
        <p>This is a React application built with JSX, React, and ReactDOM.</p>
        <Counter />
        <TodoList />
      </div>
    );
  };

const Counter = () => {
const [count, setCount] = React.useState(0);
const increment = () => {
    setCount(count + 1);
};
return (
<div>
<h2>Counter: {count}</h2>
<button onClick={increment}>Increment</button>
</div>
);
};
const TodoList = () => {
const [todos, setTodos] = React.useState([]);
const [input, setInput] = React.useState("");
const addTodo = () => {
    if (input) {
        setTodos([...todos, input]);
        setInput("");
    }
    };
    return (
      <div>
        <h2>Todo List</h2>
        <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter todo"/>
        <button onClick={addTodo}>Add Todo</button>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>
    );
  };

  ReactDOM.render(<App />, document.getElementById('root'));

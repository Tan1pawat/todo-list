import React, { useState } from 'react';
import { useTheme } from '../hooks/useTheme'

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState('');
  const { theme } = useTheme()

  const addTodo = () => {
    if (input) {
      setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
      setInput('');
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4 dark:text-white">Todo List</h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow p-2 border rounded-l dark:bg-gray-700 dark:text-white"
          placeholder="Add a new todo"
        />
        <button onClick={addTodo} className="bg-blue-500 text-white p-2 rounded-r">Add</button>
      </div>
      <ul>
        {todos.map(todo => (
          <li
            key={todo.id}
            onClick={() => toggleTodo(todo.id)}
            className={`p-2 cursor-pointer ${
              todo.completed ? 'line-through text-gray-500' : ''
            } dark:text-white`}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
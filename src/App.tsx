import './App.css';
import TodoList from './Components/Todolist';
import Sidebar from './Components/Share/Sidebar';
import { ThemeToggle } from './Components/Share/ThemeToggle';

const App: React.FC = () => {
  return (
    <div className="App flex min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <Sidebar />
      <main className="flex-grow p-4">
        <div className="flex justify-end mb-4">
          <ThemeToggle />
        </div>
        <TodoList />
      </main>
    </div>
  )
}

export default App;

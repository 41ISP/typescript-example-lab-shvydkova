import { useState, type FormEvent, type SubmitEvent } from 'react'
import { TodoButton } from './components/FilterButton'
import { initialFormData, TodoForm, type IFormData } from './components/TodoForm'
import { TodoList } from './components/TodoList'

export interface ITodo {
  id: number,
  name: string,
  completed: boolean
}

function App() {
  const [filter, setFilter] = useState("")
  const [formData, setFormData] = useState<IFormData>(initialFormData)
  const [todos, setTodos] = useState<ITodo[]>(() => {
    const saved = localStorage.getItem("todos")
    return saved ? JSON.parse(saved) : []
  })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newTodo = {
      ...formData,
      id: Date.now()
    }
    setTodos((old) => [...old, newTodo])
    setFormData(initialFormData)
  }

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleDelete = (id: number) => {
    setTodos(old => old.filter(el => id !== el.id))
  }

  const getFilteredTodos = () => {
    if (filter === 'active') {
      return todos.filter(todo => !todo.completed);
    }
    if (filter === 'completed') {
      return todos.filter(todo => todo.completed);
    }
    return todos;
  };

  return (
    <div className="app-container">
      <h1 className="app-title">📝 Мои задачи</h1>
      <TodoForm formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} />
      <TodoButton getFilteredTodos={getFilteredTodos}/>
      <TodoList handleDelete={handleDelete} toggleTodo={toggleTodo} todos={todos} />
    </div>
  )
}

export default App

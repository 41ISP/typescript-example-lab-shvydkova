import { useState, type SubmitEvent } from 'react'
import { TodoButtton } from './components/FilterButton'
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

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newTodo = {
      ...formData,
      id: Date.now()
    }
    setTodos((old) => [...old, newTodo])
    setFormData(initialFormData)
  }

  return (
      <div className="app-container">
        <h1 className="app-title">📝 Мои задачи</h1>
        <TodoForm formData={formData} setFormData={setFormData} handleSubmit={handleSubmit}/>
        <TodoButtton />
        <TodoList />
      </div>
  )
}

export default App

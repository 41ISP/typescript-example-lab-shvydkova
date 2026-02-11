import type { ITodo } from "../App"

interface IItemProps extends ITodo{
    toggleTodo: (id: number) => void
    handleDelete: (id: number) => void
}

export const TodoItem = ({ handleDelete, toggleTodo, name, completed, id }: IItemProps) => {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        className="todo-checkbox"
        checked={completed}
        onChange={() => toggleTodo(id)}
      />

      <span className={`todo-text ${completed ? 'completed' : ''}`}>
        {name}
      </span>
      <button
        className="btn btn-delete" onClick={() => handleDelete(id)}>
        Удалить
      </button>
    </div>
  )
}

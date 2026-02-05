export const TodoItem = () => {
    return(
         <div className="todo-item">
            <input
              type="checkbox"
              className="todo-checkbox"
            />
            <span className="todo-text">
              Изучить React Hooks
            </span>
            <button className="btn btn-delete">
              Удалить
            </button>
          </div>
    )
}

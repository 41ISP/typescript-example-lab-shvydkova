import type { ITodo } from "../App"

interface IButtonProps {
    getFilteredTodos: ITodo
}
export const TodoButton = ({getFilteredTodos}: IButtonProps) => {
    return(
        <div className="filter-buttons">
          <button className="btn btn-filter active">
            Все
          </button>
          <button className="btn btn-filter">
            Активные
          </button>
          <button className="btn btn-filter">
            Завершённые
          </button>
        </div>
    )
}

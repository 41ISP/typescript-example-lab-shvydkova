import type { ITodo } from "../App"
import { TodoItem } from "./TodoItem"

interface IListProps {
    todos: ITodo[]
    toggleTodo: (id: number) => void
    handleDelete: (id: number) => void
}

export const TodoList = ({handleDelete, todos, toggleTodo}: IListProps) => {

    return (
        <ul className="todo-list">
            {todos.map(el => (
                <TodoItem handleDelete={handleDelete} toggleTodo={toggleTodo} {...el} />))}
        </ul>
    )
}

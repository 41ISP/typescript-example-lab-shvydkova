import { useEffect, type ChangeEvent, type Dispatch, type FormEvent, type SetStateAction, type SubmitEvent } from "react"
import type { ITodo } from "../App"

export type TCategory = "all" | "completed" | "active"
export interface IFormData extends Omit<ITodo, "id"> { }

export const initialFormData = {
    name: "",
    completed: false
} as IFormData

interface IFormProps {
    formData: IFormData,
    setFormData: Dispatch<SetStateAction<IFormData>>,
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void
}

export const TodoForm = ({ handleSubmit, formData, setFormData }: IFormProps) => {

    const handleFormChange = (
        e: ChangeEvent<HTMLInputElement>
    ) => {
        const { name, value } = e.target
        setFormData((old) => ({ ...old, [name]: value }))
    }

    useEffect(() => { console.log(formData) }, [formData])

    return (
        <form onSubmit={handleSubmit} className="todo-form">
            <input onChange={handleFormChange} name="name" value={formData.name}
                type="text"
                className="todo-input"
                placeholder="Введите новую задачу..."
            />
            <button type="submit" className="btn btn-add">
                Добавить
            </button>
        </form>

    )
}

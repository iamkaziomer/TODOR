import {useState} from "react"
export default function ToDoInput (props){
    const {handleUpdateTodos,todoValue,setTodoValue}= props

    return (
        <header>
            <input value={todoValue} onChange={(e)=>{
                setTodoValue(e.target.value)
            }} placeholder="Enter Your Task Here" />
            <button onClick={()=>{
                handleUpdateTodos(todoValue)
                setTodoValue('')
            }}>Add Task</button>
        </header>
    )
}
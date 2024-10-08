import React from 'react'
import { useState, useEffect } from 'react'
import ToDoInput from './components/ToDoInput'
import ToDoList from './components/ToDoList'

function App() {
const [todos,setTodos] = useState([])
const [todoValue,setTodoValue] = useState('')
function persists(newlist){
  localStorage.setItem('todos',JSON.stringify({todos: newlist}))
}
function handleUpdateTodos(newTodo){
  const newTodoList = [...todos,newTodo]
  persists(newTodoList)
  setTodos(newTodoList)
}
function handleDelete(index){
  const newTodoList = todos.filter((todos,todoIndex)=>{
    return todoIndex!==index
  })
  persists(newTodoList)
  setTodos(newTodoList);
}
function handleEdit(index){
  const valueToBeEdited = todos[index]
  setTodoValue(valueToBeEdited)
  handleDelete(index)

}
useEffect(()=>{
  if(!localStorage){
    return
  }
  let localTodos = localStorage.getItem('todos')
  if(!localTodos){
    return
  }
  console.log(localTodos)
  localTodos=JSON.parse(localTodos).todos
  setTodos(localTodos)
},[])

  return (
    <>
      <ToDoInput handleUpdateTodos = {handleUpdateTodos} todoValue={todoValue} setTodoValue={setTodoValue}/>
      <ToDoList handleDelete={handleDelete} handleEdit={handleEdit}todoitem = {todos}/>
    </>
  )
}

export default App

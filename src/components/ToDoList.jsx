import React from 'react'
import ToDoCard from './ToDoCard';

function ToDoList(props) {
const {todoitem} = props;
    return (
        <ul className='main'>
            {todoitem.map((todo, todoIndex) => {
                return (
                    <ToDoCard {...props} key={todoIndex} index = {todoIndex}>
                        <p>{todo}</p>
                    </ToDoCard>
                )
            })}
        </ul>
    )
}

export default ToDoList

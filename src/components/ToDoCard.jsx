import React from 'react'

function ToDoCard(props) {
    const {children,handleDelete,index,handleEdit} = props
    return (
        <div>
            <li className='todoItem'>
                {children}
                <div className="actionsContainer">
                    <button onClick={()=>{
                        handleEdit(index)
                    }}>
                    <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button onClick={()=>{
                        handleDelete(index)
                    }}>
                    <i class="fa-solid fa-trash"></i>
                    </button>
                    
                </div>
            </li>
        </div>
    )
}

export default ToDoCard

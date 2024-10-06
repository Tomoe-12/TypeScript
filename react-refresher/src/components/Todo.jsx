/* eslint-disable react/prop-types */
import React from 'react'

const Todo = ({ todo ,i }) => {
    return (
        <div>
            <div key={i} className='bg-black text-white p-3 rounded'>
                <h3>{todo.title}</h3>
                <p>status : {todo.completed ? 'completed' : 'progress'}</p>
            </div>
        </div>
    )
}

export default Todo
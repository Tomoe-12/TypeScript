/* eslint-disable react/prop-types */
import { useState } from 'react'


const Search = ({ todos, setTodos }) => {
    const [searchKey, setSearchKey] = useState('')


    const searchTodos = () => {
        const filteredTodos = todos.filter(todo => todo.title.toLowerCase().includes(searchKey.toLowerCase()))
        setTodos(filteredTodos)
        setSearchKey('')
    }
    
    return (
        <div>
            <h1 className='text-5xl font-bold text-center my-4 uppercase'>React Exercises</h1>
            <input type="text" value={searchKey} onChange={(e) => { setSearchKey(e.target.value) }} className='border border-black focus:none rounded-md p-1 w-3/4' />
            <button className='bg-black text-white p-2 rounded ms-3 text-sm' onClick={searchTodos}>search</button>
        </div>
    )
}

export default Search
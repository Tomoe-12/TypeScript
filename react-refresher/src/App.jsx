import { useEffect, useState } from 'react'
import Todo from './components/Todo'

const App = () => {
  const [todos, setTodos] = useState([])
  const [searchKey, setSearchKey] = useState('')

  const fetchTodos = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await res.json()
    setTodos(data)

  }
  const searchTodos = () => {
    const filteredTodos = todos.filter(todo => todo.title.toLowerCase().includes(searchKey.toLowerCase()))
    setTodos(filteredTodos)
    setSearchKey('')
  }
  useEffect(() => {
    fetchTodos()
  }, [])
  return (
    <section className='w-1/2 mx-auto'>
      <div>
        <div>
          <h1 className='text-5xl font-bold text-center my-4 uppercase'>React Exercises</h1>
          <input type="text" value={searchKey} onChange={(e) => { setSearchKey(e.target.value) }} className='border border-black focus:none rounded-md p-1 w-3/4' />
          <button className='bg-black text-white p-2 rounded ms-3 text-sm' onClick={searchTodos}>search</button>
        </div>
        <p className='text-right mt-5 font-medium'>total todos - {todos.length}</p>
        <div className='grid grid-cols-2 gap-3 mt-6'>
          {
            todos.length ?
              todos.map((todo, i) => (
                <Todo key={i} todo={todo} />
              ))
              : <p className='text-center text-2xl text-red-500 font-bold mt-10'>No todos found </p>
          }
        </div>
      </div>
    </section>
  )
}

export default App
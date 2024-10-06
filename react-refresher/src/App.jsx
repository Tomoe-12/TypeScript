import { useEffect, useState } from 'react'
import Todo from './components/Todo'
import Search from './components/Search'

const App = () => {
  const [todos, setTodos] = useState([])
 
  const fetchTodos = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await res.json()
    setTodos(data)

  }

  useEffect(() => {
    fetchTodos()
  }, [])
  return (
    <section className='w-1/2 mx-auto'>
      <div>
      <Search todos={todos} setTodos={setTodos}/>
       
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
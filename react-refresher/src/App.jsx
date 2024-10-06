import { useEffect, useState } from 'react'

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
        <div>
          <h1 className='text-5xl font-bold text-center my-4 uppercase'>React Exercises</h1>
          <input type="text" className='border border-black focus:none rounded-md p-1 w-3/4' />
          <button className='bg-black text-white p-2 rounded ms-3 text-sm'>search</button>
        </div>
        <div className='grid grid-cols-2 gap-3 mt-6'>
          {
            todos.map((todo, i) => (
              <div key={i} className='bg-black text-white p-3 rounded'>
                <h3>{todo.title}</h3>
                <p>status : {todo.completed ? 'completed' : 'progress'}</p>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default App
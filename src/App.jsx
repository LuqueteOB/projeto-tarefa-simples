import { useState } from 'react'
import './App.css'

function App() {
  
  const [inputValue, setInputValue] = useState(``)
  const [textAreaValue, setTextAreaValue] = useState(``)


  const [todos, setTodos] = useState([
    {
      id: 1,
      title: `Primeira tarefa`,
      description: `Descricao da primeira tarefa`
    },
    {
      id: 2,
      title: `Segunda Tarefa`,
      description: `Descricao da segunda tarefa`
    },
    {
      id: 3,
      title: `Terceira Tarefa`,
      description: `Descricao da tarceira tarefa`
    }
    
  ])
  
  function handleAddNewTodos(event) {
    event.preventDefault()
    
    setTodos((todo) => {
      const NewTodo = {
        title: inputValue,
        description: textAreaValue
      }
      return [...todos, NewTodo]
    })

    setInputValue(``)
    setTextAreaValue(``)
  }

   function handleAddRemoveTodos(id) {
     const newTodoList =todos.filter((todo) => todo.id !== id)
   setTodos(newTodoList)
    }

  return (
    <>
     <header>
      <h1>ToDo List</h1>
     </header>

     <main>
      <div>
        <form onSubmit={handleAddNewTodos}>
        <input value={inputValue} onChange={(event) => setInputValue(event.target.value)} type="text" placeholder='Adicionar um titulo' className='todo-input' />
        <textarea value={textAreaValue} onChange={(event) => setTextAreaValue(event.target.value)} type="text" placeholder='Adicionar um descrição' className='todo-textarea' />
       <button type="submit">Adicionar</button>
        </form>
      </div>
      <div className='todo-list-container'>
            {todos.map((todo, index) => (
              <div key={index}>
               <input type="checkbox" id={todo.title} onClick={() => handleAddRemoveTodos(todo.id)} />
              <label htmlFor={todo.title}>{todo.title}</label>
              <p>{todo.description}</p>
              </div>
            ))}
        </div>
        </main>

     <footer>
      <p>&copy; Todos os direitos reservados</p>
     </footer>
    </>
  )
}

export default App

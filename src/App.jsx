
import './App.css'
import AddTodo from './components/AddTodo'
import TodoProvider from './Context/TodoProvider'

function App() {
 

  return (
    <>
    <TodoProvider>
      <section>

      </section>
      <section>

      </section>

      <section>
        <AddTodo></AddTodo>
      </section>
    </TodoProvider>
     
    </>
  )
}

export default App

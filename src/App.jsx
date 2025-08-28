
import { useContext } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Banner from './components/Banner'
import Header from './components/Header'
import TodoProvider from './Context/TodoProvider'


function App() {
  

  return (
    <>
    <TodoProvider>
      <div className=''>
      <section className='' >
        <Header></Header>
      </section>
      <Banner></Banner>
      
      <section>
        <AddTodo></AddTodo>
      </section>
      </div>
    </TodoProvider>
     
    </>
  )
}

export default App

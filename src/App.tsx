import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ContadorReducer from './todoApp/components/ContadorReducer'
import Formulario from './todoApp/components/Formulario'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Todo App</h1>
      <ContadorReducer/>
      <hr />
      <h2>forms Managment</h2>
      <Formulario/>
    </div>
  )
}

export default App

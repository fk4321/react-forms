import { useState } from 'react'
import './App.css'
import SignUpForm from './components/SignUpForm'
import Authenticate from './components/Authenticate'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>Hello</p>
      < SignUpForm />
      < Authenticate />
    </div>
  )
}

export default App

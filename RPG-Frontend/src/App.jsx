import { useState } from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import './HomeStyle.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <header>
        <h1>RPG Chara World</h1>
      </header>

      <section>
        <Nav/>
        <Home/>
      </section>

      <footer>
        <p>For all the characters</p>
      </footer>
    </div>
  )
}

export default App

import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
          <nav>
              <ul>
                  <li>Home</li>
                  <li>Dialog</li>
                  <li>Buttons (coming soon)</li>
                  <li>Mobile Menu (coming soon)</li>
                  <li>Mega-Menu (coming soon)</li>
              </ul>
          </nav>
      </header>
      <h1>Little A11y Dialog</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App

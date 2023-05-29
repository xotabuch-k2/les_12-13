import { useState } from 'react'
import '../scss/App.scss'

function App() {
  const [count, setCount] = useState(666)

  return (
    <>
      <h1>Рот + Эбал</h1>
      <h2>РотЭбал этого проекта</h2>
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App

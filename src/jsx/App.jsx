import { useState } from 'react'
import '../scss/App.scss'

function App() {
  const [count, setCount] = useState(666)

  return (
    <>
    <div className='first'>
    <h1>Рот + Эбал</h1>
      <div className='sec'>
        <h2>РотЭбал этого проекта</h2>
        <div className='firSec'>
          <h2>Test Ebest</h2>
        </div>
      </div>
      

    </div>
    
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App

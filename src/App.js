
import { useState } from 'react';
import './App.css';

function App() {
  const [lock, setLock] = useState(true)
  return(
    <div className='container'>
      <img src={lock === true ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png': 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'} alt='img' className='img'/>
      <h1>{lock === true? 'Your Device is Locked' : 'Your Device is Unlocked' }</h1>
      <button onClick={() => setLock(pre => !pre)}>{lock === true ? 'Unlock' : 'Lock'}</button>
    </div>
  )
}

export default App;

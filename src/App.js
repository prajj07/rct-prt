import { useState } from 'react';
import './App.css';


const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <button onClick={() => setCount((prevCount) => prevCount -1)}>-</button>
    <h1>{count}</h1>
    <button onClick={() => setCount((add) => add + 1)}>+</button>
    
    </div>
  );
}

export default App;

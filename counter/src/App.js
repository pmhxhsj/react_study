import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const clickUp = () => {
    setCount((current) => current + 1);
  };

  const clickDown = () => {
    setCount((current) => current - 1);
  };

  const clickReset = () => {
    setCount((current) => 0);
  };

  return (
    <div className='App'>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button onClick={clickUp}>Up</button>
      <button onClick={clickDown}>Down</button>
      <button onClick={clickReset}>Reset</button>
    </div>
  );
}

export default App;

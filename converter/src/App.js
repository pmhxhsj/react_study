import { useState } from 'react';

function App() {
  const [input, setInput] = useState(0);
  const [enable, setEnable] = useState(false);

  const onChangeHours = (event) => {
    setInput(() => event.target.value);
  };

  const onChangeMinute = (event) => {
    setInput(() => event.target.value);
  };

  const onChangeType = () => {
    setEnable((current) => !current);
    setInput(() => 0);
  };

  return (
    <div className='App'>
      <h1>Time Converter</h1>
      <span>Hours</span>
      <input
        value={enable ? (input / 60).toFixed(1) : input}
        type='number'
        onChange={onChangeHours}
        disabled={enable}
      />
      <br />
      <span>Minutes</span>
      <input value={enable ? input : input * 60} type='number' onChange={onChangeMinute} disabled={!enable} />

      <br />
      <button onClick={onChangeType}>Change</button>
    </div>
  );
}

export default App;

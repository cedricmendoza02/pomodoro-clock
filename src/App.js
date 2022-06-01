import React, { useState } from 'react';
import { TimerControl, Timer } from './components';
import './App.css';

function App() {
  const [workMinutes, setWorkMinutes] = useState(25)
  const [breakMinutes, setBreakMinutes] = useState(5)
  const [isRunning, setIsRunning] = useState(false)

  const increase = (update) => {
    update(prevState => prevState < 60 ? prevState + 1 : prevState)
  }

  const decrease = (update) => {
    update(prevState => prevState > 0 ? prevState - 1 : prevState)
  }

  const startTimer = () => {
      setIsRunning(prevState => !prevState)
  }

  return (
    <div className="App">
      <h1>Pomodoro Clock</h1>
      <TimerControl 
        title="Work" 
        minutes={workMinutes}
        increase={() => increase(setWorkMinutes)}
        decrease={() => decrease(setWorkMinutes)}
        />
      <TimerControl 
        title="Break" 
        minutes={breakMinutes}
        increase={() => increase(setBreakMinutes)}
        decrease={() => decrease(setBreakMinutes)}
        />
      <div>
        <Timer 
          workMinutes={workMinutes}
          breakMinutes={breakMinutes}
          isRunning={isRunning}/>
          
          <button onClick={startTimer}>Start/Pause</button>
      </div>
    </div>
  );
}

export default App;

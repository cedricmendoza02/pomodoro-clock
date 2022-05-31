import React, { useState } from 'react';
import { TimerControl } from './components';
import './App.css';

function App() {
  const [currentTimer, setCurrentTimer] = useState()
  const [workMinutes, setWorkMinutes] = useState(25)
  const [breakMinutes, setBreakMinutes] = useState(5)

  const increase = (update) => {
    update(prevState => prevState + 1)
  }

  const decrease = (update) => {
    update(prevState => prevState - 1)
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
        current timer
      </div>
    </div>
  );
}

export default App;

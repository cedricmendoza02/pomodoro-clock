import React, { useState } from 'react';
import { TimerControl, Timer } from './components';
import './App.css';

function App() {
  const [currentTimer, setCurrentTimer] = useState()
  const [workMinutes, setWorkMinutes] = useState(25)
  const [breakMinutes, setBreakMinutes] = useState(5)
  const [activeTimer, setActiveTimer] = useState("work")
  const [seconds, setSeconds] = useState(0)

  const increase = (update) => {
    update(prevState => prevState < 60 ? prevState + 1 : prevState)
  }

  const decrease = (update) => {
    update(prevState => prevState > 0 ? prevState - 1 : prevState)
  }

  const startTimer = () => {
      return
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
          activeTimer={activeTimer === 'work' ? 
                        {title: "Work", minutes: workMinutes} : 
                        {title: "Break", minutes: breakMinutes}} 
          seconds={seconds}/>
          <button onClick={startTimer}>Start/Pause</button>
      </div>
    </div>
  );
}

export default App;

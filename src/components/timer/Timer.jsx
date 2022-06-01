import React, { useState, useEffect } from 'react'
import useInterval from '../../custom_hooks/useInterval'

const Timer = ({workMinutes, breakMinutes, isRunning}) => {
  const [minutes, setMinutes] = useState(workMinutes + breakMinutes)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    setMinutes(workMinutes + breakMinutes)
    setSeconds(0)
  }, [workMinutes, breakMinutes])

  useInterval(() => {
    if(seconds === 0) {
     setMinutes(prevState => prevState - 1)
     setSeconds(59)
     return
    }
    setSeconds(prevState => prevState - 1)
  }, isRunning ? 10 : null)

  let mm = minutes < 10 ? `0${minutes}` : minutes
  let ss = seconds < 10 ? `0${seconds}` : seconds

  return (
    <div>
        <h2>{minutes > breakMinutes ? 'Work' : 'Break'}</h2>
        <p>{mm}:{ss}</p>
    </div>
  )
}

export default Timer
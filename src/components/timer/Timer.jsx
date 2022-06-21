import { useState, useEffect } from 'react'
import useInterval from '../../custom_hooks/useInterval'
import ring from '../../assets/alarm_clock.ogg'

let alarm = new Audio(ring)

const Timer = ({workMinutes, breakMinutes, isRunning}) => {
  const [minutes, setMinutes] = useState(workMinutes + breakMinutes)
  const [seconds, setSeconds] = useState(0)
  const [currentTimer, setCurrentTimer] = useState('Work')
  
  // listens to changes from the prop provider
  useEffect(() => {
    setMinutes(workMinutes + breakMinutes)
    setSeconds(0)
  }, [workMinutes, breakMinutes])

  useEffect(() => {
    if(!minutes && !seconds) {
      setCurrentTimer('Work')
    } else if(minutes < breakMinutes) {
      setCurrentTimer('Break')
    }
  }, [minutes, seconds])

  useEffect(() => {
    alarm.play()
  }, [currentTimer])

  useInterval(() => {
    if(!seconds && !minutes) {
      setMinutes(workMinutes + breakMinutes)
      return
    } else if(!seconds) {
      setMinutes(prevState => prevState - 1)
      setSeconds(59)
      return
    }
    setSeconds(prevState => prevState - 1)
  }, isRunning ? 1000 : null)

  let mm = minutes < 10 ? `0${minutes}` : minutes
  let ss = seconds < 10 ? `0${seconds}` : seconds

  return (
    <div>
        <h2>{currentTimer}</h2>
        <p>{mm}:{ss}</p>
    </div>
  )
}

export default Timer
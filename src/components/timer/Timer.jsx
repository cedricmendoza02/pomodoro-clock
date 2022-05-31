import React from 'react'

const Timer = ({ activeTimer, seconds }) => {
  let title = activeTimer.title;
  let mm = activeTimer.minutes;
  let ss = seconds < 10 ? `0${seconds}` : `${seconds}`;

  return (
    <div>
        <h2>{title}</h2>
        <p>{mm}:{ss}</p>
    </div>
  )
}

export default Timer
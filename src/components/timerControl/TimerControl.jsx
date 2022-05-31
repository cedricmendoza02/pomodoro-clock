import React from 'react'

const TimerControl = ({title, minutes, increase, decrease}) => {
  return (
    <div>
        <h2>{title}</h2>
        <p>
          <button onClick={decrease}>-</button>
          {minutes}
          <button onClick={increase}>+</button>
        </p>
    </div>
  )
}

export default TimerControl
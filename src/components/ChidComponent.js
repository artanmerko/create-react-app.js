import React from 'react'

function ChidComponent(props) {
  return (
    <div>
      <button onClick={() => props.greetHandler('child')}>greetParent</button>
    </div>
  )
}

export default ChidComponent
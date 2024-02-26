import React, { useState } from 'react'

function HookCounter() {

    const [count,setcount] = useState(0)
  return (
    <div>
      <button onClick={()=>setcount(count+1)}>count {count}</button>
    </div>
  )
}

export default HookCounter

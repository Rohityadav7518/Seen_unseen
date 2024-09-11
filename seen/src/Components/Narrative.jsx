import React, { useEffect } from 'react'

function Narrative() {

  useEffect(() => {
    document.title = "Narrative"
  })
  return (
    <div>
      <h1 className='text-center p-5'>I'm Narrative Page</h1>
    </div>
  )
}

export default Narrative

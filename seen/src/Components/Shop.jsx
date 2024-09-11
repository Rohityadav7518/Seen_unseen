import React from 'react'
import { useEffect } from 'react'

function Shop() {

  useEffect(() => {
    document.title = "Shop"
  })
  return (
    <div>
      <h1 className='text-center p-5'>I'm Shop Page</h1>
    </div>
  )
}

export default Shop

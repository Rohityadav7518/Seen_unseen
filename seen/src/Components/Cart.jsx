import React from 'react'
import { useEffect } from 'react'

function Cart() {
  useEffect(() => {
    document.title = "Cart"
  })
  return (
    <div>
      <h1 className='text-center p-5'>I'm Cart Page</h1>
    </div>
  )
}

export default Cart

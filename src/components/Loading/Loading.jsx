import React from 'react'
import './loading_style.css'

const Loading = () => {
  return (
    <div className='loading w-full h-screen bg-neutral-800 flex justify-center items-center'>
      <p data-text="Loading" className="method-1">Loading</p>
    </div>
  )
}

export default Loading

import React from 'react'
import Image from 'next/image'

const Loading = () => {
  return (
    <div style={{ fontSize: '3rem' }} className='container text-center py-5'>
      <span>Loading Content...</span> <br />
      <div
        className='spinner-border'
        style={{ width: '3rem', height: '3rem' }}
        role='status'
      />
    </div>
  )
}

export default Loading

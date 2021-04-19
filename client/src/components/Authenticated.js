import React from 'react'

export default ({ context }) => {
  const authUser = context.authenticatedUser

  return (
    <div className='bounds'>
      <div className='grid-100'>
        <h1>You are Signed In!</h1>
      </div>
    </div>
  )
}

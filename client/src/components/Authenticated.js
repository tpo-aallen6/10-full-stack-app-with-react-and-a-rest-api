import React from 'react'

export default ({ context }) => {
  const authUser = context.authenticatedUser

  return (
    <div className='bounds'>
      <div className='grid-100'>
        <h1>{authUser.user[0].firstName} has been authenticated!</h1>
        <p>Your email address is {authUser.user[0].emailAddress}</p>
      </div>
    </div>
  )
}

import React from 'react'
import { Redirect } from 'react-router-dom'

const UserSignOut = ({ context }) => {
  return (
      <Redirect to='/' />
  )
}

export default UserSignOut

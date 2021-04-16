import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import Form from './Form'

const UserSignIn = () => {

  return (
    <>
      <main>
        <div class='form--centered'>
          <h2>Sign In</h2>
          <form>
            <label for='emailAddress'>Email Address</label>
            <input
              id='emailAddress'
              name='emailAddress'
              type='email'
              value=''
            />
            <label for='password'>Password</label>
            <input id='password' name='password' type='password' value='' />
            <button class='button' type='submit'>
              Sign In
            </button>
            <button
              class='button button-secondary'
            >
              Cancel
            </button>
          </form>
          <p>
            Don't have a user account? Click here to {' '}
            <Link to='/signup'>Sign Up</Link>!
          </p>
        </div>
      </main>
    </>
  )
}

export default UserSignIn

import React from 'react';
import { Link } from 'react-router-dom'

const UserSignUp = () => {
  return (
    <>
      <main>
        <div class='form--centered'>
          <h2>Sign Up</h2>

          <form>
            <label for='firstName'>First Name</label>
            <input id='firstName' name='firstName' type='text' value='' />
            <label for='lastName'>Last Name</label>
            <input id='lastName' name='lastName' type='text' value='' />
            <label for='emailAddress'>Email Address</label>
            <input
              id='emailAddress'
              name='emailAddress'
              type='email'
              value=''
            />
            <label for='password'>Password</label>
            <input id='password' name='password' type='password' value='' />
            <label for='confirmPassword'>Confirm Password</label>
            <input
              id='confirmPassword'
              name='confirmPassword'
              type='password'
              value=''
            />
            <button class='button' type='submit'>
              Sign Up
            </button>
            <button
              class='button button-secondary'
              onclick="event.preventDefault(); location.href='index.html';"
            >
              Cancel
            </button>
          </form>
          <p>
            Already have a user account? Click here to{' '}
            <Link to='/signin'>Sign In</Link>!
          </p>
        </div>
      </main>
    </>
  )
};

export default UserSignUp

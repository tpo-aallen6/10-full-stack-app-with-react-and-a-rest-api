import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <header>
        <div className='wrap header--flex'>
          <h1 className='header--logo'>
            <Link to='/courses'>Courses</Link>
          </h1>
          <nav>
            <ul className='header--signedin'>
              <li>Welcome, **CHANGE TO CURRENTLY LOGGED IN USER**</li>
              <li>
                <Link to='/signout'>Sign Out</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header

import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <header>
        <div className='wrap header--flex'>
          <h1 className='header--logo'>
            <Link to='/api/courses'>Courses</Link>
          </h1>
          <nav>
            <ul className='header--signedin'>
              <li>Welcome, **CHANGE TO CURRENTLY LOGGED IN USER**</li>
              <li>
                <a href='sign-out.html'>Sign Out</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header

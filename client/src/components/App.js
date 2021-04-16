import React from 'react'
import Courses from './Courses'
import Header from './Header'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom'
import CourseDetail from './CourseDetail'
import CreateCourse from './CreateCourse'
import UserSignIn from './UserSignIn'
import UserSignUp from './UserSignUp'

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path='/api/courses'>
            <Courses />
          </Route>
          <Route exact path='/api/courses/create'>
            <CreateCourse />
          </Route>
          <Route exact path='/api/courses/:id'>
            <CourseDetail />
          </Route>
          <Redirect exact path='/' to='/api/courses' />
          <Route exact path='/signin'>
            <UserSignIn />
          </Route>
          <Route exact path='/signup'>
            <UserSignUp />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App

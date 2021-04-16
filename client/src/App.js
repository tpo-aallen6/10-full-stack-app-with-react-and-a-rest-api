import React from 'react'
import Courses from './components/Courses'
import Header from './components/Header'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom'
import CourseDetail from './components/CourseDetail'
import CreateCourse from './components/CreateCourse'
import UserSignIn from './components/UserSignIn'
import UserSignUp from './components/UserSignUp'
import withContext from './Context'
const UserSignUpWithContext = withContext(UserSignUp)

export default () => (
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
        <Route path='/signup' component={UserSignUpWithContext} />
      </Switch>
    </div>
  </Router>
)

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
import Authenticated from './components/Authenticated'
import PrivateRoute from './components/PrivateRoute'

import withContext from './Context'

const AuthWithContext = withContext(Authenticated);
const UserSignUpWithContext = withContext(UserSignUp)
const UserSignInWithContext = withContext(UserSignIn)
const HeaderWithContext = withContext(Header)
const CreateCourseWithContext = withContext(CreateCourse)
export default () => (
  <Router>
    <div>
      <HeaderWithContext />
      <Switch>
        <Route exact path='/courses'>
          <Courses />
        </Route>
        <PrivateRoute exact path='/courses/create' component={CreateCourseWithContext} />
        <Route exact path='/courses/:id'>
          <CourseDetail />
        </Route>
        <Redirect exact path='/' to='/courses' />
        <Route path='/signin' component={UserSignInWithContext} />
        <Route path='/signup' component={UserSignUpWithContext} />
        <PrivateRoute path='/authenticated' component={AuthWithContext} />
      </Switch>
    </div>
  </Router>
)

import React from 'react'
import Courses from './components/Courses'
import Header from './components/Header'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom'

import Authenticated from './components/Authenticated'
import CourseDetail from './components/CourseDetail'
import CreateCourse from './components/CreateCourse'
import NotFound from './components/NotFound'
import PrivateRoute from './components/PrivateRoute'
import UpdateCourse from './components/UpdateCourse'
import UserSignIn from './components/UserSignIn'
import UserSignOut from './components/UserSignOut'
import UserSignUp from './components/UserSignUp'
import withContext from './Context'

const AuthWithContext = withContext(Authenticated)
const CourseDetailWithContext = withContext(CourseDetail)
const CreateCourseWithContext = withContext(CreateCourse)
const HeaderWithContext = withContext(Header)
const UpdateCourseWithContext = withContext(UpdateCourse)
const UserSignInWithContext = withContext(UserSignIn)
const UserSignOutWithContext = withContext(UserSignOut)
const UserSignUpWithContext = withContext(UserSignUp)

export default () => (
  <Router>
    <div>
      <HeaderWithContext />
      <Switch>
        <Route exact path='/courses'>
          <Courses />
        </Route>
        <PrivateRoute exact path='/courses/create' component={CreateCourseWithContext} />
        <PrivateRoute exact path='/courses/:id/update' component={UpdateCourseWithContext} />
        <Route exact path='/courses/:id' component={CourseDetailWithContext} />
        <Redirect exact path='/' to='/courses' />
        <Route path='/signin' component={UserSignInWithContext} />
        <Route path='/signup' component={UserSignUpWithContext} />
        <Route path='/signout' component={UserSignOutWithContext} />
        <PrivateRoute path='/authenticated' component={AuthWithContext} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
)

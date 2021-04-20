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
import UserSignOut from './components/UserSignOut'
import Authenticated from './components/Authenticated'
import PrivateRoute from './components/PrivateRoute'
import withContext from './Context'
import UpdateCourse from './components/UpdateCourse'

const AuthWithContext = withContext(Authenticated)
const UserSignUpWithContext = withContext(UserSignUp)
const UserSignInWithContext = withContext(UserSignIn)
const UserSignOutWithContext = withContext(UserSignOut)
const HeaderWithContext = withContext(Header)
const CreateCourseWithContext = withContext(CreateCourse)
const CourseDetailWithContext = withContext(CourseDetail)
const UpdateCourseWithContext = withContext(UpdateCourse)
export default () => (
  <Router>
    <div>
      <HeaderWithContext />
      <Switch>
        <Route exact path='/courses'>
          <Courses />
        </Route>
        <PrivateRoute exact path='/courses/create' component={CreateCourseWithContext} />
        <Route exact path='/courses/:id' component={CourseDetailWithContext} />
        <Route exact path='/courses/:id/update' component={UpdateCourseWithContext} />
        <Redirect exact path='/' to='/courses' />
        <Route path='/signin' component={UserSignInWithContext} />
        <Route path='/signup' component={UserSignUpWithContext} />
        <Route path='/signout' component={UserSignOutWithContext} />
        <PrivateRoute path='/authenticated' component={AuthWithContext} />
      </Switch>
    </div>
  </Router>
)

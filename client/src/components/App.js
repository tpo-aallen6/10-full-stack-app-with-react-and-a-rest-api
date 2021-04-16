import React from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom'
import Cookies from 'js-cookie'

import Courses from './Courses'
import Header from './Header'
import CourseDetail from './CourseDetail'
import CreateCourse from './CreateCourse'
import NotFound from './NotFound'
import UserSignIn from './UserSignIn'
import UserSignUp from './UserSignUp'
import UserSignOut from './UserSignOut'
import withContext from '../Context'
import PrivateRoute from '../PrivateRoute'
import Public from './Public'
import Authenticated from './Authenticated'

const HeaderWithContext = withContext(Header)
const AuthWithContext = withContext(Authenticated)
const UserSignUpWithContext = withContext(UserSignUp)
const UserSignInWithContext = withContext(UserSignIn)
const UserSignOutWithContext = withContext(UserSignOut)

const App = () => {
  return (
    <Router>
      <div>
        <HeaderWithContext />
        <Switch>
          <Route exact path='/' component={Public} />
          <PrivateRoute path='/authenticated' component={AuthWithContext} />
          <Route exact path='/courses' component={Courses} />
          <PrivateRoute path='/courses/create' component={CreateCourse} />
          <Route path='/courses/:id' component={CourseDetail} />
          <Route path='/signin' component={UserSignInWithContext} />
          <Route path='/signup' component={UserSignUpWithContext} />
          <Route path='/signout' component={UserSignOutWithContext} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  )
}

export default App

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

const HeaderWithContext = withContext(Header)
const UserSignUpWithContext = withContext(UserSignUp)
const UserSignInWithContext = withContext(UserSignIn)

const App = () => {
  return (
    <Router>
      <div>
        <HeaderWithContext />
        <Switch>
          <Redirect exact path='/' to='/courses' />
          <Route exact path='/courses' component={Courses} />
          <PrivateRoute path='/courses/create' component={CreateCourse} />
          <Route path='/courses/:id' component={CourseDetail} />
          <Route path='/signin' component={UserSignInWithContext} />
          <Route path='/signup' component={UserSignUpWithContext} />
          <Route path='/signout' component={UserSignOut} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  )
}

export default App

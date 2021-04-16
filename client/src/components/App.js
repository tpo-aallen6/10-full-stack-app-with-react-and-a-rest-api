import React from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom'

import Courses from './Courses'
import Header from './Header'
import CourseDetail from './CourseDetail'
import CreateCourse from './CreateCourse'
import NotFound from './NotFound'
import UserSignIn from './UserSignIn'
import UserSignUp from './UserSignUp'
import UserSignOut from './UserSignOut'
import withContext from '../Context'

const UserSignOutWithContext = withContext(UserSignOut)
const UserSignUpWithContext = withContext(UserSignUp)
const UserSignInWithContext = withContext(UserSignIn)

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Redirect exact path='/' to='/courses' />
          <Route exact path='/courses' component={Courses} />
          <Route exact path='/courses/create' component={CreateCourse} />
          <Route exact path='/courses/:id' component={CourseDetail} />
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

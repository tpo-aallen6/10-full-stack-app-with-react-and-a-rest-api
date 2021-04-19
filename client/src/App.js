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
import Authenticated from './components/Authenticated';

import withContext from './Context'

const AuthWithContext = withContext(Authenticated);
const UserSignUpWithContext = withContext(UserSignUp)
const UserSignInWithContext = withContext(UserSignIn)
const HeaderWithContext = withContext(Header)

export default () => (
  <Router>
    <div>
      <HeaderWithContext />
      <Switch>
        <Route exact path='/courses'>
          <Courses />
        </Route>
        <Route exact path='/courses/create'>
          <CreateCourse />
        </Route>
        <Route exact path='/courses/:id'>
          <CourseDetail />
        </Route>
        <Redirect exact path='/' to='/courses' />
        <Route path='/signin' component={UserSignInWithContext}/>
        <Route path='/signup' component={UserSignUpWithContext} />
        <Route path='/authenticated' component={AuthWithContext} />
      </Switch>
    </div>
  </Router>
)

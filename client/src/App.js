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
        <Route path='/signin' component={UserSignInWithContext}/>
        <Route path='/signup' component={UserSignUpWithContext} />
        <Route path='/authenticated' component={AuthWithContext} />
      </Switch>
    </div>
  </Router>
)

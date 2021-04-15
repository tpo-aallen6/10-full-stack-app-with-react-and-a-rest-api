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
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  )
}

export default App

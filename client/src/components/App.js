import React from 'react'
import Courses from './Courses'
import Header from './Header'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom'
import CourseDetail from './CourseDetail'
import CreateCourse from './CreateCourse'

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path='/api/courses'>
            <Courses />
          </Route>
          <Route exact path='/api/courses/create' render={() => <CreateCourse />} />
          <Route exact path='/api/courses/:id'>
            <CourseDetail />
          </Route>
          <Redirect exact path='/' to='/api/courses' />
        </Switch>
      </div>
    </Router>
  )
}

export default App

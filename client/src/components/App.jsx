import { useEffect, useState } from "react"

const App = () => {
  const [courses = [], setCourses] = useState()

  useEffect(() => {
    fetch('http://localhost:5000/api/courses')
      .then(response => response.json())
      .then(json => setCourses(json.courses))
  }, [])

  return (
    <>
      <p>
        {courses.map(course => {
          return (
            <p key={course.id}><h3>Course: {JSON.stringify(course.id)}</h3>
              <span>{JSON.stringify(course.title)}</span>
              <br />
              <span>{JSON.stringify(course.description)}</span>
            </p>
          )
        })}
      </p>
    </>
  )
}

export default App

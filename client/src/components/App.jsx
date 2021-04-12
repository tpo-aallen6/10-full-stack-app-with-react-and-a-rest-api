import { useEffect, useState } from "react"

const App = () => {
  const [courses = [], setCourses] = useState()

  useEffect(() => {
    fetch('http://localhost:5000/api/courses')
      .then(response => response.json())
      .then(json => setCourses(json.courses))
  }, [courses])

  return (
    <>
      <ul>
        {courses.map(course => {
          return <li key={course.id}>{JSON.stringify(course)}</li>
        })}
      </ul>
    </>
  )
}

export default App

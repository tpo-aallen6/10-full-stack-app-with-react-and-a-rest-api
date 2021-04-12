import { useEffect, useState } from "react"

const App = () => {
  const [courses, setCourses] = useState()

  useEffect(() => {
    fetch('http://localhost:5000/api/courses/1')
      .then(response => response.json())
      .then(json => {
        console.log(json.course)
      })
  }, [])

  return (
    <>
      {/* {courses.map(course => {
        return <pre>{JSON.stringify(course)}</pre>
      })} */}
    </>
  )
}

export default App

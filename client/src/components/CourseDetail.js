/* global fetch */

import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const CourseDetail = () => {
  const [course, setCourse] = useState({})
  const [materials, setMaterials] = useState([])
  const { id } = useParams()

  useEffect(() => {
    fetch(`http://localhost:5000/api/courses/${id}`)
      .then((response) => response.json())
      .then((json) => {
        setCourse(json.course[0])
        const materialArray = json.course[0].materialsNeeded.split('*')
        materialArray.shift()
        setMaterials(
          materialArray.map((material) => <li key={material}>{material}</li>)
        )
      })
      // .then(console.log(course.User.firstName))
      .catch((error) => console.error(error))
  }, [id])

  return (
    <>
      <main>
        {console.log(course.materialsNeeded)}
        <div className='actions--bar'>
          <div className='wrap'>
            <Link className='button' to={`/api/courses/${id}/update`}>
              Update Course
            </Link>
            <Link className='button' to={`/api/courses/${id}/delete`}>
              Delete Course
            </Link>
            <Link className='button button-secondary' to='/api/courses'>
              Return to List
            </Link>
          </div>
        </div>

        <div className='wrap'>
          <h2>Course Detail</h2>
          <form>
            <div className='main--flex'>
              <div>
                <h3 className='course--detail--title'>Course</h3>
                <h4 className='course--name'>{course.title}</h4>
                <p>By Joe Smith</p>

                <p>{course.description}</p>
              </div>
              <div>
                <h3 className='course--detail--title'>Estimated Time</h3>
                <p>{course.estimatedTime}</p>

                <h3 className='course--detail--title'>Materials Needed</h3>
                <ul className='course--detail--list'>{materials}</ul>
              </div>
            </div>
          </form>
        </div>
      </main>
    </>
  )
}

export default CourseDetail

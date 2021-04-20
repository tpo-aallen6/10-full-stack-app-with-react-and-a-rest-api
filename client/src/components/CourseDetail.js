import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'

const CourseDetail = ({ context }) => {
  const [course, setCourse] = useState({})
  const [courseOwner, setCourseOwner] = useState('')
  const [buttonDisplay, setButtonDisplay] = useState('')
  const [ownerEmail, setOwnerEmail] = useState('')
  const { id } = useParams()

  const authUser = context.authenticatedUser

  useEffect(() => {
    fetch(`http://localhost:5000/api/courses/${id}`)
      .then((response) => response.json())
      .then((json) => {
        setCourse(json.course[0])
        setCourseOwner(json.course[0].User)
        setOwnerEmail(json.course[0].User.emailAddress)
      })
      .catch((error) => console.error(error))
  }, [id])

  return (
    <>
      <main>
        <div className='actions--bar'>
          <div className='wrap'>
            {authUser != null && (authUser.emailAddress === courseOwner.emailAddress)
              ? <React.Fragment> 
             <Link className='button' to={`/courses/${id}/update`}>
               Update Course
             </Link>
             <Link className='button' to={`/courses/${id}/delete`}>
               Delete Course
             </Link>
             </React.Fragment>
              :
              null
            }

            <Link className='button button-secondary' to='/courses'>
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
                <p>By {courseOwner.firstName} {courseOwner.lastName}</p>

                <ReactMarkdown children={course.description} />
              </div>
              <div>
                <h3 className='course--detail--title'>Estimated Time</h3>
                <p>{course.estimatedTime}</p>

                <h3 className='course--detail--title'>Materials Needed</h3>
                <ul className='course--detail--list'>
                  <ReactMarkdown children={course.materialsNeeded} />
                </ul>
              </div>
            </div>
          </form>
        </div>
      </main>
    </>
  )
}

export default CourseDetail

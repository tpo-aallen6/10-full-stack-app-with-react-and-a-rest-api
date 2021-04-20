import React, { useState, useEffect, useRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import Form from './Form'

const UpdateCourse = (props) => {
  const [course, setCourse] = useState({})
  const [materialsNeeded, setMaterialsNeeded] = useState([])
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [estimatedTime, setEstimatedTime] = useState('')
  const [errors, setErrors] = useState([])
  const [courseAuthor, setCourseAuthor] = useState('')
  const { id } = useParams()

  // useRef variables
  const courseTitleInput = useRef('')
  const courseDescriptionInput = useRef('')
  const courseEstTimeInput = useRef('')
  const courseMaterialsNeededInput = useRef('')

  const authUser = props.context.authenticatedUser

  useEffect(() => {
    fetch(`http://localhost:5000/api/courses/${id}`)
      .then((response) => response.json())
      .then((json) => {
        setCourse(json.course[0])
        setMaterialsNeeded(json.course[0].materialsNeeded)
        setTitle(json.course[0].title)
        setDescription(json.course[0].description)
        setEstimatedTime(json.course[0].estimatedTime)
        setCourseAuthor(`${json.course[0].User.firstName} ${json.course[0].User.lastName}`)
      })
      // .then(console.log(course.User.firstName))
      .catch((error) => console.error(error))
  }, [id])

  const submit = () => {
    const { context } = props;
    const course = {
      title,
      description,
      estimatedTime,
      materialsNeeded
    }
    
    context.date.UpdateCourse(course, authUser.emailAddress, authUser.password)
      .then((errors) => {
        if (errors.length) {
          setErrors(errors)
        } else {
          props.history.push('/courses/' + id)
        }
      })
}

  const change = () => {
    setTitle(courseTitleInput.current.value)
    setDescription(courseDescriptionInput.current.value)
    setTime(couserEstTimeInput.current.value)
    setMaterialsNeeded(courseMaterialsNeededInput.current.value)

  }
  const cancel = () => {

  }

  return (
    <>
      <main>
        <div class='wrap'>
          <h2>Update Course</h2>
          <form>
            <div class='main--flex'>
              <div>
                <label for='courseTitle'>Course Title</label>
                <input
                  id='Title'
                  name='Title'
                  type='text'
                  value={title}
                  ref={courseTitleInput}
                />

                <label for='courseAuthor'>Course Author</label>
                <input
                  id='courseAuthor'
                  name='courseAuthor'
                  type='text'
                  value='Joe Smith'
                />

                <label for='courseDescription'>Course Description</label>
                <textarea id='courseDescription' name='courseDescription' ref={courseDescriptionInput}>
                  {/* {description} */}
                </textarea>
              </div>
              <div>
                <label for='estimatedTime'>Estimated Time</label>
                <input
                  id='estimatedTime'
                  name='estimatedTime'
                  type='text'
                  value='14 hours'
                  ref={courseEstTimeInput}
                />

                <label for='materialsNeeded'>Materials Needed</label>
                <textarea id='materialsNeeded' name='materialsNeeded' ref={courseMaterialsNeededInput}>
                  {/* {materialsNeeded} */}
                </textarea>
              </div>
            </div>
            <button class='button' type='submit'>
              Update Course
            </button>
            <button
              class='button button-secondary'
              onclick="event.preventDefault(); location.href='index.html';"
            >
              Cancel
            </button>
          </form>
        </div>
      </main>
    </>
  )
}

export default UpdateCourse

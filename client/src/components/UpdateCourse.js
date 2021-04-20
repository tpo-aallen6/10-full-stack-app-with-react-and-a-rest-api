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
  const [author, setAuthor] = useState('')
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
        setAuthor(`${json.course[0].User.firstName} ${json.course[0].User.lastName}`)
      })
      // .then(console.log(course.User.firstName))
      .catch((error) => console.error(error))
  }, [id])

  const submit = (e) => {
    e.preventDefault()
    const { context } = props
    const course = {
      id,
      title,
      description,
      estimatedTime,
      materialsNeeded
    }

    context.data.updateCourse(course, authUser.emailAddress, authUser.password)
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
    setEstimatedTime(courseEstTimeInput.current.value)
    setMaterialsNeeded(courseMaterialsNeededInput.current.value)
  }

  const cancel = () => {

  }

  return (
    <>
      <main>
        <div class='wrap'>
          <h2>Update Course</h2>
          <form onSubmit={submit}>
            <div class='main--flex'>
              <div>
                <label htmlFor='courseTitle'>Course Title</label>
                <input
                  id='Title'
                  name='Title'
                  type='text'
                  value={title}
                  ref={courseTitleInput}
                  onChange={change}
                />

                <label htmlFor='courseAuthor'>Course Author</label>
                <input
                  id='courseAuthor'
                  name='courseAuthor'
                  type='text'
                  value={author}
                />

                <label htmlFor='courseDescription'>Course Description</label>
                <textarea
                  id='courseDescription'
                  name='courseDescription'
                  ref={courseDescriptionInput}
                  value={description}
                  onChange={change}
                >
                  {/* {description} */}
                </textarea>
              </div>
              <div>
                <label htmlFor='estimatedTime'>Estimated Time</label>
                <input
                  id='estimatedTime'
                  name='estimatedTime'
                  type='text'
                  value={estimatedTime}
                  ref={courseEstTimeInput}
                  onChange={change}
                />

                <label htmlFor='materialsNeeded'>Materials Needed</label>
                <textarea
                  id='materialsNeeded'
                  name='materialsNeeded'
                  ref={courseMaterialsNeededInput}
                  value={materialsNeeded}
                  onChange={change}
                >
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

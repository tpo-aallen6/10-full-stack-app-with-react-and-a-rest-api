import React, { useState, useRef } from 'react'
import { useHistory } from 'react-router-dom'

const CreateCourse = (props) => {
  // state variables
  const [materialsNeeded, setMaterialsNeeded] = useState([])
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [estimatedTime, setEstimatedTime] = useState('')
  const [errors, setErrors] = useState([])

  const history = useHistory()
  const authUser = props.context.authenticatedUser

  // useRef variables
  const courseTitleInput = useRef('')
  const courseDescriptionInput = useRef('')
  const courseEstTimeInput = useRef('')
  const courseMaterialsNeededInput = useRef('')

  const change = () => {
    setTitle(courseTitleInput.current.value)
    setDescription(courseDescriptionInput.current.value)
    setEstimatedTime(courseEstTimeInput.current.value)
    setMaterialsNeeded(courseMaterialsNeededInput.current.value)
  }

  const submit = (e) => {
    e.preventDefault()
    const { context } = props
    const course = {
      title,
      description,
      estimatedTime,
      materialsNeeded
    }

    context.data.createCourse(course, authUser.emailAddress, authUser.password)
      .then((errors) => {
        if (errors.length) {
          setErrors(errors)
        } else {
          props.history.push('/courses/')
        }
      })
  }

  return (
    <>
      <main>
        <div class='wrap'>
          <h2>Create Course</h2>
          <div class='validation--errors'>
            <h3>Validation Errors</h3>
            <ul>
              <li>Please provide a value for "Title"</li>
              <li>Please provide a value for "Description"</li>
            </ul>
          </div>
          <form onSubmit={submit}>
            <div class='main--flex'>
              <div>
                <label htmlFor='courseTitle'>Course Title</label>
                <input
                  id='courseTitle'
                  name='courseTitle'
                  type='text'
                  ref={courseTitleInput}
                  value={title}
                  onChange={change}
                />

                <label htmlFor='courseAuthor'>Course Author</label>
                <input
                  id='courseAuthor'
                  name='courseAuthor'
                  type='text'
                  value={`${authUser.firstName} ${authUser.lastName}`}
                  readOnly
                />

                <label htmlFor='courseDescription'>Course Description</label>
                <textarea
                  id='courseDescription'
                  name='courseDescription'
                  ref={courseDescriptionInput}
                  value={description}
                  onChange={change}
                />
              </div>
              <div>
                <label htmlFor='estimatedTime'>Estimated Time</label>
                <input
                  id='estimatedTime'
                  name='estimatedTime'
                  type='text'
                  ref={courseEstTimeInput}
                  value={estimatedTime}
                  onChange={change}
                />

                <label htmlFor='materialsNeeded'>Materials Needed</label>
                <textarea id='materialsNeeded' name='materialsNeeded' ref={courseMaterialsNeededInput} value={materialsNeeded} onChange={change} />
              </div>
            </div>
            <button class='button' type='submit'>
              Create Course
            </button>
            <button
              class='button button-secondary'
              onClick={(event) => { event.preventDefault(); history.push('/') }}
            >
              Cancel
            </button>
          </form>
        </div>
      </main>
    </>
  )
}

export default CreateCourse

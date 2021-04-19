import React from 'react'
import { Link, useHistory } from 'react-router-dom'

const CreateCourse = () => {
  const history = useHistory()

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
          <form>
            <div class='main--flex'>
              <div>
                <label htmlFor='courseTitle'>Course Title</label>
                <input
                  id='courseTitle'
                  name='courseTitle'
                  type='text'
                  value=''
                />

                <label htmlFor='courseAuthor'>Course Author</label>
                <input
                  id='courseAuthor'
                  name='courseAuthor'
                  type='text'
                  value='Joe Smith'
                />

                <label htmlFor='courseDescription'>Course Description</label>
                <textarea id='courseDescription' name='courseDescription' />
              </div>
              <div>
                <label htmlFor='estimatedTime'>Estimated Time</label>
                <input
                  id='estimatedTime'
                  name='estimatedTime'
                  type='text'
                  value=''
                />

                <label htmlFor='materialsNeeded'>Materials Needed</label>
                <textarea id='materialsNeeded' name='materialsNeeded' />
              </div>
            </div>
            <button class='button' type='submit'>
              Create Course
            </button>
            <Link
              class='button button-secondary'
              to='/'
            >
              Cancel
            </Link>
          </form>
        </div>
      </main>
    </>
  )
}

export default CreateCourse

import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'
import Form from './Form'

const UpdateCourse = () => {
  const [course, setCourse] = useState({})
  const [materialsNeeded, setMaterialsNeeded] = useState([])
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [estimatedTime, setEstimatedTime] = useState('')
  const { id } = useParams()

  useEffect(() => {
    fetch(`http://localhost:5000/api/courses/${id}`)
      .then((response) => response.json())
      .then((json) => {
        setCourse(json.course[0])
        setMaterialsNeeded(json.course[0].materialsNeeded)
        setTitle(json.course[0].title)
        setDescription(json.course[0].description)
        setEstimatedTime(json.course[0].estimatedTime)
      })
      // .then(console.log(course.User.firstName))
      .catch((error) => console.error(error))
  }, [id])

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
                  id='courseTitle'
                  name='courseTitle'
                  type='text'
                  value='Build a Basic Bookcase'
                />

                <label for='courseAuthor'>Course Author</label>
                <input
                  id='courseAuthor'
                  name='courseAuthor'
                  type='text'
                  value='Joe Smith'
                />

                <label for='courseDescription'>Course Description</label>
                <textarea id='courseDescription' name='courseDescription'>
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
                />

                <label for='materialsNeeded'>Materials Needed</label>
                <textarea id='materialsNeeded' name='materialsNeeded'>
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
};

export default UpdateCourse

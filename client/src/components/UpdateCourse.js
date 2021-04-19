import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

const UpdateCourse = () => {
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
        <div class='wrap'>
          <h2>Update Course</h2>
          <form>
            <div class='main--flex'>
              <div>
                <label htmlFor='courseTitle'>Course Title</label>
                <input
                  id='courseTitle'
                  name='courseTitle'
                  type='text'
                  value='Build a Basic Bookcase'
                />

                <label htmlFor='courseAuthor'>Course Author</label>
                <input
                  id='courseAuthor'
                  name='courseAuthor'
                  type='text'
                  value='Joe Smith'
                />

                <label htmlFor='courseDescription'>Course Description</label>
                <textarea
                  id='courseDescription'
                  name='courseDescription'>
                    High-end furniture
                </textarea>
              </div>
              <div>
                <label htmlFor='estimatedTime'>Estimated Time</label>
                <input
                  id='estimatedTime'
                  name='estimatedTime'
                  type='text'
                  value='14 hours'
                />

                <label htmlFor='materialsNeeded'>Materials Needed</label>
                <textarea
                  id='materialsNeeded'
                  name='materialsNeeded'>
                    * 1/2 x 3/4 inch parting strip&#13;&#13;
                </textarea>
              </div>
            </div>
            <button class='button' type='submit'>
              Update Course
            </button>
            <button
              class='button button-secondary'
              onClick="event.preventDefault(); location.href='index.html';"
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

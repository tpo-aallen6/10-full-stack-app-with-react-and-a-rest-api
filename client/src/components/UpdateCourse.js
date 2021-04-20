import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'
import Form from './Form'

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
                  High-end furniture projects are great to dream about. But
                  unless you have a well-equipped shop and some serious
                  woodworking experience to draw on, it can be difficult to turn
                  the dream into a reality.&#13;&#13;Not every piece of
                  furniture needs to be a museum showpiece, though. Often a
                  simple design does the job just as well and the experience
                  gained in completing it goes a long way toward making the next
                  project even better.&#13;&#13;Our pine bookcase, for example,
                  features simple construction and it's designed to be built
                  with basic woodworking tools. Yet, the finished project is a
                  worthy and useful addition to any room of the house. While
                  it's meant to rest on the floor, you can convert the bookcase
                  to a wall-mounted storage unit by leaving off the baseboard.
                  You can secure the cabinet to the wall by screwing through the
                  cabinet cleats into the wall studs.&#13;&#13;We made the case
                  out of materials available at most building-supply dealers and
                  lumberyards, including 1/2 x 3/4-in. parting strip, 1 x 2, 1 x
                  4 and 1 x 10 common pine and 1/4-in.-thick lauan plywood.
                  Assembly is quick and easy with glue and nails, and when
                  you're done with construction you have the option of a painted
                  or clear finish.&#13;&#13;As for basic tools, you'll need a
                  portable circular saw, hammer, block plane, combination
                  square, tape measure, metal rule, two clamps, nail set and
                  putty knife. Other supplies include glue, nails, sandpaper,
                  wood filler and varnish or paint and shellac.&#13;&#13;The
                  specifications that follow will produce a bookcase with
                  overall dimensions of 10 3/4 in. deep x 34 in. wide x 48 in.
                  tall. While the depth of the case is directly tied to the 1 x
                  10 stock, you can vary the height, width and shelf spacing to
                  suit your needs. Keep in mind, though, that extending the
                  width of the cabinet may require the addition of central shelf
                  supports.
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
                  {materials}
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

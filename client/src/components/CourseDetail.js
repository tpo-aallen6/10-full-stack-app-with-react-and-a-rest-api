import React, { useEffect, useState } from "react";

const CourseDetail = () => {
  const [course, setCourse] = useState({});
  const [materials, setMaterials] = useState([])

  useEffect(() => {
    fetch("http://localhost:5000/api/courses/1")
      .then((response) => response.json())
      .then((json) => {
        setCourse(json.course[0])
        const materialArray = json.course[0].materialsNeeded.split('*')
        materialArray.shift()
        setMaterials(materialArray.map(material => <li key={material}>{material}</li>))
      })
      .catch(error => console.error(error))
  }, []);

  return (
    <>
      <main>
        {console.log(course.materialsNeeded)}
        <div className="actions--bar">
          <div className="wrap">
            <a className="button" href="update-course.html">
              Update Course
            </a>
            <a className="button" href="#">
              Delete Course
            </a>
            <a className="button button-secondary" href="index.html">
              Return to List
            </a>
          </div>
        </div>

        <div className="wrap">
          <h2>Course Detail</h2>
          <form>
            <div className="main--flex">
              <div>
                <h3 className="course--detail--title">Course</h3>
                <h4 className="course--name">{course.title}</h4>
                <p>By Joe Smith</p>

                <p>
                  {course.description}
                </p>
              </div>
              <div>
                <h3 className="course--detail--title">Estimated Time</h3>
                <p>{course.estimatedTime}</p>

                <h3 className="course--detail--title">Materials Needed</h3>
                <ul className="course--detail--list">
                  {materials}
                </ul>
              </div>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default CourseDetail;

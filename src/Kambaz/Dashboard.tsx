/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import { Row, Col, Card, Button } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import { addEnrollment, deleteEnrollment } from "./reducer";
import { v4 as uuidv4 } from "uuid";

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
}) {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const [showAllCourses, setShowAllCourses] = useState(false);
  const isUserEnrolled = (course: any) =>
    enrollments.find(
      (enrollment: any) =>
        enrollment.user === currentUser._id && enrollment.course === course._id
    );
  const userCourses = showAllCourses
    ? courses
    : courses.filter((course) => isUserEnrolled(course));

  const toggleEnrollment = (course: any) => {
    const enrollment = isUserEnrolled(course);
    if (enrollment) {
      dispatch(deleteEnrollment({enrollmentId: enrollment._id}));
    } else {
      dispatch(
        addEnrollment({
          _id: uuidv4(),
          user: currentUser._id,
          course: course._id,
        })
      );
    }
  };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      {currentUser.role === "FACULTY" && (
        <>
          <h5>
            New Course
            <button
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={addNewCourse}
            >
              Add
            </button>
            <button
              className="btn btn-warning float-end me-2"
              onClick={updateCourse}
              id="wd-update-course-click"
            >
              Update
            </button>
            <br />
            <input
              value={course.name}
              className="form-control mb-2"
              onChange={(e) => setCourse({ ...course, name: e.target.value })}
            />
            <textarea
              value={course.description}
              className="form-control"
              onChange={(e) =>
                setCourse({ ...course, description: e.target.value })
              }
            />
          </h5>
          <hr />
        </>
      )}
      {currentUser.role === "STUDENT" && (
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShowAllCourses(!showAllCourses)}>
            Enrollments
          </Button>
        </div>
      )}
      <h2 id="wd-dashboard-published">
        Published Courses ({userCourses.length})
      </h2>
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {userCourses.map((course) => (
            <Col
              className="wd-dashboard-course"
              style={{ width: "300px" }}
              key={course.name + course._id}
            >
              <Card>
                <Link
                  to={`/Kambaz/Courses/${course._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                  <Card.Img
                    src="/images/reactjs.jpeg"
                    variant="top"
                    width="100%"
                    height={160}
                  />
                  <Card.Body className="card-body">
                    <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {course.name}
                    </Card.Title>
                    <Card.Text
                      className="wd-dashboard-course-description overflow-hidden"
                      style={{ height: "100px" }}
                    >
                      {course.description}
                    </Card.Text>
                    <Button variant="primary"> Go </Button>
                    {currentUser.role === "FACULTY" && (
                      <>
                        <Button
                          onClick={(event) => {
                            event.preventDefault();
                            deleteCourse(course._id);
                          }}
                          className="btn btn-danger float-end"
                          id="wd-delete-course-click"
                        >
                          Delete
                        </Button>
                        <Button
                          id="wd-edit-course-click"
                          onClick={(event) => {
                            event.preventDefault();
                            setCourse(course);
                          }}
                          className="btn btn-warning me-2 float-end"
                        >
                          Edit
                        </Button>
                      </>
                    )}
                    {currentUser.role === "STUDENT" && (
                      <Button
                        className={`btn-${
                          isUserEnrolled(course) ? "danger" : "success"
                        } btn float-end`}
                        onClick={(e) => {
                          e.preventDefault();
                          toggleEnrollment(course);
                        }}
                      >
                        {isUserEnrolled(course) ? "Unenroll" : "Enroll"}
                      </Button>
                    )}
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

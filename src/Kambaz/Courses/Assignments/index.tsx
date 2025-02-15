import { Button, Col, Form, InputGroup, ListGroup, Row } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { FaPlus, FaMagnifyingGlass, FaCaretDown } from "react-icons/fa6";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { MdOutlineAssignment } from "react-icons/md";
import AssignmentText from "./AssignmentText";
import { useParams } from "react-router";
import * as db from "../../Database";

export default function Assignments() {
  const { cid } = useParams<{ cid: string }>();
  const assignments = db.assignments.filter(
    (assignment) => assignment.course === cid
  );
  return (
    <div id="wd-assignments" className="p-4 pt-0">
      <Row className="mb-4">
        <Col sm={6} md={12} lg={6}>
          <InputGroup size="lg">
            <InputGroup.Text>
              <FaMagnifyingGlass />
            </InputGroup.Text>
            <Form.Control type="text" placeholder="Search.." />
          </InputGroup>
        </Col>
        <Col sm={6} md={12} lg={6}>
          <Button variant="danger" size="lg" className="me-1 float-end">
            <FaPlus
              className="position-relative me-2"
              style={{ bottom: "1px" }}
            />
            Assignment
          </Button>
          <Button variant="secondary" size="lg" className="me-1 float-end">
            <FaPlus
              className="position-relative me-2"
              style={{ bottom: "1px" }}
            />
            Group
          </Button>
        </Col>
      </Row>

      <ListGroup className="rounded-0" id="wd-modules">
        <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="fs-3" />
            <FaCaretDown className="me-2 fs-6" />
            {"Assignments".toUpperCase()}
            <AssignmentControlButtons percent={40} />
          </div>
          {assignments.map((assignment) => (
            <ListGroup className="wd-lessons rounded-0" key={assignment._id}>
              <ListGroup.Item className="wd-lesson p-3 ps-1 d-flex align-items-center">
                <BsGripVertical className="fs-3" />
                <MdOutlineAssignment className="me-3 fs-3" />
                <AssignmentText
                  assignment={assignment}
                  courseId={cid || ""}
                  moduleName="Multiple Modules"
                  moduleLink="#"
                />
                <div className="wd-assignment-buttons flex-grow-1">
                  <LessonControlButtons />
                </div>
              </ListGroup.Item>
            </ListGroup>
          ))}
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}

/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Button,
  Col,
  Form,
  InputGroup,
  ListGroup,
  Modal,
  Row,
} from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { FaPlus, FaMagnifyingGlass, FaCaretDown } from "react-icons/fa6";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { MdOutlineAssignment } from "react-icons/md";
import AssignmentText from "./AssignmentText";
import { Link, useParams } from "react-router";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import { deleteAssignment } from "./reducer";
import { useDispatch } from "react-redux";
import { useState } from "react";

export default function Assignments() {
  const dispatch = useDispatch();
  const { cid } = useParams<{ cid: string }>();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteAssignemntId, setDeleteAssignmentId] = useState("");
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const openDeleteModal = (assignment: any) => {
    setShowDeleteModal(true);
    setDeleteAssignmentId(assignment._id);
  };

  const handleClose = () => {
    setShowDeleteModal(false);
  };

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
          {currentUser.role === "FACULTY" && (
            <Link to={`/Kambaz/Courses/${cid}/Assignments/${uuidv4()}`}>
              <Button variant="danger" size="lg" className="me-1 float-end">
                <FaPlus
                  className="position-relative me-2"
                  style={{ bottom: "1px" }}
                />
                Assignment
              </Button>
            </Link>
          )}
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
          {assignments
            .filter((assignment: any) => assignment.course === cid)
            .map((assignment: any) => (
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
                    <div>
                      <LessonControlButtons
                        showTrash={true}
                        onDelete={() => {
                          openDeleteModal(assignment);
                        }}
                      />
                    </div>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            ))}
        </ListGroup.Item>
      </ListGroup>
      <Modal show={showDeleteModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Are you sure you want to remove this assignment?
          </Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              dispatch(deleteAssignment(deleteAssignemntId));
              handleClose();
            }}
          >
            Delete Assignment
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

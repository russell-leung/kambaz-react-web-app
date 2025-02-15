import { Row, Col } from "react-bootstrap";
import { Link } from "react-router";
import { Assignment } from "../../Database";

interface AssignmentTextProps {
  assignment: Assignment;
  courseId: string;
  moduleName: string;
  moduleLink: string;
}

export default function AssignmentText({
  assignment,
  courseId,
  moduleName,
  moduleLink,
}: AssignmentTextProps) {
  return (
    <Row>
      <Col sm={12} className="fw-bold">
        <Link
          to={`/Kambaz/Courses/${courseId}/Assignments/${assignment._id}`}
          className="text-decoration-none text-dark"
        >
          {assignment.title}
        </Link>
      </Col>
      <Col sm={12}>
        <Link to={moduleLink} className="text-decoration-none text-danger">
          {moduleName}
        </Link>{" "}
        | <span className="fw-bold">Not available until</span>{" "}
        {new Date(assignment.releaseDate).toLocaleString("en-US", {
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        })}{" "}
        |
      </Col>
      <Col sm={12}>
        <span className="fw-bold">Due</span>{" "}
        {new Date(assignment.dueDate).toLocaleString("en-US", {
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        })}{" "}
        | {assignment.points} pts
      </Col>
    </Row>
  );
}

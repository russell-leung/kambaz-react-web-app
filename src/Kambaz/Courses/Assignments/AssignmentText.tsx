import { Row, Col } from "react-bootstrap";
import { Link } from "react-router";

interface AssignmentTextProps {
  name: string;
  moduleName: string;
  moduleLink: string;
  releaseDate: string;
  dueDate: string;
  points: number;
}

export default function AssignmentText({
  name,
  moduleName,
  moduleLink,
  releaseDate,
  dueDate,
  points,
}: AssignmentTextProps) {
  return (
    <Row>
      <Col sm={12} className="fw-bold">
        <Link to="/Kambaz/Courses/1234/Assignments/123" className="text-decoration-none text-dark">{name}</Link>
      </Col>
      <Col sm={12}>
        <Link to={moduleLink} className="text-decoration-none text-danger">
          {moduleName}
        </Link>{" "}
        | <span className="fw-bold">Not avaliable until</span> {releaseDate} |
      </Col>
      <Col sm={12}>
        <span className="fw-bold">Due</span> {dueDate} | {points} pts
      </Col>
    </Row>
  );
}

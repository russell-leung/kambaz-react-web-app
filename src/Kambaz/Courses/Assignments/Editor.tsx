import { Button, Card, Col, Row } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Link, useParams } from "react-router";
import * as db from "../../Database";

export default function AssignmentEditor() {
  const { aid, cid } = useParams<{ aid: string, cid: string }>();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === aid
  );
  return (
    <div className="p-4 pt-0">
      <Form>
        <Form.Group controlId="assignmentName">
          <Form.Label>Assignment Name</Form.Label>
          <Form.Control type="text" defaultValue={assignment?.title} />
        </Form.Group>

        <Form.Group controlId="assignmentDescription" className="mt-3">
          <Form.Control as="textarea" defaultValue={assignment?.description} />
        </Form.Group>

        <Row className="mt-3">
          <Col className="d-flex align-items-center">
            <div className="d-flex justify-content-end flex-grow-1">
              <Form.Label htmlFor="points" className="m-0">
                Points
              </Form.Label>
            </div>
          </Col>
          <Col sm={8}>
            <Form.Group>
              <Form.Control
                id="points"
                type="number"
                defaultValue={assignment?.points}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col className="d-flex align-items-center">
            <div className="d-flex justify-content-end flex-grow-1">
              <Form.Label htmlFor="assignmentGroup" className="m-0">
                Assignment Group
              </Form.Label>
            </div>
          </Col>
          <Col sm={8}>
            <Form.Group>
              <Form.Select id="assignmentGroup" defaultValue={assignment?.assignmentGroup.toUpperCase()}>
                <option>ASSIGNMENTS</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col className="d-flex align-items-center">
            <div className="d-flex justify-content-end flex-grow-1">
              <Form.Label htmlFor="displayGrade" className="m-0">
                Display Grade as
              </Form.Label>
            </div>
          </Col>
          <Col sm={8}>
            <Form.Group>
              <Form.Select id="displayGrade" defaultValue={assignment?.displayType}>
                <option>Percentage</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col className="d-flex">
            <div className="d-flex justify-content-end flex-grow-1">
              <Form.Label htmlFor="submissionType" className="m-0">
                Submission Type
              </Form.Label>
            </div>
          </Col>
          <Col sm={8}>
            <Card className="p-3">
              <Form.Select id="submissionType" defaultValue={assignment?.submissionType}>
                <option>Online</option>
              </Form.Select>

              <Form.Group className="mt-3 d-flex flex-column gap-2">
                <Form.Label className="fw-bold">
                  Online Entry Options
                </Form.Label>
                <Form.Check type="checkbox" label="Text Entry" />
                <Form.Check
                  type="checkbox"
                  label="Website URL"
                  defaultChecked
                />
                <Form.Check type="checkbox" label="Media Recordings" />
                <Form.Check type="checkbox" label="Student Annotation" />
                <Form.Check type="checkbox" label="File Uploads" />
              </Form.Group>
            </Card>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col className="d-flex">
            <div className="d-flex justify-content-end flex-grow-1">
              <Form.Label className="m-0">Assign</Form.Label>
            </div>
          </Col>
          <Col sm={8}>
            <Card className="p-3">
              <Form.Group controlId="assignTo">
                <Form.Label className="fw-bold">Assign to</Form.Label>
                <Form.Select defaultValue={assignment?.assignTo}>
                  <option>Everyone</option>
                </Form.Select>
              </Form.Group>

              <Form.Group controlId="dueDate" className="mt-3">
                <Form.Label className="fw-bold">Due</Form.Label>
                <Form.Control
                  type="datetime-local"
                  defaultValue={assignment?.dueDate ? new Date(assignment.dueDate).toISOString().slice(0, 16) : ""}
                />
              </Form.Group>

              <Row className="mt-3">
                <Col>
                  <Form.Group controlId="availableFrom">
                    <Form.Label className="fw-bold">Available from</Form.Label>
                    <Form.Control
                      type="datetime-local"
                      defaultValue={assignment?.releaseDate ? new Date(assignment.releaseDate).toISOString().slice(0, 16) : ""}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="until">
                    <Form.Label className="fw-bold">Until</Form.Label>
                    <Form.Control type="datetime-local" />
                  </Form.Group>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>

        <div className="d-flex justify-content-end mt-4">
          <Link to={`/Kambaz/Courses/${cid}/Assignments`}>
            <Button variant="secondary" className="me-2">
              Cancel
            </Button>
          </Link>
          <Link to={`/Kambaz/Courses/${cid}/Assignments`}>
            <Button variant="danger">Save</Button>
          </Link>
        </div>
      </Form>
    </div>
  );
}

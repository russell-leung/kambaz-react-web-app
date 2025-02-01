import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <Form className="d-flex flex-column gap-2">
        <Form.Group>
          <Form.Control
            type="text"
            defaultValue="alice"
            placeholder="username"
            className="wd-username"
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="text"
            defaultValue="123"
            placeholder="password"
            className="wd-password"
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="text"
            defaultValue="Alice"
            placeholder="First Name"
            id="wd-firstname"
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="text"
            defaultValue="Wonderland"
            placeholder="Last Name"
            id="wd-lastname"
          />
        </Form.Group>
        <Form.Group>
          <Form.Control type="date" id="wd-dob" />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="email"
            defaultValue="alice@wonderland"
            placeholder="email"
            id="wd-email"
          />
        </Form.Group>
        <Form.Group>
          <Form.Control as="select" defaultValue="USER" id="wd-role">
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </Form.Control>
        </Form.Group>
        <Link to="/Kambaz/Account/Signin">
          <Button variant="danger" className="w-100">Sign out</Button>
        </Link>
      </Form>
    </div>
  );
}

// Signup is child of Auth.jsx, import below
import Signup from "./signup/Signup";
// Login is child of Auth.jsx, importing below
import Login from "./login/Login";
// Container is Reactstrap's resizing div with grid rows and columns
import { Col, Container, Row } from "reactstrap";

export default function Auth() {
  return (
    <Container>
      <Row>
        <Col md="6">
          <Signup />
          <Login />
        </Col>
        <Col md="6">
          <Login />
        </Col>
      </Row>
    </Container>
  );
}

// Signup is child of Auth.jsx, import below
import Signup from "./signup/Signup";
// Container is Reactstrap's resizing div with grid rows and columns
import { Col, Container, Row } from "reactstrap";

export default function Auth() {
  return (
    <Container>
      <Row>
        <Col md="6">
          <Signup />
        </Col>
      </Row>
    </Container>
  );
}

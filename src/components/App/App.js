import { Outlet } from "react-router-dom";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import JTNav from "components/JTNav/JTNav";

function App() {

  return (
    <Container fluid>
      <Row>
      <Col xs={2} >
        <JTNav />
      </Col>
      <Col xs={10} className="mt-2">
        <Outlet />
      </Col>
      </Row>
    </Container>
  );
}

export default App;

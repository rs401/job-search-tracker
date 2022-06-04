import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import JTTable from "components/JTTable/JTTable";

const Home = () => {
  return (
  <Container>
    <Row>
      <Col><JTTable /></Col>
    </Row>
    <Row>
      <Col>totales chart</Col>
      <Col>rejected chart</Col>
    </Row>
    <Row>
      <Col>another chart</Col>
      <Col>some other chart</Col>
    </Row>
  </Container>
  );
};

export default Home;

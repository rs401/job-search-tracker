import React, { useState } from "react";
import { createApplication } from "graphql/mutations";
import { API, graphqlOperation } from "aws-amplify";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import ToastContainer from "react-bootstrap/ToastContainer";
import Toast from "react-bootstrap/Toast";

const initialState = {
  company: "",
  position: "",
  description: "",
  jobPostUrl: "",
};

const NewAppForm = () => {
  const [formState, setFormState] = useState(initialState);
  const [showToast, setShowToast] = useState(false);

  const toggleShowToast = () => setShowToast(!showToast);

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value });
  }

  async function addApplication() {
    try {
      if (
        !formState.company ||
        !formState.description ||
        !formState.position ||
        !formState.jobPostUrl
      )
        return;
      const app = { ...formState };
      setFormState(initialState);
      await API.graphql(graphqlOperation(createApplication, { input: app }));
      toggleShowToast();
    } catch (err) {
      console.log("error creating todo:", err);
    }
  }

  return (
    <Container>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Company</Form.Label>
          <Form.Control
            onChange={(event) => setInput("company", event.target.value)}
            value={formState.company}
            placeholder="Company"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Position</Form.Label>
          <Form.Control
            onChange={(event) => setInput("position", event.target.value)}
            value={formState.position}
            placeholder="Position"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Job Post URL</Form.Label>
          <Form.Control
            onChange={(event) => setInput("jobPostUrl", event.target.value)}
            value={formState.jobPostUrl}
            placeholder="Job Post URL"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            onChange={(event) => setInput("description", event.target.value)}
            value={formState.description}
            placeholder="Description"
          />
        </Form.Group>
        <Button onClick={addApplication}>Add Application</Button>
      </Form>
      <ToastContainer position="middle-center">
        <Toast show={showToast} onClose={toggleShowToast} bg="success" delay={3000} autohide>
          <Toast.Header>
            <strong className="me-auto">Success</strong>
          </Toast.Header>
          <Toast.Body>Application added!</Toast.Body>
        </Toast>
      </ToastContainer>
    </Container>
  );
};

export default NewAppForm;

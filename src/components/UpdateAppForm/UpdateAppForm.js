import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { updateApplication } from "graphql/mutations";
import { getApplication } from "graphql/queries";
import { API, graphqlOperation } from "aws-amplify";
import { useParams, useNavigate } from "react-router-dom";

const initialState = {
  createdAt: "",
  updatedAt: "",
  company: "",
  position: "",
  description: "",
  jobPostUrl: "",
  response: false,
  outcome: null,
};

const UpdateAppForm = () => {
  const [formState, setFormState] = useState(initialState);
  const [resp, setResp] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const outcomeKeys = ["SECOND_INTERVIEW", "ACCEPTED", "REJECTED", "GHOSTED"];
  const toggleResp = () => {
    setResp(resp => !resp);
    setInput("response", resp);
    console.log("resp", resp);
  }

  function setInput(key, value) {
    console.log("key:", key, "value:", value);
    setFormState({ ...formState, [key]: value });
  }

  useEffect(() => {
    fetchApp();
  }, );

  async function fetchApp() {
    try {
      const appData = await API.graphql(
        graphqlOperation(getApplication, { id: id })
      );
      const app = appData.data;
      
      setFormState(app.getApplication);
      setResp(app.getApplication.response);
    } catch (err) {
      console.log("error: ", err);
    }
  }

  async function updateApp() {
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
      await API.graphql(graphqlOperation(updateApplication, { input: app }));
      navigate("/");
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
            as="textarea"
            rows={3}
          />
        </Form.Group>
        <Form.Check
          onChange={() => toggleResp()}
          type="switch"
          checked={resp}
          label={`Response? ${resp}`}
        />
        <Form.Group className="mb-3">
          <Form.Label>Outcome</Form.Label>
          <Form.Select
          onChange={(event) => setInput("outcome", event.target.value)}
          value={formState.outcome}>
            <option>---</option>
            {outcomeKeys.map((outcome) => {
              return (
                <option key={outcome} value={outcome}>
                  {outcome}
                </option>
              );
            })}
          </Form.Select>
        </Form.Group>
        <Button onClick={updateApp}>Update Application</Button>
      </Form>
    </Container>
  );
};

export default UpdateAppForm;

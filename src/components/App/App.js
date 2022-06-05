import { useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listApplications } from "graphql/queries";
import { Outlet } from "react-router-dom";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import JTNav from "components/JTNav/JTNav";
import { useSetRecoilState } from "recoil";
import { allAppsState } from "recoil/AllAppsState";

function App() {
  const setApps = useSetRecoilState(allAppsState);

  useEffect(() => {
    fetchApplications();
  }, );

  async function fetchApplications() {
    try {
      const appData = await API.graphql(graphqlOperation(listApplications));
      const apps = appData.data.listApplications.items;
      apps.sort((a, b) => {
        return a.createdAt > b.createdAt ? 1 : -1;
      });
      setApps(apps);
      console.log("apps", apps);
    } catch (err) {
      console.log("error fetching apps: ", err);
    }
  }

  return (
    <Container fluid>
      <Row>
        <Col xs={2}>
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

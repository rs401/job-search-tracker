import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { API, graphqlOperation } from "aws-amplify";
import { listApplications } from "graphql/queries";
import Moment from "react-moment";
import { useNavigate } from "react-router-dom";

const JTTable = () => {
  const navigate = useNavigate();
  const [apps, setApps] = useState([]);
  const displayedColumns = [
    "Created At",
    "Company",
    "Description",
    "Position",
    "Job Post URL",
    "Response",
    "Outcome",
    "Updated At",
  ];

  useEffect(() => {
    fetchApplications();
  }, []);

  async function fetchApplications() {
    try {
      const appData = await API.graphql(graphqlOperation(listApplications));
      const apps = appData.data.listApplications.items;
      apps.sort((a,b) => {
        return (a.createdAt > b.createdAt) ? 1: -1;
      });
      setApps(apps);
    } catch (err) {
      console.log("error fetching apps");
    }
  }

  function handleRowClick(id) {
    navigate(`/update/${id}`);
  }

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          {displayedColumns.map((col) => {
            return <th key={col}>{col}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {apps.map((app) => {
          return (
            <tr key={app.id} onClick={(e) => {
              e.preventDefault();
              handleRowClick(app.id)
            }}>
              <td>
                <Moment format="YYYY/MM/DD">{app.createdAt}</Moment>
              </td>
              <td>{app.company}</td>
              <td>{app.description}</td>
              <td>{app.position}</td>
              <td>{app.jobPostUrl}</td>
              <td>{String(app.response)}</td>
              <td>{app.outcome}</td>
              <td>
                <Moment format="YYYY/MM/DD">{app.updatedAt}</Moment>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default JTTable;

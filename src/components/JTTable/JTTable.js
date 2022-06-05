import React from "react";
import Table from "react-bootstrap/Table";
import Moment from "react-moment";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { allAppsState } from "recoil/AllAppsState";

const JTTable = () => {
  const navigate = useNavigate();
  const apps = useRecoilValue(allAppsState);
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
            <tr
              key={app.id}
              onClick={(e) => {
                e.preventDefault();
                handleRowClick(app.id);
              }}
            >
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

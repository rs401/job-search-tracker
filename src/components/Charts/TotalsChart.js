import React, { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { allAppsState } from "recoil/AllAppsState";
import BaseChart from "components/Charts/BaseChart";

const TotalsChart = () => {
  const allApps = useRecoilValue(allAppsState);
  // const outcomeKeys = ["SECOND_INTERVIEW", "ACCEPTED", "REJECTED", "GHOSTED"];
  const [totalResponse, setTotalResponse] = useState(0);
  const [totalSecondInterview, setTotalSecondInterview] = useState(0);
  const [totalAccepted, setTotalAccepted] = useState(0);
  const [totalRejected, setTotalRejected] = useState(0);
  const [totalGhosted, setTotalGhosted] = useState(0);

  const totalApps = allApps.length;
  const getTotalResponse = () => {
    let tmp = allApps.filter((app) => {
      return app.response === true;
    });
    console.log("tmp responses: ", tmp);
    setTotalResponse(tmp.length);
  };
  const getTotalSecondInterview = () => {
    let tmp = allApps.filter((app) => {
      return app.outcome === "SECOND_INTERVIEW";
    });
    setTotalSecondInterview(tmp.length);
  };
  const getTotalAccepted = () => {
    let tmp = allApps.filter((app) => {
      return app.outcome === "ACCEPTED";
    });
    setTotalAccepted(tmp.length);
  };
  const getTotalRejected = () => {
    let tmp = allApps.filter((app) => {
      return app.outcome === "REJECTED";
    });
    setTotalRejected(tmp.length);
  };
  const getTotalGhosted = () => {
    let tmp = allApps.filter((app) => {
      return app.outcome === "GHOSTED";
    });
    setTotalGhosted(tmp.length);
  };

  useEffect(() => {
    getTotalResponse();
    getTotalSecondInterview();
    getTotalAccepted();
    getTotalRejected();
    getTotalGhosted();
  }, );

  const totals = [
    {
      name: "Apps",
      totals: totalApps,
    },
    {
      name: "Responses",
      totals: totalResponse,
    },
    {
      name: "2nd Inv",
      totals: totalSecondInterview,
    },
    {
      name: "Accepted",
      totals: totalAccepted,
    },
    {
      name: "Rejected",
      totals: totalRejected,
    },
    {
      name: "Ghosted",
      totals: totalGhosted,
    },
  ];

  return (
    <div>Totals:
      <BaseChart data={totals} dataKey="totals" />
    </div>
  );
};

export default TotalsChart;

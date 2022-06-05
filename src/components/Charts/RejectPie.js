import React from "react";
import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { allAppsState } from "recoil/AllAppsState";
import { useRecoilValue } from "recoil";

const RejectPie = () => {
  const apps = useRecoilValue(allAppsState);
  const data = [
    {
      name: "Total Apps",
      value: apps.length,
      color: "#20c997",
    },
    {
      name: "Rejections",
      value: apps.filter((app) => app.outcome === "REJECTED").length,
      color: "#dc3545",
    },
  ];

  return (
    <div>Rejections:
    <ResponsiveContainer width="100%" height={300}>
      <PieChart width={730} height={250} dataKey="name">
        <Tooltip />
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          label={true}
        >
          {data.map((entry) => {
            return <Cell  key={`${entry.name}`} fill={`${entry.color}`} />;
          })}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
    </div>
  );
};

export default RejectPie;

import React from "react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  ResponsiveContainer,
} from "recharts";

const BaseChart = ({data, dataKey}) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart width={500} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey={dataKey} fill="#82ca9d" />
      </BarChart>
      </ResponsiveContainer>
  );
};

export default BaseChart;

import { color } from "@mui/system";
import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7], // CSS-style declaration
];

export const options = {
  title: "My Daily Activities",
  pieHole: 0.4,
  is3D: false,
  backgroundColor: "#1a1541",
  titleTextStyle: {
    color: "#ffffff", // title font color
    fontSize: 18,
    bold: true,
  },
  legend: {
    textStyle: {
      color: "#ffffff", // legend text color
      fontSize: 14,
    },
  },
  pieSliceTextStyle: {
    color: "#ffffff", // labels inside pie slices
    fontSize: 10,
  },
};

export default function Pie() {
  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="310px"
      data={data}
      options={options}
    />
  );
}

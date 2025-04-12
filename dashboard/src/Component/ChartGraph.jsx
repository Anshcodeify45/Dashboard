import { Box, fontSize } from "@mui/system";
import React from "react";
import { Chart } from "react-google-charts";

const data = [
  ['Year', 'Sales', 'Expenses', 'Profit'],
  ['2017', 1000, 400, 200],
  ['2018', 1170, 460, 250],
  ['2019', 660, 1120, 300],
  ['2020', 1030, 540, 350],
  ['2021', 118, 450, 850],
  ['2022', 670, 920, 500],
  ['2023', 1110, 780, 410]
];

// Material chart options
const options = {
  chart: {
    title: "Company Performance",
    subtitle: "Sales and Expenses over the Years",
  },
  colors: ["#20B2AA", "rgb(141, 52, 218)", "#FFD700"],
  
  hAxis: { title: "Year", titleTextStyle: { color: "black" },fontSize: 12},
  vAxis: { title: "Value", titleTextStyle: { color: "black" },fontSize: 12},


 
};

function ChartGraph() {
  return (
    <Box>
    <Chart
      // Note the usage of Bar and not BarChart for the material version
      chartType="ColumnChart"
      width="100%"
      height="350px"
      data={data}
      options={options}
    />
    </Box>
  );
}

export default ChartGraph;
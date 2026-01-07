import { Chart } from "react-google-charts";
import { Card } from "antd";

export const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7], // CSS-style declaration
];

export const options = {
  pieHole: 0.4,
  is3D: false,
  legend: "bottom",
  backgroundColor: "none",
};

const DoughnutChart = () => {
  return (
    <>
      <Card
        title="Impact Summary"
        style={{
          marginTop: "40px",
          position: "relative",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        <div className="chartDonut">
          <Chart
            chartType="PieChart"
            width="100%"
            height="400px"
            data={data}
            options={options}
            style={{
              position: "absolute",
              bottom: "50px",
              right: "5px",
              backgroundColor: "none",
            }}
          />
        </div>
      </Card>
    </>
  );
};

export default DoughnutChart;

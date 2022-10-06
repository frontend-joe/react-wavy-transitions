import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Chart from "react-apexcharts";
import "./styles.css";

const options = {
  chart: {
    id: "basic-bar",
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },
  grid: {
    show: false,
    padding: {
      top: -30,
      left: -10,
      bottom: -16,
      right: 0,
    },
  },
  tooltip: {
    enabled: false,
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: false,
  },
  xaxis: {
    labels: {
      show: false,
    },
    dataLabels: {
      show: false,
    },
    markers: {
      enabled: false,
    },
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
  },
  yaxis: {
    max: 100,
    labels: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
  },
};

export const WavyWaves = () => {
  const [series, setSeries] = useState<number[]>([
    100, 100, 100, 100, 100, 100, 100, 100,
  ]);

  useEffect(() => {
    setTimeout(() => {
      const wavyWaves = document.getElementById(
        "react-wavy-transitions__waves"
      );

      const wavyContainer = document.getElementById(
        "react-wavy-transitions__container"
      )!;

      ReactDOM.unmountComponentAtNode(wavyContainer);
    }, 800);
  }, []);

  return (
    <div
      id="react-wavy-transitions__waves"
      className="react-wavy-transitions__waves"
    >
      <Chart
        options={options}
        series={[
          {
            name: "series-1",
            data: series,
          },
        ]}
        type="area"
        width="100%"
        height="100%"
      />
    </div>
  );
};

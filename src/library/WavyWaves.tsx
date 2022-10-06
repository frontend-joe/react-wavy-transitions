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
    animations: {
      enabled: true,
      speed: 1,
      dynamicAnimation: {
        speed: 500,
      },
      animateGradually: {
        enabled: true,
        delay: 0,
      },
    },
  },
  fill: {
    opacity: 1,
    type: "solid",
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
    min: 99,
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
  const [seriesA, setSeriesA] = useState<number[]>([
    99, 100, 99, 100, 99, 100, 99, 100,
  ]);
  const [seriesB, setSeriesB] = useState<number[]>([
    99, 100, 99, 100, 99, 100, 99, 100,
  ]);

  useEffect(() => {
    setSeriesB([100, 100, 100, 100, 100, 100, 100, 100]);

    setTimeout(() => {
      setSeriesA([99, 99, 99, 99, 99, 99, 99, 99]);
    }, 500);

    setTimeout(() => {
      const wavyContainer = document.getElementById(
        "react-wavy-transitions__container"
      )!;

      ReactDOM.unmountComponentAtNode(wavyContainer);
    }, 1000);
  }, []);

  return (
    <div
      id="react-wavy-transitions__waves"
      className="react-wavy-transitions__waves"
    >
      <div className="react-wavy-transitions__top">
        <Chart
          options={options}
          series={[
            {
              name: "series-1",
              data: seriesA,
            },
          ]}
          type="area"
          width="100%"
          height="100%"
        />
      </div>
      <div className="react-wavy-transitions__bottom">
        <Chart
          options={options}
          series={[
            {
              name: "series-1",
              data: seriesB,
            },
          ]}
          type="area"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

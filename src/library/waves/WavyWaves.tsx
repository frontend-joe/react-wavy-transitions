import { FC, useEffect, useState } from "react";
import Chart from "react-apexcharts";
import "./styles.css";
import { getOptions } from "./options";

type Props = {
  color?: string;
};

export const WavyWaves: FC<Props> = ({ color }) => {
  const [seriesA, setSeriesA] = useState<number[]>([3, 1, 2, 1, 3]);
  const [seriesB, setSeriesB] = useState<number[]>([1, 3, 2, 3, 2]);

  const options = getOptions(color!);

  useEffect(() => {
    setSeriesB([3, 3, 3, 3, 3]);
    setTimeout(() => setSeriesA([0, 0, 0, 0, 0]), 750); // half total animation
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

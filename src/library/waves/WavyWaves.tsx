import { FC, useEffect, useState } from "react";
import Chart from "react-apexcharts";
import "./styles.css";
import { getOptions } from "./options";

type Props = {
  color: string;
  direction: string;
  duration: number;
};

export const WavyWaves: FC<Props> = ({ color, direction, duration }) => {
  const [seriesA, setSeriesA] = useState<number[]>([3, 1, 2, 1, 3]);
  const [seriesB, setSeriesB] = useState<number[]>([1, 3, 2, 3, 2]);

  const options = getOptions(color, duration);

  useEffect(() => {
    setSeriesB([3, 3, 3, 3, 3]);
    setTimeout(() => setSeriesA([0, 0, 0, 0, 0]), duration / 2); // half total animation
  }, [duration]);

  return (
    <div id="react-wavy-transitions__waves">
      <div
        style={{ animationDuration: `${duration}ms` }}
        className={`${direction} react-wavy-transitions__first`}
      >
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
      <div
        style={{ animationDuration: `${duration}ms` }}
        className={`${direction} react-wavy-transitions__second`}
      >
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

import { FC, useEffect, useState } from "react";
import Chart from "react-apexcharts";
import "./styles.css";
import { getOptions } from "./options";

type Props = {
  color: string;
  direction: string;
  duration: number;
  seriesDataA: number[]; 
  seriesDataB: number[]; 
};

export const WavyWaves: FC<Props> = ({
  color,
  direction,
  duration,
  seriesDataA,
  seriesDataB,
}) => {
  const [seriesA, setSeriesA] = useState<number[]>(seriesDataA);
  const [seriesB, setSeriesB] = useState<number[]>(seriesDataB);

  const options = getOptions(color, duration);

  useEffect(() => {
    setSeriesB(new Array(seriesDataA.length).fill(3)); // Fill seriesB with 3's
    setTimeout(() => setSeriesA(new Array(seriesDataA.length).fill(0)), duration / 2); // half total animation
  }, [duration, seriesDataA.length]);

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
          type={"area"}
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
          type={"area"}
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

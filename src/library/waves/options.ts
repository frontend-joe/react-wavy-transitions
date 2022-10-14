const options = {
  chart: {
    id: "wavy-mcwave-wave",
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
        speed: 750,
      },
      animateGradually: {
        enabled: true,
        delay: 0,
      },
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
  fill: {
    opacity: 1,
    type: "solid",
    colors: [""],
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
    max: 3,
    min: 0,
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

export const getOptions = (color: string = "#8f44fd", duration: number) => {
  if (color) {
    options.fill = {
      opacity: 1,
      type: "solid",
      colors: [color],
    };
  }

  options.chart.animations.dynamicAnimation.speed = duration / 2;

  return options;
};

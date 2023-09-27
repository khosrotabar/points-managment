import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

interface LineChartProps {
  data: number[];
  labels: string[];
  width: number;
  height: number;
  color: string;
}

const LineChart: React.FC<LineChartProps> = ({
  data,
  labels,
  width,
  height,
  color,
}) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      chartInstance.current = new Chart(chartRef.current, {
        type: "line",
        data: {
          labels,
          datasets: [
            {
              label: "Line Chart",
              data,
              fill: false,
              borderColor: color,
              tension: 0,
              pointRadius: 0, // Set point radius to 0 to hide data points
            },
          ],
        },
        options: {
          scales: {
            x: {
              display: false, // Hide x-axis
            },
            y: {
              display: false, // Hide y-axis
            },
          },
          plugins: {
            legend: {
              display: false, // Hide legend
            },
          },
        },
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data, labels]);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;
      if (chartRef.current) {
        chartRef.current.style.width = `${width}px`;
        chartRef.current.style.height = `${height}px`;
      }
    });

    if (chartRef.current) {
      resizeObserver.observe(chartRef.current.parentElement!);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={chartRef}
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
    />
  );
};

export default LineChart;

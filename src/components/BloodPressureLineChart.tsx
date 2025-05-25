import { Line } from 'react-chartjs-2';
import { Chart, LineElement, PointElement, LinearScale, CategoryScale, Legend, Tooltip } from 'chart.js';

Chart.register(LineElement, PointElement, LinearScale, CategoryScale, Legend, Tooltip);

interface BloodPressureLineChartProps {
  labels: string[];
  systolicData: number[];
  diastolicData: number[];
}

export const BloodPressureLineChart: React.FC<BloodPressureLineChartProps> = ({ labels, systolicData, diastolicData }) => {
  const chartData = {
    labels,
    datasets: [
      {
        label: 'Systolic',
        data: systolicData,
        borderColor: '#D16FFF',
        backgroundColor: '#D16FFF',
        tension: 0.4,
        pointRadius: 6,
        pointBackgroundColor: '#fff',
        pointBorderColor: '#D16FFF',
        fill: false,
      },
      {
        label: 'Diastolic',
        data: diastolicData,
        borderColor: '#7B61FF',
        backgroundColor: '#7B61FF',
        tension: 0.4,
        pointRadius: 6,
        pointBackgroundColor: '#fff',
        pointBorderColor: '#7B61FF',
        fill: false,
      },
    ],
  };

  const chartOptions = {
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
    scales: {
      y: {
        min: 60,
        max: 180,
        ticks: { stepSize: 20 },
        grid: { color: '#F0F0F0' },
      },
      x: {
        grid: { display: false },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return <Line data={chartData} options={chartOptions} />;
}; 
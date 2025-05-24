import { Box, Typography, Grid, Paper, MenuItem, Select, Divider } from '@mui/material';
import { Line } from 'react-chartjs-2';
import { Chart, LineElement, PointElement, LinearScale, CategoryScale, Legend, Tooltip } from 'chart.js';
import { HeartBPM, RespiratoryRate, Temperature } from '../assets/svg';
import { DiagnosisHistoryEntry } from '../types/patient';

Chart.register(LineElement, PointElement, LinearScale, CategoryScale, Legend, Tooltip);

interface BloodPressureChartProps {
  diagnosis_history: DiagnosisHistoryEntry[];
}

export const BloodPressureChart: React.FC<BloodPressureChartProps> = ({ diagnosis_history }) => {
  // Only use the last 6 entries (most recent months)
  const lastSix = diagnosis_history.slice(-6);
  const labels = lastSix.map(entry => `${entry.month}, ${entry.year}`);
  const systolicData = lastSix.map(entry => entry.blood_pressure.systolic.value);
  const diastolicData = lastSix.map(entry => entry.blood_pressure.diastolic.value);

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

  // Use the most recent entry for summary/stat cards
  const latest = lastSix[lastSix.length - 1];

  return (
    <>
      <Paper
        sx={{
          background: "#F4F0FE",
          borderRadius: "12px",
          opacity: 1,
          p: 3,
          mb: 1,
          boxShadow: "none",
        }}
      >
        <Box sx={{ display: "flex", gap: 4 }}>
          {/* Chart */}
          <Box sx={{ flex: 1, minWidth: 0, height: 220 }}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="flex-start"
              mb={2}
            >
              <Typography variant="h6" fontWeight={700}>
                Blood Pressure
              </Typography>
              <Select
                value="6m"
                size="small"
                sx={{
                  fontWeight: 500,
                  fontSize: 14,
                  background: "#fff",
                  borderRadius: 2,
                  backgroundColor: "transparent",
                }}
              >
                <MenuItem value="6m">Last 6 months</MenuItem>
              </Select>
            </Box>
            <Line data={chartData} options={chartOptions} />
          </Box>
          {/* Systolic/Diastolic Summary */}
          <Box
            sx={{
              width: 220,
              minWidth: 180,
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
              <Box
                sx={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#D16FFF",
                }}
              />
              <Typography sx={{ fontWeight: 700 }}>Systolic</Typography>
            </Box>
            <Typography
              sx={{ color: "#1A1A1A", fontWeight: 700, fontSize: 28, mb: 0 }}
            >
              {latest.blood_pressure.systolic.value}
            </Typography>
            <Typography sx={{ color: "#888", fontSize: 15 }}>
              {latest.blood_pressure.systolic.levels}
            </Typography>
            <Divider sx={{ my: 1 }} />
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Box
                sx={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#7B61FF",
                }}
              />
              <Typography sx={{ fontWeight: 700 }}>Diastolic</Typography>
            </Box>
            <Typography
              sx={{ color: "#1A1A1A", fontWeight: 700, fontSize: 28, mb: 0 }}
            >
              {latest.blood_pressure.diastolic.value}
            </Typography>
            <Typography sx={{ color: "#888", fontSize: 15 }}>
              {latest.blood_pressure.diastolic.levels}
            </Typography>
          </Box>
        </Box>
      </Paper>
      {/* Stat Cards */}
      <Grid container spacing={2} mt={1}>
        <Grid size={4}>
          <Paper
            sx={{
              background: "#E6F7F6",
              borderRadius: 3,
              p: 2,
              boxShadow: "none",
            }}
          >
            <RespiratoryRate />
            <Typography fontWeight={700} fontSize={22} mt={1}>
              {latest.respiratory_rate.value} bpm
            </Typography>
            <Typography fontSize={15} color="#888">
              Respiratory Rate
            </Typography>
            <Typography fontSize={13} color="#00CCCC" mt={0.5}>
              {latest.respiratory_rate.levels}
            </Typography>
          </Paper>
        </Grid>
        <Grid size={4}>
          <Paper
            sx={{
              background: "#FFF2F2",
              borderRadius: 3,
              p: 2,
              boxShadow: "none",
            }}
          >
            <Temperature />
            <Typography fontWeight={700} fontSize={22} mt={1}>
              {latest.temperature.value}°F
            </Typography>
            <Typography fontSize={15} color="#888">
              Temperature
            </Typography>
            <Typography fontSize={13} color="#FFB547" mt={0.5}>
              {latest.temperature.levels}
            </Typography>
          </Paper>
        </Grid>
        <Grid size={4}>
          <Paper
            sx={{
              background: "#FFE6F0",
              borderRadius: 3,
              p: 2,
              boxShadow: "none",
            }}
          >
            <HeartBPM />
            <Typography fontWeight={700} fontSize={22} mt={1}>
              {latest.heart_rate.value} bpm
            </Typography>
            <Typography fontSize={15} color="#888">
              Heart Rate
            </Typography>
            <Typography fontSize={13} color="#FF5A7D" mt={0.5}>
              {latest.heart_rate.levels}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}; 
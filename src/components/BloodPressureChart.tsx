import { Box, Typography, Grid, Paper, MenuItem, Select } from '@mui/material';
import { Line } from 'react-chartjs-2';
import { Chart, LineElement, PointElement, LinearScale, CategoryScale, Legend, Tooltip } from 'chart.js';
import { HeartBPM, RespiratoryRate, Temperature } from '../assets/svg';

Chart.register(LineElement, PointElement, LinearScale, CategoryScale, Legend, Tooltip);

const chartData = {
  labels: ['Oct, 2023', 'Nov, 2023', 'Dec, 2023', 'Jan, 2024', 'Feb, 2024', 'Mar, 2024'],
  datasets: [
    {
      label: 'Systolic',
      data: [120, 130, 160, 140, 150, 160],
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
      data: [100, 80, 120, 110, 90, 78],
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

export const BloodPressureChart = () => (
  <>
    <Paper
      sx={{
        borderRadius: 3,
        background: '#F8F9FF',
        p: 3,
        mb: 3,
        boxShadow: 'none',
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h6" fontWeight={700}>
          Blood Pressure
        </Typography>
        <Select value="6m" size="small" sx={{ fontWeight: 500, fontSize: 14, background: '#fff', borderRadius: 2 }}>
          <MenuItem value="6m">Last 6 months</MenuItem>
        </Select>
      </Box>
      <Box sx={{ height: 220 }}>
        <Line data={chartData} options={chartOptions} />
      </Box>
      <Grid container spacing={2} mt={2}>
        <Grid size={6}>
          <Box display="flex" alignItems="center" gap={1}>
            <Box sx={{ width: 12, height: 12, borderRadius: '50%', background: '#D16FFF' }} />
            <Typography fontWeight={700} color="#1A1A1A">Systolic</Typography>
            <Typography fontWeight={700} color="#1A1A1A" ml={1}>160</Typography>
          </Box>
          <Typography fontSize={13} color="#888">Higher than Average</Typography>
        </Grid>
        <Grid size={6}>
          <Box display="flex" alignItems="center" gap={1}>
            <Box sx={{ width: 12, height: 12, borderRadius: '50%', background: '#7B61FF' }} />
            <Typography fontWeight={700} color="#1A1A1A">Diastolic</Typography>
            <Typography fontWeight={700} color="#1A1A1A" ml={1}>78</Typography>
          </Box>
          <Typography fontSize={13} color="#888">Lower than Average</Typography>
        </Grid>
      </Grid>
    </Paper>
    {/* Stat Cards */}
    <Grid container spacing={2} mt={1}>
      <Grid size={4}>
        <Paper sx={{ background: '#E6F7F6', borderRadius: 3, p: 2, textAlign: 'center', boxShadow: 'none' }}>
          <RespiratoryRate />
          <Typography fontWeight={700} fontSize={22} mt={1}>20 bpm</Typography>
          <Typography fontSize={15} color="#888">Respiratory Rate</Typography>
          <Typography fontSize={13} color="#00CCCC" mt={0.5}>Normal</Typography>
        </Paper>
      </Grid>
      <Grid size={4}>
        <Paper sx={{ background: '#FFF2F2', borderRadius: 3, p: 2, textAlign: 'center', boxShadow: 'none' }}>
          <Temperature />
          <Typography fontWeight={700} fontSize={22} mt={1}>98.6°F</Typography>
          <Typography fontSize={15} color="#888">Temperature</Typography>
          <Typography fontSize={13} color="#FFB547" mt={0.5}>Normal</Typography>
        </Paper>
      </Grid>
      <Grid size={4}>
        <Paper sx={{ background: '#FFE6F0', borderRadius: 3, p: 2, textAlign: 'center', boxShadow: 'none' }}>
          <HeartBPM />
          <Typography fontWeight={700} fontSize={22} mt={1}>78 bpm</Typography>
          <Typography fontSize={15} color="#888">Heart Rate</Typography>
          <Typography fontSize={13} color="#FF5A7D" mt={0.5}>Lower than Average</Typography>
        </Paper>
      </Grid>
    </Grid>
  </>
); 
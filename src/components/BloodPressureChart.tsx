import { Box, Paper } from '@mui/material';
import { DiagnosisHistoryEntry } from '../types/patient';
import { BloodPressureChartHeader } from './BloodPressureChartHeader';
import { BloodPressureLineChart } from './BloodPressureLineChart';
import { BloodPressureSummary } from './BloodPressureSummary';
import { StatCardsRow } from './StatCardsRow';

interface BloodPressureChartProps {
  diagnosis_history: DiagnosisHistoryEntry[];
}

export const BloodPressureChart: React.FC<BloodPressureChartProps> = ({ diagnosis_history }) => {
  // Only use the last 6 entries (most recent months)
  const lastSix = diagnosis_history.slice(-6);
  const labels = lastSix.map(entry => `${entry.month}, ${entry.year}`);
  const systolicData = lastSix.map(entry => entry.blood_pressure.systolic.value);
  const diastolicData = lastSix.map(entry => entry.blood_pressure.diastolic.value);
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
            <BloodPressureChartHeader value="6m" />
            <BloodPressureLineChart
              labels={labels}
              systolicData={systolicData}
              diastolicData={diastolicData}
            />
          </Box>
          {/* Systolic/Diastolic Summary */}
          <BloodPressureSummary
            systolicValue={latest.blood_pressure.systolic.value}
            systolicLevel={latest.blood_pressure.systolic.levels}
            diastolicValue={latest.blood_pressure.diastolic.value}
            diastolicLevel={latest.blood_pressure.diastolic.levels}
          />
        </Box>
      </Paper>
      {/* Stat Cards */}
      <StatCardsRow
        respiratoryRate={latest.respiratory_rate}
        temperature={latest.temperature}
        heartRate={latest.heart_rate}
      />
    </>
  );
}; 
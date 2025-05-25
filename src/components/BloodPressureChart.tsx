import { Box, Paper } from '@mui/material';
import { DiagnosisHistoryEntry } from '../types/patient';
import { BloodPressureChartHeader } from './BloodPressureChartHeader';
import { BloodPressureLineChart } from './BloodPressureLineChart';
import { BloodPressureSummary } from './BloodPressureSummary';
import { StatCardsRow } from './StatCardsRow';
import { useState } from 'react';
import { filterDiagnosisHistory } from '../utils/filterDiagnosisHistory';

interface BloodPressureChartProps {
  diagnosis_history: DiagnosisHistoryEntry[];
}

export const BloodPressureChart: React.FC<BloodPressureChartProps> = ({ diagnosis_history }) => {
  const [filter, setFilter] = useState<'1m' | '3m' | '6m' | '1y'>('6m');

  const handleFilterChange = (value: string) => {
    setFilter(value as '1m' | '3m' | '6m' | '1y');
  };

  const filtered = filterDiagnosisHistory(diagnosis_history, filter);
  const labels = filtered.map(entry => `${entry.month}, ${entry.year}`);
  const systolicData = filtered.map(entry => entry.blood_pressure.systolic.value);
  const diastolicData = filtered.map(entry => entry.blood_pressure.diastolic.value);
  const latest = filtered[filtered.length - 1];

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
            <BloodPressureChartHeader value={filter} onChange={handleFilterChange} />
            <BloodPressureLineChart
              labels={labels}
              systolicData={systolicData}
              diastolicData={diastolicData}
            />
          </Box>
          {/* Systolic/Diastolic Summary */}
          {latest && (
            <BloodPressureSummary
              systolicValue={latest.blood_pressure.systolic.value}
              systolicLevel={latest.blood_pressure.systolic.levels}
              diastolicValue={latest.blood_pressure.diastolic.value}
              diastolicLevel={latest.blood_pressure.diastolic.levels}
            />
          )}
        </Box>
      </Paper>
      {/* Stat Cards */}
      {latest && (
        <StatCardsRow
          respiratoryRate={latest.respiratory_rate}
          temperature={latest.temperature}
          heartRate={latest.heart_rate}
        />
      )}
    </>
  );
}; 
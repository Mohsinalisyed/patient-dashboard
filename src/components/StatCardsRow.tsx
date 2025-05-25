import { Grid } from '@mui/material';
import { StatCard } from './StatCard';
import { HeartBPM, RespiratoryRate, Temperature } from '../assets/svg';

interface StatCardsRowProps {
  respiratoryRate: { value: number; levels: string };
  temperature: { value: number; levels: string };
  heartRate: { value: number; levels: string };
}

export const StatCardsRow: React.FC<StatCardsRowProps> = ({ respiratoryRate, temperature, heartRate }) => (
  <Grid container spacing={2} mt={1}>
    <Grid size={4}>
      <StatCard
        icon={<RespiratoryRate />}
        value={`${respiratoryRate.value} bpm`}
        label="Respiratory Rate"
        level={respiratoryRate.levels}
        levelColor="#00CCCC"
        bgColor="#E6F7F6"
      />
    </Grid>
    <Grid size={4}>
      <StatCard
        icon={<Temperature />}
        value={`${temperature.value}°F`}
        label="Temperature"
        level={temperature.levels}
        levelColor="#FFB547"
        bgColor="#FFF2F2"
      />
    </Grid>
    <Grid size={4}>
      <StatCard
        icon={<HeartBPM />}
        value={`${heartRate.value} bpm`}
        label="Heart Rate"
        level={heartRate.levels}
        levelColor="#FF5A7D"
        bgColor="#FFE6F0"
      />
    </Grid>
  </Grid>
); 
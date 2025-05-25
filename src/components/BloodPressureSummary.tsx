import { Box, Typography, Divider } from '@mui/material';

interface BloodPressureSummaryProps {
  systolicValue: number;
  systolicLevel: string;
  diastolicValue: number;
  diastolicLevel: string;
}

export const BloodPressureSummary: React.FC<BloodPressureSummaryProps> = ({
  systolicValue,
  systolicLevel,
  diastolicValue,
  diastolicLevel,
}) => (
  <Box
    sx={{
      width: 220,
      minWidth: 180,
      display: 'flex',
      flexDirection: 'column',
      gap: 1,
    }}
  >
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
      <Box
        sx={{
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          background: '#D16FFF',
        }}
      />
      <Typography sx={{ fontWeight: 700 }}>Systolic</Typography>
    </Box>
    <Typography sx={{ color: '#1A1A1A', fontWeight: 700, fontSize: 28, mb: 0 }}>
      {systolicValue}
    </Typography>
    <Typography sx={{ color: '#888', fontSize: 15 }}>{systolicLevel}</Typography>
    <Divider sx={{ my: 1 }} />
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <Box
        sx={{
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          background: '#7B61FF',
        }}
      />
      <Typography sx={{ fontWeight: 700 }}>Diastolic</Typography>
    </Box>
    <Typography sx={{ color: '#1A1A1A', fontWeight: 700, fontSize: 28, mb: 0 }}>
      {diastolicValue}
    </Typography>
    <Typography sx={{ color: '#888', fontSize: 15 }}>{diastolicLevel}</Typography>
  </Box>
); 
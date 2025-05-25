import { Box, Typography, Select, MenuItem } from '@mui/material';

interface BloodPressureChartHeaderProps {
  value: string;
  onChange?: (value: string) => void;
}

export const BloodPressureChartHeader: React.FC<BloodPressureChartHeaderProps> = ({ value, onChange }) => (
  <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={2}>
    <Typography variant="h6" fontWeight={700}>
      Blood Pressure
    </Typography>
    <Select
      value={value}
      size="small"
      sx={{
        fontWeight: 500,
        fontSize: 14,
        background: "#fff",
        borderRadius: 2,
        backgroundColor: "transparent",
      }}
      onChange={onChange ? (e) => onChange(e.target.value as string) : undefined}
    >
      <MenuItem value="6m">Last 6 months</MenuItem>
    </Select>
  </Box>
); 
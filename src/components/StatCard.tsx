import { Paper, Typography } from '@mui/material';
import React from 'react';

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  level: string;
  levelColor: string;
  bgColor: string;
}

export const StatCard: React.FC<StatCardProps> = ({ icon, value, label, level, levelColor, bgColor }) => (
  <Paper
    sx={{
      background: bgColor,
      borderRadius: 3,
      p: 2,
      boxShadow: 'none',
      textAlign: 'center',
    }}
  >
    {icon}
    <Typography fontWeight={700} fontSize={22} mt={1}>
      {value}
    </Typography>
    <Typography fontSize={15} color="#888">
      {label}
    </Typography>
    <Typography fontSize={13} color={levelColor} mt={0.5}>
      {level}
    </Typography>
  </Paper>
); 
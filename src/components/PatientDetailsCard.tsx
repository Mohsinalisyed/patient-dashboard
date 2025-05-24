import { Box, Paper, Typography, Avatar, Button, Divider } from '@mui/material';
import { Patient } from '../types/patient';

interface PatientDetailsCardProps {
  patient: Patient;
}

export const PatientDetailsCard: React.FC<PatientDetailsCardProps> = ({ patient }) => (
  <Paper sx={{
    p: 3,
    borderRadius: 2,
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
    mb: 3,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: '#fff',
  }}>
    <Avatar src={patient.profile_picture} alt={patient.name} sx={{ width: 96, height: 96, mb: 2 }} />
    <Typography variant="h6" sx={{ fontWeight: 700, color: '#1A1A1A', mb: 1 }}>{patient.name}</Typography>
    <Typography variant="body2" sx={{ color: '#666', mb: 2 }}>{patient.gender}, Age {patient.age}</Typography>
    <Divider sx={{ width: '100%', mb: 2 }} />
    <Box sx={{ width: '100%', mb: 2 }}>
      <Typography variant="body2" sx={{ color: '#666', mb: 0.5 }}>Date of Birth</Typography>
      <Typography variant="body1" sx={{ fontWeight: 500, mb: 1 }}>{/* Add DOB if available */}</Typography>
      <Typography variant="body2" sx={{ color: '#666', mb: 0.5 }}>Phone</Typography>
      <Typography variant="body1" sx={{ fontWeight: 500, mb: 1 }}>(415) 555-1234</Typography>
      <Typography variant="body2" sx={{ color: '#666', mb: 0.5 }}>Emergency Contact</Typography>
      <Typography variant="body1" sx={{ fontWeight: 500, mb: 1 }}>(415) 555-5678</Typography>
      <Typography variant="body2" sx={{ color: '#666', mb: 0.5 }}>Insurance</Typography>
      <Typography variant="body1" sx={{ fontWeight: 500 }}>{patient.insurance_type || 'Sunrise Health Assurance'}</Typography>
    </Box>
    <Button variant="contained" sx={{ background: '#00CCCC', borderRadius: 2, fontWeight: 600, textTransform: 'none', width: '100%' }}>
      Show All Information
    </Button>
  </Paper>
); 
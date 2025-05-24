import { Box, Paper, Typography } from '@mui/material';
import { Patient } from '../types/patient';

interface PatientHeaderProps {
  patient: Patient;
}

export const PatientHeader: React.FC<PatientHeaderProps> = ({ patient }) => (
  <Paper
    sx={{
      p: 4,
      borderRadius: 4,
      boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      background: '#fff',
    }}
  >
    <Box
      component="img"
      src={patient.profilePicture}
      alt={patient.name}
      sx={{
        width: 140,
        height: 140,
        borderRadius: '50%',
        objectFit: 'cover',
        mb: 2,
      }}
    />
    <Typography variant="h5" sx={{ fontWeight: 700, color: '#1A1A1A', mb: 4 }}>
      {patient.name}
    </Typography>
    <Box sx={{ width: '100%', mb: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Box>
          <Typography fontSize={14} color="#666">Date Of Birth</Typography>
          <Typography fontWeight={700} fontSize={16}> {new Date(patient.dateOfBirth).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Box>
          <Typography fontSize={14} color="#666">Gender</Typography>
          <Typography fontWeight={700} fontSize={16}>{patient.gender}</Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Box>
          <Typography fontSize={14} color="#666">Contact Info.</Typography>
          <Typography fontWeight={700} fontSize={16}>{patient.phoneNumber}</Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Box>
          <Typography fontSize={14} color="#666">Emergency Contacts</Typography>
          <Typography fontWeight={700} fontSize={16}>{patient.emergencyContact}</Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Box>
          <Typography fontSize={14} color="#666">Insurance Provider</Typography>
          <Typography fontWeight={700} fontSize={16}>{patient.insuranceType}</Typography>
        </Box>
      </Box>
    </Box>
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Box
        component="button"
        sx={{
          background: '#00E0C6',
          color: '#fff',
          border: 'none',
          borderRadius: 999,
          px: 4,
          py: 1.5,
          fontWeight: 700,
          fontSize: 16,
          cursor: 'pointer',
          mt: 2,
          boxShadow: '0 2px 8px rgba(0,224,198,0.10)',
          transition: 'background 0.2s',
          '&:hover': { background: '#00bfae' },
        }}
      >
        Show All Information
      </Box>
    </Box>
  </Paper>
); 
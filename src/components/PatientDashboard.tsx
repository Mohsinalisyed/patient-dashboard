import { Box, Paper, Typography, Grid } from '@mui/material';
import { Patient } from '../types/patient';
import { BloodPressureChart } from './BloodPressureChart';
import { DiagnosticList } from './DiagnosticList';
import { LabResults } from './LabResults';
import { PatientHeader } from './PatientHeader';

interface PatientDashboardProps {
  patient: Patient;
}

export const PatientDashboard: React.FC<PatientDashboardProps> = ({ patient }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#F5F6FA",
      }}
    >
      <Grid container spacing={4}>
        {/* Blood Pressure Chart */}
        <Grid size={8}>
          <Paper
            sx={{
              p: 3,
              display: "flex",
              flexDirection: "column",
              borderRadius: 2,
              boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
            }}
          >
            <Typography
              variant="h6"
              sx={{ mb: 2, fontWeight: 600, color: "#1A1A1A" }}
            >
              Diagnosis History
            </Typography>
            <BloodPressureChart diagnosis_history={patient.diagnosis_history} />
          </Paper>
          {/* Diagnostic List below chart */}
          <Box sx={{ mt: 3 }}>
            <DiagnosticList diagnostic_list={patient.diagnostic_list} />
          </Box>
        </Grid>
        {/* Patient Header and Lab Results */}
        <Grid size={4}>
          <PatientHeader patient={patient}/>
          {/* Lab Results below patient header */}
          <Box sx={{ mt: 3 }}>
            <LabResults lab_results={patient.lab_results} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}; 
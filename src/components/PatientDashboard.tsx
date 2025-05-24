import { useEffect, useState } from 'react';
import { Box, Paper, Typography, CircularProgress, Grid } from '@mui/material';
import { Patient } from '../types/patient';
import { fetchPatientData } from '../services/api';
import { BloodPressureChart } from './BloodPressureChart';
import { DiagnosticList } from './DiagnosticList';
import { LabResults } from './LabResults';
import { PatientHeader } from './PatientHeader';

export const PatientDashboard: React.FC = () => {
  const [patient, setPatient] = useState<Patient | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPatientData = async () => {
      try {
        const data = await fetchPatientData();
        setPatient(data);
      } catch (err) {
        setError('Failed to load patient data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadPatientData();
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error || !patient) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <Typography color="error">{error || 'No patient data available'}</Typography>
      </Box>
    );
  }

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
            <BloodPressureChart />
          </Paper>
          {/* Diagnostic List below chart */}
          <Box sx={{ mt: 3 }}>
            <DiagnosticList />
          </Box>
        </Grid>
        {/* Patient Header and Lab Results */}
        <Grid size={4}>
    <PatientHeader patient={patient}/>
          {/* Lab Results below patient header */}
          <Box sx={{ mt: 3 }}>
            <LabResults />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}; 
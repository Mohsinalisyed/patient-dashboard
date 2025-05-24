import { useEffect, useState } from 'react';
import { Box, Paper, Typography, CircularProgress, Grid } from '@mui/material';
import { Patient } from '../types/patient';
import { fetchPatientData } from '../services/api';
import { BloodPressureChart } from './BloodPressureChart';
import { DiagnosticList } from './DiagnosticList';
import { LabResults } from './LabResults';

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
          <Paper
            sx={{
              p: 4,
              borderRadius: 4,
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              background: "#fff",
            }}
          >
            <Box
              component="img"
              src={patient.profilePicture}
              alt={patient.name}
              sx={{
                width: 140,
                height: 140,
                borderRadius: "50%",
                objectFit: "cover",
                mb: 2,
              }}
            />
            <Typography
              variant="h5"
              sx={{ fontWeight: 700, color: "#1A1A1A", mb: 3 }}
            >
              {patient.name}
            </Typography>
            <Box sx={{ width: "100%", mb: 3 }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Box>
                  <Typography fontSize={14} color="#666">
                    Date Of Birth
                  </Typography>
                  <Typography fontWeight={700} fontSize={16}>
                    {" "}
                    {new Date(patient.dateOfBirth).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Box>
                  <Typography fontSize={14} color="#666">
                    Gender
                  </Typography>
                  <Typography fontWeight={700} fontSize={16}>
                    {patient.gender}
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Box>
                  <Typography fontSize={14} color="#666">
                    Contact Info.
                  </Typography>
                  <Typography fontWeight={700} fontSize={16}>
                    {patient.phoneNumber}
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Box>
                  <Typography fontSize={14} color="#666">
                    Emergency Contacts
                  </Typography>
                  <Typography fontWeight={700} fontSize={16}>
                    {patient.emergencyContact}
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Box>
                  <Typography fontSize={14} color="#666">
                    Insurance Provider
                  </Typography>
                  <Typography fontWeight={700} fontSize={16}>
                    {patient.insuranceType}
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{ width: "100%", display: "flex", justifyContent: "center" }}
            >
              <Box
                component="button"
                sx={{
                  background: "#00E0C6",
                  color: "#fff",
                  border: "none",
                  borderRadius: 999,
                  px: 4,
                  py: 1.5,
                  fontWeight: 700,
                  fontSize: 16,
                  cursor: "pointer",
                  mt: 2,
                  boxShadow: "0 2px 8px rgba(0,224,198,0.10)",
                  transition: "background 0.2s",
                  "&:hover": { background: "#00bfae" },
                }}
              >
                Show All Information
              </Box>
            </Box>
          </Paper>
          {/* Lab Results below patient header */}
          <Box sx={{ mt: 3 }}>
            <LabResults />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}; 
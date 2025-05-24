import { Box } from '@mui/material';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { TopNav } from './components/TopNav';
import { Sidebar } from './components/Sidebar';
import { PatientDashboard } from './components/PatientDashboard';
import { fetchAllPatients, getPatientByName } from './services/api';
import { Patient } from './types/patient';

const queryClient = new QueryClient();

function AppContent() {
  const [selectedPatientName, setSelectedPatientName] = useState<string>('Ryan Johnson');

  const { data: patients, isLoading, error } = useQuery<Patient[]>({
    queryKey: ['patients'],
    queryFn: fetchAllPatients
  });

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        Loading...
      </Box>
    );
  }

  if (error || !patients) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        Error loading patient data
      </Box>
    );
  }

  const selectedPatient = getPatientByName(patients, selectedPatientName);

  if (!selectedPatient) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        Selected patient not found
      </Box>
    );
  }

  return (
    <Box
      sx={{
        maxWidth: "1600px",
        mx: "auto",
        width: "100%",
        background: "#F5F6FA",
        boxSizing: "border-box",
        px: "18px",
      }}
    >
      <TopNav />
      <Box sx={{ display: "flex" }}>
        {/* Sidebar */}
        <Box
          sx={{
            width: 260,
            minWidth: 240,
            maxWidth: 260,
            background: "#fff",
            borderRight: "1px solid #E5E8EF",
            p: 0,
            height: "100%",
          }}
        >
          <Sidebar 
            patients={patients} 
            selectedPatientName={selectedPatientName}
            onPatientSelect={setSelectedPatientName}
          />
        </Box>
        {/* Main Content */}
        <Box sx={{ flex: 1, minWidth: 0, pl: 4 }}>
          <PatientDashboard patient={selectedPatient} />
        </Box>
      </Box>
    </Box>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContent />
    </QueryClientProvider>
  );
} 
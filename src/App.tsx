import { Box } from '@mui/material';
import { TopNav } from './components/TopNav';
import { Sidebar } from './components/Sidebar';
import { PatientDashboard } from './components/PatientDashboard';

export default function App() {
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
      <Box sx={{ display: "flex", height: "calc(100vh - 64px)" }}>
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
          <Sidebar />
        </Box>
        {/* Main Content */}
        <Box sx={{ flex: 1, minWidth: 0,pl:4 }}>
          <PatientDashboard />
        </Box>
      </Box>
    </Box>
  );
} 
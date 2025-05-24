import { List, ListItem, ListItemAvatar, ListItemText, Avatar, Box, Typography } from '@mui/material';
import { Patient } from '../types/patient';

interface SidebarProps {
  patients: Patient[];
  selectedPatientName: string;
  onPatientSelect: (name: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  patients,
  selectedPatientName,
  onPatientSelect,
}) => (
  <Box
    sx={{
      height: "1054px",
      background: "#fff",
      borderRight: "1px solid #E5E8EF",
      px: 0,
      py: 2,
      overflowY: "auto",
    }}
  >
    <Typography fontWeight={700} fontSize={18} sx={{ p: 1, pb: 0 }}>
      Patients
    </Typography>
    <List sx={{ width: "100%" }}>
      {patients.map((patient) => (
        <ListItem
          key={patient.name}
          onClick={() => onPatientSelect(patient.name)}
          sx={{
            borderRadius: 1,
            background:
              patient.name === selectedPatientName ? "#E6F7F6" : "transparent",
            boxShadow:
              patient.name === selectedPatientName
                ? "0 2px 8px rgba(0, 204, 204, 0.08)"
                : "none",
            "&:hover": { background: "#F5F6FA" },
            cursor: "pointer",
            px: 2,
            py: 1,
            mb: 1,
          }}
        >
          <ListItemAvatar>
            <Avatar src={patient.profile_picture} alt={patient.name} />
          </ListItemAvatar>
          <ListItemText
            primary={
              <span
                style={{
                  color:
                    patient.name === selectedPatientName
                      ? "#00CCCC"
                      : "#1A1A1A",
                }}
              >
                {patient.name}
              </span>
            }
          />
        </ListItem>
      ))}
    </List>
  </Box>
); 
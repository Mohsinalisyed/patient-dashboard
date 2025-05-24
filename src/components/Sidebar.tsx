import { List, ListItem, ListItemAvatar, ListItemText, Avatar, Box, Typography, IconButton, TextField, InputAdornment } from '@mui/material';
import { Patient } from '../types/patient';
import { Search, Close } from '@mui/icons-material';
import React, { useState } from 'react';

interface SidebarProps {
  patients: Patient[];
  selectedPatientName: string;
  onPatientSelect: (name: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  patients,
  selectedPatientName,
  onPatientSelect,
}) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPatients = searchQuery
    ? patients.filter((patient) =>
        patient.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : patients;

  return (
    <Box
      className="sidebar-scroll"
      sx={{
        height: "1054px",
        background: "#fff",
        borderRight: "1px solid #E5E8EF",
        px: 0,
        py: 2,
        overflowY: "auto",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 1 }}>
        <Typography fontWeight={700} fontSize={18} sx={{ p: 1, pb: 0 }}>
          Patients
        </Typography>
        {searchOpen ? (
          <IconButton onClick={() => { setSearchOpen(false); setSearchQuery(''); }} size="small">
            <Close />
          </IconButton>
        ) : (
          <IconButton onClick={() => setSearchOpen(true)} size="small" sx={{outline: "none"}}>
            <Search />
          </IconButton>
        )}
      </Box>
      {searchOpen && (
        <Box sx={{ px: 2, mb: 1 }}>
          <TextField
            autoFocus
            size="small"
            fullWidth
            placeholder="Search patients..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search fontSize="small" />
                </InputAdornment>
              ),
            }}
          />
        </Box>
      )}
      <List sx={{ width: "100%" }}>
        {filteredPatients.map((patient) => (
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
        {filteredPatients.length === 0 && (
          <Typography sx={{ px: 2, py: 1, color: '#888' }}>
            No patients found.
          </Typography>
        )}
      </List>
    </Box>
  );
}; 
import { AppBar, Toolbar, Typography, Box, Button, Avatar } from '@mui/material';
import { Logo } from '../assets/svg';

export const TopNav = () => (
  <AppBar
    position="static"
    elevation={0}
    sx={{
      background: "#fff",
      color: "#1A1A1A",
      boxShadow: "none",
        borderBottom: "1px solid #E5E8EF",
      mt:"18px",
        mb: "32px",
      borderRadius: "70px",
    }}
  >
    <Toolbar sx={{ justifyContent: "space-between" }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
       <Logo/>
      </Box>
      <Box sx={{ display: "flex", gap: 2 }}>
        <Button color="inherit" sx={{ textTransform: "none" }}>
          Overview
        </Button>
        <Button
          color="primary"
          variant="contained"
          sx={{
            background: "#00CCCC",
            borderRadius: 2,
            textTransform: "none",
            fontWeight: 600,
          }}
        >
          Patients
        </Button>
        <Button color="inherit" sx={{ textTransform: "none" }}>
          Schedule
        </Button>
        <Button color="inherit" sx={{ textTransform: "none" }}>
          Message
        </Button>
        <Button color="inherit" sx={{ textTransform: "none" }}>
          Transactions
        </Button>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Typography variant="body2" sx={{ fontWeight: 500 }}>
          Jane Simmons
        </Typography>
        <Avatar
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="Jane Simmons"
        />
      </Box>
    </Toolbar>
  </AppBar>
); 
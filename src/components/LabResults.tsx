import { Paper, List, ListItem, ListItemText, ListItemIcon, Typography} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

interface LabResultsProps {
  lab_results: string[];
}

export const LabResults: React.FC<LabResultsProps> = ({ lab_results }) => (
  <Paper
    sx={{
      borderRadius: 3,
      background: "#fff",
      p: 0,
      boxShadow: "none",
      mt: 3,
      height: "298px",
      overflowY: "auto",
    }}
  >
    <Typography fontWeight={700} fontSize={18} sx={{ p: 3, pb: 0 }}>
      Lab Results
    </Typography>
    <List sx={{ width: "100%", pt: 0 }}>
      {lab_results.map((label, idx) => (
        <ListItem
          key={`${label}-${idx}`}
          sx={{
            borderRadius: 2,
            background: idx === 0 ? "#E6F7F6" : "transparent",
            boxShadow: idx === 0 ? "0 2px 8px rgba(0, 204, 204, 0.08)" : "none",
            "&:hover": { background: "#F5F6FA" },
            cursor: "pointer",
            px: 3,
            py: "11px",
            display: "flex",
            alignItems: "center",
          }}
          secondaryAction={
            <ListItemIcon sx={{ minWidth: 0 }}>
              <DownloadIcon sx={{ color: "#222", fontSize: 22 }} />
            </ListItemIcon>
          }
        >
          <ListItemText
            primary={
              <Typography
                sx={{
                  fontWeight: idx === 0 ? 700 : 500,
                  color: idx === 0 ? "#00CCCC" : "#1A1A1A",
                }}
              >
                {label}
              </Typography>
            }
          />
        </ListItem>
      ))}
    </List>
  </Paper>
); 
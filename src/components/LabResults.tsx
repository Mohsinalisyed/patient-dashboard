import { Paper, List, ListItem, ListItemText, ListItemIcon, Typography} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

const results = [
  { label: 'Blood Tests' },
  { label: 'CT Scans', selected: true },
  { label: 'Radiology Reports' },
  { label: 'X-Rays' },
  { label: 'Urine Test' },
];

export const LabResults = () => (
  <Paper sx={{ borderRadius: 3, background: '#fff', p: 0, boxShadow: 'none', mt: 3 }}>
    <Typography variant="h6" fontWeight={700} sx={{ p: 3, pb: 0 }}>
      Lab Results
    </Typography>
    <List sx={{ width: '100%' }}>
      {results.map((item, idx) => (
        <ListItem
          key={`${item.label}-${idx}`}
          sx={{
            borderRadius: 2,
            background: item.selected ? '#E6F7F6' : 'transparent',
            boxShadow: item.selected ? '0 2px 8px rgba(0, 204, 204, 0.08)' : 'none',
            '&:hover': { background: '#F5F6FA' },
            cursor: 'pointer',
            px: 3,
            display: 'flex',
            alignItems: 'center',
          }}
          secondaryAction={
            <ListItemIcon sx={{ minWidth: 0 }}>
              <DownloadIcon sx={{ color: '#222', fontSize: 22 }} />
            </ListItemIcon>
          }
        >
          <ListItemText
            primary={<Typography sx={{ fontWeight: item.selected ? 700 : 500, color: item.selected ? '#00CCCC' : '#1A1A1A' }}>{item.label}</Typography>}
          />
        </ListItem>
      ))}
    </List>
  </Paper>
); 
import { List, ListItem, ListItemAvatar, ListItemText, Avatar, Box } from '@mui/material';

const patients = [
  { name: 'Emily Mears', img: 'https://fedskillstest.ct.digital/1.png' },
  { name: 'Ryan Johnson', img: 'https://fedskillstest.ct.digital/2.png' },
  { name: 'Susan Anderson', img: 'https://fedskillstest.ct.digital/3.png' },
  { name: 'Jessica Taylor', img: 'https://fedskillstest.ct.digital/4.png', selected: true },
  { name: 'Savannah Johnson', img: 'https://fedskillstest.ct.digital/5.png' },
  { name: 'Ashley Whitehead', img: 'https://fedskillstest.ct.digital/6.png' },
  { name: 'Peter Anderson', img: 'https://fedskillstest.ct.digital/7.png' },
  { name: 'Eric Thompson', img: 'https://fedskillstest.ct.digital/8.png' },
  { name: 'Natasha Essex', img: 'https://fedskillstest.ct.digital/9.png' },
  { name: 'Mike Mears', img: 'https://fedskillstest.ct.digital/10.png' },
];

export const Sidebar = () => (
  <Box sx={{
    height: '100%',
    background: '#fff',
    borderRight: '1px solid #E5E8EF',
    px: 0,
    py: 2,
    overflowY: 'auto',
  }}>
    <List sx={{ width: '100%' }}>
      {patients.map((patient, idx) => (
        <ListItem
          key={`${patient.name}-${idx}`}
          sx={{
            borderRadius: 1,
            background: patient.selected ? '#E6F7F6' : 'transparent',
            boxShadow: patient.selected ? '0 2px 8px rgba(0, 204, 204, 0.08)' : 'none',
            '&:hover': { background: '#F5F6FA' },
            cursor: 'pointer',
            px: 2,
            py: 1,
          }}
        >
          <ListItemAvatar>
            <Avatar src={patient.img} alt={patient.name} />
          </ListItemAvatar>
          <ListItemText
            primary={
              <span style={{
                fontWeight: patient.selected ? 700 : 400,
                color: patient.selected ? '#00CCCC' : '#1A1A1A'
              }}>
                {patient.name}
              </span>
            }
          />
        </ListItem>
      ))}
    </List>
  </Box>
); 
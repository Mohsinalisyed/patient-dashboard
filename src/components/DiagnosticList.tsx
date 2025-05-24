import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

const rows = [
  { problem: 'Hypertension', description: 'Chronic high blood pressure', status: 'Under Observation' },
  { problem: 'Type 2 Diabetes', description: 'Insulin resistance and elevated blood sugar', status: 'Cured' },
  { problem: 'Asthma', description: 'Recurrent episodes of bronchial constriction', status: 'Inactive' },
  { problem: 'Osteoarthritis', description: 'Degenerative joint disease', status: 'Unknown' },
];

export const DiagnosticList = () => (
  <Paper sx={{ borderRadius: 3, background: '#fff', p: 0, boxShadow: 'none', mt: 3 }}>
    <Typography variant="h6" fontWeight={700} sx={{ p: 3, pb: 0 }}>
      Diagnostic List
    </Typography>
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 700, fontSize: 16 }}>Problem/Diagnosis</TableCell>
            <TableCell sx={{ fontWeight: 700, fontSize: 16 }}>Description</TableCell>
            <TableCell sx={{ fontWeight: 700, fontSize: 16 }}>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, idx) => (
            <TableRow key={idx}>
              <TableCell sx={{ fontWeight: 600 }}>{row.problem}</TableCell>
              <TableCell>{row.description}</TableCell>
              <TableCell>{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Paper>
); 
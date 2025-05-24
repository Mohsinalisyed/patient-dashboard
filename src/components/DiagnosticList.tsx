import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { DiagnosticListEntry } from '../types/patient';

interface DiagnosticListProps {
  diagnostic_list: DiagnosticListEntry[];
}

export const DiagnosticList: React.FC<DiagnosticListProps> = ({ diagnostic_list }) => (
  <Paper
    sx={{ borderRadius: 3, background: "#fff", p: 0, boxShadow: "none", mt: 3,height: "339px",overflowY: "auto"}}
  >
    <Typography fontWeight={700} fontSize={18} sx={{ p: 3, pb: 0 }}>
      Diagnostic List
    </Typography>
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 700, fontSize: 16 }}>
              Problem/Diagnosis
            </TableCell>
            <TableCell sx={{ fontWeight: 700, fontSize: 16 }}>
              Description
            </TableCell>
            <TableCell sx={{ fontWeight: 700, fontSize: 16 }}>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {diagnostic_list.map((row, idx) => (
            <TableRow key={idx}>
              <TableCell sx={{ fontWeight: 600 }}>{row.name}</TableCell>
              <TableCell>{row.description}</TableCell>
              <TableCell>{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Paper>
); 
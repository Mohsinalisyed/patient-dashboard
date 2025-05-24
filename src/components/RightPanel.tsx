import { Box } from '@mui/material';
import { PatientHeader } from './PatientHeader';
import { LabResults } from './LabResults';
import { Patient } from '../types/patient';

interface RightPanelProps {
  patient: Patient;
}

export const RightPanel: React.FC<RightPanelProps> = ({ patient }) => (
  <Box>
    <PatientHeader patient={patient} />
    <Box sx={{ mt: 3 }}>
      <LabResults />
    </Box>
  </Box>
); 
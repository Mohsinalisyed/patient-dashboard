export interface DiagnosisHistoryEntry {
  month: string;
  year: number;
  blood_pressure: {
    systolic: { value: number; levels: string };
    diastolic: { value: number; levels: string };
  };
  heart_rate: { value: number; levels: string };
  respiratory_rate: { value: number; levels: string };
  temperature: { value: number; levels: string };
}

export interface DiagnosticListEntry {
  name: string;
  description: string;
  status: string;
}

export interface Patient {
  id: string;
  name: string;
  gender: string;
  age: number;
  profile_picture: string;
  date_of_birth: string;
  phone_number: string;
  emergency_contact: string;
  insurance_type: string;
  diagnosis_history: DiagnosisHistoryEntry[];
  diagnostic_list: DiagnosticListEntry[];
  lab_results: string[];
}

export interface BloodPressure {
  year: number;
  systolic: number;
  diastolic: number;
}

export interface Medication {
  name: string;
  dosage: string;
  frequency: string;
} 
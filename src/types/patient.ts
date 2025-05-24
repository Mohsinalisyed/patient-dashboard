export interface Patient {
  id: string;
  name: string;
  age: number;
  gender: string;
  profilePicture: string;
  dateOfBirth: string;
  phoneNumber: string;
  emergencyContact: string;
  insuranceType: string;
  bloodPressure: BloodPressure[];
  weight: number;
  height: number;
  bmi: number;
  lastVisit: string;
  nextAppointment: string;
  medications: Medication[];
  allergies: string[];
  conditions: string[];
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
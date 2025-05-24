import axios from 'axios';
import { Patient } from '../types/patient';

const API_BASE_URL = 'https://fedskillstest.coalitiontechnologies.workers.dev';
const USERNAME = 'coalition';
const PASSWORD = 'skills-test';

// Create base64 encoded auth string
const getAuthHeader = () => {
  const auth = btoa(`${USERNAME}:${PASSWORD}`);
  return `Basic ${auth}`;
};

export const fetchPatientData = async (): Promise<Patient> => {
  try {
    const response = await axios.get(API_BASE_URL, {
      headers: {
        'Authorization': getAuthHeader()
      }
    });
    
    // Find Jessica Taylor's data
    const jessicaData = response.data.find((patient: any) => patient.name === 'Jessica Taylor');
    
    if (!jessicaData) {
      throw new Error('Jessica Taylor data not found');
    }

    // Transform the API data to match our Patient interface
    return {
      id: 'jessica-taylor',
      name: jessicaData.name,
      age: jessicaData.age,
      gender: jessicaData.gender,
      profilePicture: jessicaData.profile_picture,
      dateOfBirth: jessicaData.date_of_birth,
      phoneNumber: jessicaData.phone_number,
      emergencyContact: jessicaData.emergency_contact,
      insuranceType: jessicaData.insurance_type,
      bloodPressure: jessicaData.diagnosis_history.map((diagnosis: any) => ({
        year: diagnosis.year,
        systolic: diagnosis.blood_pressure.systolic,
        diastolic: diagnosis.blood_pressure.diastolic
      })),
      weight: 65, // These values would come from the API in a real scenario
      height: 165,
      bmi: 23.9,
      lastVisit: '2024-03-15',
      nextAppointment: '2024-04-15',
      medications: [
        { name: 'Lisinopril', dosage: '10mg', frequency: 'Once daily' },
        { name: 'Metformin', dosage: '500mg', frequency: 'Twice daily' }
      ],
      allergies: ['Penicillin', 'Sulfa drugs'],
      conditions: ['Hypertension', 'Type 2 Diabetes']
    };
  } catch (error) {
    console.error('Error fetching patient data:', error);
    throw error;
  }
}; 
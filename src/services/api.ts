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

export const fetchAllPatients = async (): Promise<Patient[]> => {
  try {
    const response = await axios.get(API_BASE_URL, {
      headers: {
        'Authorization': getAuthHeader()
      }
    });
    
    return response.data as Patient[];
  } catch (error) {
    console.error('Error fetching patients:', error);
    throw error;
  }
};

export const getPatientByName = (patients: Patient[], name: string): Patient | undefined => {
  return patients.find(patient => patient.name === name);
};

export const fetchPatientData = async (

): Promise<Patient> => {
  try {
    const response = await axios.get(API_BASE_URL, {
      headers: {
        Authorization: getAuthHeader(),
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching patient data:", error);
    throw error;
  }
}; 
import { createSlice } from '@reduxjs/toolkit';
const PatientSlice = createSlice({
  name: 'patient',
  initialState: {
    patients: [],
    selectedPatient: '',
  },
  reducers: {
    setPatients(state, action) {
      state.patients = action.payload;
    },
    setSelectedPatient(state, action) {
      state.selectedPatient = action.payload;
    },
  },
});

export default PatientSlice;

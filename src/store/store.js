import { configureStore } from '@reduxjs/toolkit';
import UiSlice from './slice/UiSlice';
import LoginSlice from './slice/LoginSlice';
import ServiceSlice from './slice/ServiceSlice';
import ServiceCategorySlice from './slice/ServiceCategorySlice';
import MedsCategoriesSlice from './slice/MedsCategoriesSlice';
import LocationSlice from './slice/LocationSlice';
import MedsSlice from './slice/MedsSlice';
import PatientSlice from './slice/PatientSlice';

const store = configureStore({
  reducer: {
    ui: UiSlice.reducer,
    auth: LoginSlice.reducer,
    services: ServiceSlice.reducer,
    serviceCategories: ServiceCategorySlice.reducer,
    medsCategories: MedsCategoriesSlice.reducer,
    locations: LocationSlice.reducer,
    meds: MedsSlice.reducer,
    patients: PatientSlice.reducer,
  },
});

export default store;

import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const Patients = () => {
  const token = useSelector((state) => state.auth.token);
  const status = useSelector((state) => state.ui.status);
  const dispatch = useDispatch();

  return <div>Patients</div>;
};

export default Patients;

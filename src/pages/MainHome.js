import React from 'react';
import Home from './Home';
import Pfas from './Pfas';
import Health from './Health';
import Cost from './Cost';
import Qualify from './Qualify';
import Next from './Next';
import File from './File';
import { ToastContainer } from 'react-toastify';

const MainHome = () => {
  return (
    <div>
      <Home></Home>
      <Pfas></Pfas>
      <Health></Health>
      <Cost></Cost>
      <Qualify></Qualify>
      <Next></Next>
      <File></File>
      <ToastContainer/>
    </div>
  );
};

export default MainHome;
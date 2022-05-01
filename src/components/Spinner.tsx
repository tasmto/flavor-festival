import React from 'react';
import SplashImage from '../assets/splash-screen-image.jpg';
import { useNavigate } from 'react-router-dom';

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const Spinner = () => {
  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={true}
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        backdropFilter: 'blur(5px)',
        width: '450px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}
    >
      <CircularProgress color='inherit' />
    </Backdrop>
  );
};

export default Spinner;

import React from 'react';

import SplashImage from '../assets/splash-screen-image.jpg';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { BiRightArrowAlt } from 'react-icons/bi';
import Spinner from '../components/Spinner';

const SplashScreen = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        position: 'relative',
        height: '100vh',
        textAlign: 'center',
        backgroundImage: `url(${SplashImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'bottom center',
      }}
    >
      <Box
        style={{
          position: 'absolute',
          bottom: '15%',
          width: '100%',
          display: 'flex',
          gap: 25,
          flexDirection: 'column',
          color: '#fff',
        }}
      >
        <Typography variant='h2' component='h3' fontWeight='500'>
          Flavor
          <br /> Festival
        </Typography>
        <Typography variant='h5'>Find over 1 000, 000 recipes!</Typography>
        <Button
          onClick={() => navigate('/')}
          variant='contained'
          size='large'
          style={{
            display: 'flex',
            gap: 8,
            padding: '15px 25px',
            borderRadius: '15px',
            margin: 'auto',
          }}
        >
          Start cooking <BiRightArrowAlt />
        </Button>
      </Box>
    </div>
  );
};

export default SplashScreen;

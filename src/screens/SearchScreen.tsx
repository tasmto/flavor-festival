import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SearchInput from '../components/features/search/SearchInput';

const SearchScreen = () => {
  return (
    <div className='container' style={{ paddingBottom: '80px' }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container rowSpacing={8} columnSpacing={2}>
          <Grid item xs={12}>
            <Typography
              variant='h4'
              fontWeight='600'
              component='h4'
              style={{
                marginTop: '30px',
                marginBottom: '-20px',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              Find your next meal
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <SearchInput />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default SearchScreen;

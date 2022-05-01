import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { BiImageAdd, BiEditAlt } from 'react-icons/bi';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Skeleton from '@mui/material/Skeleton';
import Divider from '@mui/material/Divider';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Chip from '@mui/material/Chip';

const CreateRecipe = () => {
  const [imageLink, setImageLink] = useState('');

  const handleImageSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // @ts-expect-error:
    // prettier-ignore
    const data = event.target?.elements['imageSearch'].value.replace(
      /^https?:\/\//,'');
    if (!data) return null;
    setImageLink(`https://${data}`);
  };

  return (
    <div className='container' style={{ paddingBottom: '80px' }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container rowSpacing={4} columnSpacing={2}>
          <Grid item xs={12}>
            <Typography
              variant='h4'
              fontWeight='600'
              component='h4'
              style={{
                marginTop: '30px',
                marginBottom: '20px',
              }}
            >
              Create recipe
            </Typography>
          </Grid>
          <Grid item xs={12} style={{ paddingLeft: '5px' }}>
            {!imageLink && (
              <form
                onSubmit={(event) => handleImageSearch(event)}
                style={{ display: 'flex', gap: 8 }}
              >
                <TextField
                  label='Link to image:'
                  id='imageSearch'
                  sx={{ m: 1, width: '100%' }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>https://</InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position='end'>
                        <IconButton type='submit' aria-label='search'>
                          <BiImageAdd />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </form>
            )}
            <Card
              sx={{ maxWidth: '100%' }}
              style={{
                boxShadow: 'none',
                position: 'relative',
                paddingLeft: '10px',
              }}
            >
              {!imageLink ? (
                <Skeleton
                  sx={{ height: 140 }}
                  animation='pulse'
                  variant='rectangular'
                  style={{ borderRadius: '25px' }}
                />
              ) : (
                <CardMedia
                  component='img'
                  height='200'
                  image={imageLink}
                  alt='green iguana'
                  style={{ background: '#f1f1f1', borderRadius: '25px' }}
                />
              )}
              {imageLink && (
                <CardActions
                  style={{ position: 'absolute', top: 0, right: '10px' }}
                >
                  <IconButton
                    aria-label='edit'
                    size='large'
                    style={{ background: '#f1f1f1' }}
                    onClick={() => setImageLink('')}
                  >
                    <BiEditAlt />
                  </IconButton>
                </CardActions>
              )}
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Divider>
              <Chip label='Recipe info' />
            </Divider>
          </Grid>

          <Grid item xs={12}>
            <Box component='form' noValidate autoComplete='off'>
              <FormControl
                sx={{
                  width: '97%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                }}
              >
                {/* https://mui.com/material-ui/react-text-field/?#:~:text=input%20is%20filled-,Example,-Helper%20text */}
                <TextField label='Recipe name:' id='Title' />
                <TextField label='Publisher:' id='Title' />
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={12}></Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default CreateRecipe;

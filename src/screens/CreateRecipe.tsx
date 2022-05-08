import React, { useState, useRef, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {
  BiImageAdd,
  BiEditAlt,
  BiUser,
  BiPlus,
  BiMinus,
  BiTime,
} from 'react-icons/bi';
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
import ButtonGroup from '@mui/material/ButtonGroup';
import { DriveEta, TrendingUpRounded } from '@mui/icons-material';
import IncrementButtonCard from '../components/cards/incrementButtonCard/IncrementButtonCard';
import RecipeIngredientForm from '../components/recipe/RecipeIngredients/RecipeIngredientForm';

const CreateRecipe = () => {
  const [imageLink, setImageLink] = useState('');
  const [recipeSubmission, setRecipeSubmission] = useState({
    title: '',
    source_url: '',
    image_url: '',
    publisher: '',
    cooking_time: 15,
    servings: 1,
  });

  const [ingredients, setIngredients] = useState(
    {}
    /* Format, quantity, unit, desc */
  );

  const handleImageSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // @ts-expect-error:
    // prettier-ignore
    const data = event.target?.elements['imageSearch'].value.replace(
      /^https?:\/\//,'');
    if (!data) return null;
    setRecipeSubmission((prevState) => {
      return { ...prevState, image_url: `https://${data}` };
    });
  };
  const clearImageUrl = () => {
    setRecipeSubmission((prevState) => {
      return { ...prevState, image_url: '' };
    });
  };
  const handleIncrement = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: string,
    direction = true
  ) => {
    if (!recipeSubmission[id]) return null;
    setRecipeSubmission((prevState) => {
      return { ...prevState, [id]: prevState[id] + (direction ? 1 : -1) };
    });
  };

  const handleUpdateIngredient = (
    position: number,
    field: string,
    value: string
  ) => {
    // if (!field || !position) return false;
    console.log(value, position, field);
  };

  const handleDeleteRecipeIngredient = (position: Number) => {
    return position;
  };

  const [ingredientFormElements, setIngredientFormElements] = useState([]);

  const handleAddRecipeIngredient = () => {};

  const handleAddRecipe = () => {};

  return (
    <div className='container' style={{ paddingBottom: '140px' }}>
      <Grid container rowSpacing={4} columnSpacing={2}>
        <Grid item xs={12}>
          <Typography
            variant='h4'
            fontWeight='600'
            component='h4'
            style={{
              marginTop: '30px',
              marginBottom: '0px',
            }}
          >
            Create recipe
          </Typography>
        </Grid>
        <Grid item xs={12} style={{ paddingLeft: '5px' }}>
          {!recipeSubmission.image_url && (
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
            {!recipeSubmission.image_url ? (
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
                image={recipeSubmission.image_url}
                alt='green iguana'
                style={{ background: '#f1f1f1', borderRadius: '25px' }}
              />
            )}
            {recipeSubmission.image_url && (
              <CardActions
                style={{ position: 'absolute', top: 0, right: '10px' }}
              >
                <IconButton
                  aria-label='edit'
                  size='large'
                  style={{ background: '#f1f1f1' }}
                  onClick={() => clearImageUrl()}
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
            <IncrementButtonCard
              label='Serves'
              labelIcon={<BiUser />}
              onchange={handleIncrement}
              current={recipeSubmission.servings}
              id='servings'
            />
            <IncrementButtonCard
              label='Time'
              labelIcon={<BiTime />}
              onchange={handleIncrement}
              current={recipeSubmission.cooking_time}
              id='cooking_time'
              unit='min'
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant='h5'
            fontWeight='600'
            component='h4'
            style={{
              marginTop: '30px',
              marginBottom: '20px',
            }}
          >
            Ingredients
          </Typography>

          {/* {[...ingredientFormElements]} */}
          <RecipeIngredientForm
            handleDelete={handleDeleteRecipeIngredient}
            position={0}
            key={0}
            handleChange={handleUpdateIngredient}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant='text'
            onClick={handleAddRecipeIngredient}
            startIcon={<BiPlus style={{ height: '30px', width: '30px' }} />}
            style={{ textTransform: 'none' }}
          >
            Add new Ingredient
          </Button>
        </Grid>
        {/*  Format, quantity, unit, desc  */}
        <Grid item xs={12}>
          <Button
            size='large'
            variant='contained'
            fullWidth
            onClick={handleAddRecipe}
            style={{
              padding: '15px',
              borderRadius: '15px',
              boxShadow: '0',
              fontSize: '1rem',
              textTransform: 'none',
            }}
          >
            Save My Recipe
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default CreateRecipe;

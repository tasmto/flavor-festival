import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { BiHome } from 'react-icons/bi';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import SearchInput from '../components/Search/SearchInput';
import SearchTermSlider from '../components/Search/SearchTermSlider';
import {
  featuredRandom,
  recentRandom,
  popularRandom,
} from '../data/LocalRecipes';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import axios from 'axios';
import Spinner from '../components/Spinner';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Stack from '@mui/material/Stack';
import {
  BiLeftArrowAlt,
  BiDotsHorizontalRounded,
  BiShareAlt,
  BiShoppingBag,
  BiBookmarkHeart,
} from 'react-icons/bi';
import SearchResults from '../components/Search/SearchResults';
import IconButton from '@mui/material/IconButton';
import Skeleton from '@mui/material/Skeleton';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';

type Recipe = {
  cooking_time: Number;
  id: String;
  image_url: String;
  ingredients: [
    {
      description: String;
      quantity: Number;
      unit: String;
    }
  ];
  publisher: String;
  servings: Number;
  source_url: String;
  title: String;
};

const SingleRecipeScreen = () => {
  const params = useParams();
  const [search, setSearch] = useState(params.id);
  const [searchResult, setSearchResult] = useState<Recipe | null | undefined>(
    undefined
  );
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const FORKIFY_SEARCH_URL = import.meta.env.VITE_FORKIFY_SEARCH_URL;
  const FORKIFY_API_KEY = import.meta.env.VITE_FORKIFY_API_KEY;

  const fetchSearchedListings = async () => {
    try {
      setLoading(true);
      if (!search) throw 'Not searching';
      // Make a request for a recipe using the term
      // https://forkify-api.herokuapp.com/api/v2/recipes/:id
      const response = await axios.get(`${FORKIFY_SEARCH_URL}${search}`);
      setSearchResult(response.data.data.recipe);
    } catch (error) {
      console.log('💥 error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setSearch(params.id);
  }, [params.id]);

  useEffect(() => {
    if (search) fetchSearchedListings();
    else setLoading(false);
  }, [search]);

  if (!searchResult || loading) return <Spinner />;
  return (
    <div className='container' style={{ paddingBottom: '80px' }}>
      <Grid container rowSpacing={4} columnSpacing={2}>
        <Grid item xs={12} style={{ marginTop: '30px' }}>
          <Stack
            spacing={2}
            direction='row'
            alignItems='center'
            justifyContent='space-between'
          >
            <IconButton size='large' onClick={() => navigate(-1)}>
              <BiLeftArrowAlt />
            </IconButton>
            <IconButton size='large'>
              <BiDotsHorizontalRounded />
            </IconButton>
          </Stack>
        </Grid>

        <Grid item xs={12}>
          <Typography
            variant='h4'
            fontWeight='600'
            component='h4'
            style={{ marginBottom: '-15px' }}
          >
            {searchResult.title}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Card
            style={{ width: '100%', borderRadius: '25px', boxShadow: 'none' }}
          >
            <CardMedia
              component='img'
              height='250'
              image={`${searchResult.image_url}`}
              alt={'Paella dish'}
            />
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Stack
            spacing={2}
            direction='row'
            alignItems='center'
            justifyContent='space-between'
          >
            <Stack spacing={2} direction='row' alignItems='center'>
              <Avatar
                style={{
                  backgroundColor: '#E23E3E',
                  width: '50px',
                  height: '50px',
                }}
                aria-label='recipe'
              >
                {loading ? (
                  <Skeleton
                    animation='wave'
                    variant='circular'
                    width={50}
                    height={50}
                  />
                ) : (
                  searchResult.publisher.charAt(1).toUpperCase()
                )}
              </Avatar>
              <Stack>
                <Typography component='p'>Published by:</Typography>
                <Typography variant='h6' fontWeight='600' component='h4'>
                  {searchResult.publisher}
                </Typography>
              </Stack>
            </Stack>
            <Button variant='contained' style={{ boxShadow: 'none' }}>
              See full Recipe
            </Button>
          </Stack>
        </Grid>

        <Grid item xs={12}>
          <Divider>
            <Stack
              spacing={2}
              direction='row'
              alignItems='center'
              justifyContent='flex-end'
            >
              <IconButton size='large' aria-label='Get link' title='Get link'>
                <BiShareAlt />
              </IconButton>
              <IconButton
                size='large'
                aria-label='Save to shopping cart'
                title='Save to shopping cart'
              >
                <BiShoppingBag />
              </IconButton>
              <IconButton
                size='large'
                aria-label='Bookmark recipe'
                title='Bookmark recipe'
              >
                <BiBookmarkHeart />
              </IconButton>
            </Stack>
          </Divider>
        </Grid>
        <Grid item xs={12}>
          <Stack
            spacing={2}
            direction='row'
            alignItems='center'
            justifyContent='space-between'
          >
            <Typography variant='h5' fontWeight='600'>
              Ingredients
            </Typography>
            <Typography>{searchResult.ingredients.length} items</Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack spacing={2}>
            {searchResult.ingredients.map((ingredient) => (
              <Stack
                className='incrementButtonCard--container'
                style={{ padding: '25px' }}
                spacing={2}
                direction='row'
                alignItems='center'
                justifyContent='space-between'
              >
                <Typography variant='h6' fontWeight='600' color='#303030'>
                  {ingredient.description}
                </Typography>
                <Typography variant='body1' color='gray'>
                  <span>
                    {ingredient.quantity} {ingredient.unit}
                  </span>
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
};

export default SingleRecipeScreen;

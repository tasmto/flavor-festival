import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { BiRightArrowAlt } from 'react-icons/bi';
import RecipeReviewCard from '../components/recipe/RecipeCardMajor/RecipeCardMajor';
import RecipeCardSmall from '../components/recipe/RecipeCardSmall/RecipeCardSmall';
import RecipeCardSmall2 from '../components/recipe/RecipeCardSmall2/RecipeCardSmall2';
import Logo from '../favicon.svg';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, Autoplay } from 'swiper';
//https://swiperjs.com/react

// Import Swiper styles
import 'swiper/css';
import SearchInput from '../components/Search/SearchInput';
import SearchTermSlider from '../components/Search/SearchTermSlider';
import {
  featuredRandom,
  recentRandom,
  popularRandom,
} from '../data/LocalRecipes';

const HomeScreen = () => {
  return (
    <div className='container' style={{ paddingBottom: '100px' }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container rowSpacing={8} columnSpacing={2}>
          <Grid item xs={12}>
            <Typography
              variant='h4'
              fontWeight='600'
              component='h4'
              style={{
                marginTop: '30px',
                marginBottom: '-30px',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              <img src={Logo} style={{ width: '50px', height: '50px' }} />
              Find your next meal
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <SearchInput />
          </Grid>
          <Grid item xs={12} container rowSpacing={2} columnSpacing={2}>
            <Grid item xs={12} container spacing={2}>
              <Grid item xs={8}>
                <Typography
                  variant='h5'
                  fontWeight='600'
                  gutterBottom
                  component='h4'
                >
                  Trending meals 🔥
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Button
                  style={{}}
                  variant='text'
                  startIcon={
                    <BiRightArrowAlt
                      style={{ width: '25px', height: '25px' }}
                    />
                  }
                >
                  See All
                </Button>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Swiper spaceBetween={-95} slidesPerView={'auto'}>
                {featuredRandom.map((recipe) => (
                  <SwiperSlide key={recipe.id}>
                    <RecipeReviewCard recipe={recipe} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </Grid>
          </Grid>{' '}
          <Grid item xs={12} container rowSpacing={2} columnSpacing={2}>
            <Grid item xs={12}>
              <Typography
                variant='h5'
                fontWeight='600'
                gutterBottom
                component='h4'
                style={{ marginTop: '-30px' }}
              >
                Popular meal options
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <SearchTermSlider />
            </Grid>

            <Grid item xs={12}>
              <Swiper spaceBetween={-125} slidesPerView={'auto'}>
                {popularRandom.map((recipe) => (
                  <SwiperSlide key={recipe.id}>
                    <RecipeCardSmall2 recipe={recipe} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </Grid>
          </Grid>
          <Grid item xs={12} container rowSpacing={2} columnSpacing={2}>
            <Grid item xs={12}>
              <Typography
                variant='h5'
                fontWeight='600'
                gutterBottom
                component='h4'
                style={{ marginTop: '-30px' }}
              >
                Recent recipes
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Swiper spaceBetween={-145} slidesPerView={'auto'}>
                {recentRandom.map((recipe) => (
                  <SwiperSlide key={recipe.id}>
                    <RecipeCardSmall recipe={recipe} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default HomeScreen;

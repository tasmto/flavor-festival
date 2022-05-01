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
import SearchInput from '../components/features/search/SearchInput';

const HomeScreen = () => {
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
              <img src={Logo} style={{ width: '50px', height: '50px' }} />
              Find your next meal
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <SearchInput />
          </Grid>
          <Grid item xs={12} container rowSpacing={2} columnSpacing={2}>
            <Grid item xs={12} container spacing={2}>
              <Grid item xs={9}>
                <Typography
                  variant='h5'
                  fontWeight='600'
                  gutterBottom
                  component='h4'
                >
                  Find your next meal 🔥
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Button variant='text'>
                  See All{' '}
                  <BiRightArrowAlt style={{ width: '25px', height: '25px' }} />
                </Button>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Swiper spaceBetween={-95} slidesPerView={'auto'}>
                <SwiperSlide>
                  <RecipeReviewCard />
                </SwiperSlide>
                <SwiperSlide>
                  <RecipeReviewCard />
                </SwiperSlide>
                <SwiperSlide>
                  <RecipeReviewCard />
                </SwiperSlide>
                <SwiperSlide>
                  <RecipeReviewCard />
                </SwiperSlide>
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
                Popular meal options
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Swiper spaceBetween={-145} slidesPerView={'auto'}>
                <SwiperSlide>
                  <RecipeCardSmall />
                </SwiperSlide>
                <SwiperSlide>
                  <RecipeCardSmall />
                </SwiperSlide>
                <SwiperSlide>
                  <RecipeCardSmall />
                </SwiperSlide>
                <SwiperSlide>
                  <RecipeCardSmall />
                </SwiperSlide>
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
              <Swiper
                modules={[Scrollbar, Autoplay]}
                spaceBetween={-280}
                slidesPerView='auto'
                scrollbar={{ draggable: true }}
                autoplay={{ delay: 3000 }}
              >
                <SwiperSlide
                  style={{
                    display: 'flex',
                    justifyContent: 'stretch',
                    alignItems: 'stretch',
                    width: '100%',
                    textAlign: 'center',
                  }}
                >
                  <Button
                    style={{ width: '120px', textAlign: 'center' }}
                    variant='outlined'
                  >
                    cauliflower
                  </Button>
                </SwiperSlide>
                <SwiperSlide
                  style={{
                    display: 'flex',
                    justifyContent: 'stretch',
                    alignItems: 'stretch',
                    width: '100%',
                    textAlign: 'center',
                  }}
                >
                  <Button
                    style={{ width: '120px', textAlign: 'center' }}
                    variant='outlined'
                  >
                    carrot
                  </Button>
                </SwiperSlide>
                <SwiperSlide
                  style={{
                    display: 'flex',
                    justifyContent: 'stretch',
                    alignItems: 'stretch',
                    width: '100%',
                    textAlign: 'center',
                  }}
                >
                  <Button
                    style={{ width: '120px', textAlign: 'center' }}
                    variant='outlined'
                  >
                    broccoli
                  </Button>
                </SwiperSlide>
                <SwiperSlide
                  style={{
                    display: 'flex',
                    justifyContent: 'stretch',
                    alignItems: 'stretch',
                    width: '100%',
                    textAlign: 'center',
                  }}
                >
                  <Button
                    style={{ width: '120px', textAlign: 'center' }}
                    variant='outlined'
                  >
                    asparagus
                  </Button>
                </SwiperSlide>
                <SwiperSlide
                  style={{
                    display: 'flex',
                    justifyContent: 'stretch',
                    alignItems: 'stretch',
                    width: '100%',
                    textAlign: 'center',
                  }}
                >
                  <Button
                    style={{ width: '120px', textAlign: 'center' }}
                    variant='outlined'
                  >
                    corn
                  </Button>
                </SwiperSlide>
                <SwiperSlide
                  style={{
                    display: 'flex',
                    justifyContent: 'stretch',
                    alignItems: 'stretch',
                    width: '100%',
                    textAlign: 'center',
                  }}
                >
                  <Button
                    style={{ width: '120px', textAlign: 'center' }}
                    variant='outlined'
                  >
                    cucumber
                  </Button>
                </SwiperSlide>

                <SwiperSlide
                  style={{
                    display: 'flex',
                    justifyContent: 'stretch',
                    alignItems: 'stretch',
                    width: '100%',
                    textAlign: 'center',
                  }}
                >
                  <Button
                    style={{ width: '120px', textAlign: 'center' }}
                    variant='outlined'
                  >
                    lettuce
                  </Button>
                </SwiperSlide>
              </Swiper>
            </Grid>

            <Grid item xs={12}>
              <Swiper spaceBetween={-125} slidesPerView={'auto'}>
                <SwiperSlide>
                  <RecipeCardSmall2 />
                </SwiperSlide>
                <SwiperSlide>
                  <RecipeCardSmall2 />
                </SwiperSlide>
                <SwiperSlide>
                  <RecipeCardSmall2 />
                </SwiperSlide>
                <SwiperSlide>
                  <RecipeCardSmall2 />
                </SwiperSlide>
              </Swiper>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default HomeScreen;

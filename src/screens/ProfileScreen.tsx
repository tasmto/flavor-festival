import React from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import RecipeReviewCard from '../components/recipe/RecipeCardMajor/RecipeCardMajor';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import {
  BiBookmarkAlt,
  BiShareAlt,
  BiTimer,
  BiDotsHorizontalRounded,
} from 'react-icons/bi';
import {
  featuredRandom,
  recentRandom,
  popularRandom,
} from '../data/LocalRecipes';

const ProfileScreen = () => {
  return (
    <div className='container' style={{ paddingBottom: '80px' }}>
      <Grid container rowSpacing={2} columnSpacing={2}>
        <Grid
          item
          xs={12}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography
            variant='h4'
            fontWeight='600'
            component='h4'
            style={{
              marginTop: '30px',
              marginBottom: '30px',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            My profile
          </Typography>
          <IconButton aria-label='settings'>
            <BiDotsHorizontalRounded />
          </IconButton>
        </Grid>
        <Grid item xs={12} rowSpacing={4}>
          <Avatar
            alt='Remy Sharp'
            src='https://randomuser.me/api/portraits/women/66.jpg'
            sx={{ width: 120, height: 120 }}
            style={{ margin: 'auto' }}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant='h5'
            fontWeight='600'
            component='h5'
            style={{ marginBottom: '10px', marginTop: '10px' }}
          >
            Alessandra Blair
          </Typography>
          <Typography
            variant='body1'
            component='p'
            style={{ color: '#A9A9A9' }}
          >
            Hello world I'm Alessandra Blair, I'm from Italy 🇮🇹 I love cooking
            so much!
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Divider>
            <Chip label='Recipe info' />
          </Divider>
        </Grid>
        <Grid item xs={12}>
          {featuredRandom.map((recipe) => (
            <RecipeReviewCard width='100%' key={recipe.id} recipe={recipe} />
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default ProfileScreen;

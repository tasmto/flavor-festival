import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import SearchInput from '../components/Search/SearchInput';
import SearchTermSlider from '../components/Search/SearchTermSlider';
import RecipeReviewCard from '../components/recipe/RecipeCardMajor/RecipeCardMajor';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {
  featuredRandom,
  recentRandom,
  popularRandom,
} from '../data/LocalRecipes';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

import 'swiper/css';
const BookmarksScreen = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div className='container' style={{ paddingBottom: '100px' }}>
      <Grid container rowSpacing={2} columnSpacing={2}>
        <Grid item xs={12}>
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
            Saved Recipes
          </Typography>
        </Grid>

        <Grid item xs={12} rowSpacing={4}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label='basic tabs example'
          >
            <Tab label='My Recipes' {...a11yProps(0)} />
            <Tab label='Other Recipes' {...a11yProps(1)} />
          </Tabs>
          <TabPanel value={value} index={0}>
            {/* eslint-disable-line */}

            {featuredRandom.map((recipe) => (
              <RecipeReviewCard width='100%' key={recipe.id} recipe={recipe} />
            ))}
          </TabPanel>
          <TabPanel value={value} index={1}>
            {featuredRandom.map((recipe) => (
              <RecipeReviewCard width='100%' key={recipe.id} recipe={recipe} />
            ))}
          </TabPanel>
        </Grid>
      </Grid>
    </div>
  );
};

export default BookmarksScreen;

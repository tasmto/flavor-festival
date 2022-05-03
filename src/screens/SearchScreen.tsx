import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
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
import SearchResults from '../components/Search/SearchResults';

const SearchScreen = () => {
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get('id'));
  const [searchResults, setSearchResults] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleRemoveSearchQuery = (term: string) => {
    if (searchParams.get('id')) searchParams.delete('id'); // !not working
  };

  const FORKIFY_CAT_SEARCH_URL = import.meta.env.VITE_FORKIFY_CAT_SEARCH_URL;
  const FORKIFY_API_KEY = import.meta.env.VITE_FORKIFY_API_KEY;

  const fetchSearchedListings = async () => {
    try {
      setLoading(true);
      if (!search) throw 'Not searching';
      // Make a request for a recipe using the term
      // https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza&key=<insert your key>
      const response = await axios.get(
        `${FORKIFY_CAT_SEARCH_URL}${search}&key=${FORKIFY_API_KEY}`
      );
      setSearchResults(response.data.data);
    } catch (error) {
      console.log('💥 error', error.message);
    } finally {
      console.log('💥 triggered');
      setLoading(false);
    }
  };

  useEffect(() => {
    setSearch(searchParams.get('id'));
  }, [searchParams]);

  useEffect(() => {
    if (search) fetchSearchedListings();
    else setLoading(false);
  }, [search]);
  if (loading) return <Spinner />;
  return (
    <div className='container' style={{ paddingBottom: '80px' }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container rowSpacing={2} columnSpacing={2}>
          <Grid item xs={12}>
            <Typography
              variant='h4'
              fontWeight='600'
              component='h4'
              style={{
                marginTop: '30px',
                marginBottom: '10px',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              Enter your desired meal below
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <SearchInput />
          </Grid>
          <Grid item xs={12}>
            <SearchTermSlider
              selected={search}
              handleRemoveSearch={handleRemoveSearchQuery}
            />
          </Grid>
          <Grid item xs={12}>
            {searchResults ? (
              <>
                <Typography
                  variant='h5'
                  fontWeight='600'
                  gutterBottom
                  component='h4'
                  style={{
                    marginTop: '30px',
                    marginBottom: '20px',
                  }}
                >
                  Search results:
                </Typography>

                {loading ? (
                  <Spinner />
                ) : (
                  <SearchResults searchResults={searchResults.recipes} />
                )}
              </>
            ) : (
              <>
                <Typography
                  variant='h3'
                  fontWeight='600'
                  gutterBottom
                  component='h4'
                  color='secondary'
                  style={{
                    marginTop: '30px',
                  }}
                >
                  Search through our catalogue for a recipe above.
                </Typography>
                <Button
                  size='large'
                  variant='contained'
                  fullWidth
                  onClick={() => navigate('/')}
                  style={{
                    padding: '15px',
                    borderRadius: '15px',
                    boxShadow: '0',
                    fontSize: '1rem',
                    textTransform: 'none',
                  }}
                  startIcon={
                    <BiHome style={{ width: '25px', height: '25px' }} />
                  }
                >
                  Back to Home
                </Button>
              </>
            )}
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default SearchScreen;

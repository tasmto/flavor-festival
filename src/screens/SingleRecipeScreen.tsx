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
import SearchResults from '../components/Search/SearchResults';

const SingleRecipeScreen = () => {
  const params = useParams();
  const [search, setSearch] = useState(params.id);
  const [searchResults, setSearchResults] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const FORKIFY_SEARCH_URL = import.meta.env.VITE_FORKIFY_SEARCH_URL;
  const FORKIFY_API_KEY = import.meta.env.VITE_FORKIFY_API_KEY;

  const fetchSearchedListings = async () => {
    try {
      setLoading(true);
      if (!search) throw 'Not searching';
      // Make a request for a recipe using the term
      // https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza&key=<insert your key>
      const response = await axios.get(
        `${FORKIFY_SEARCH_URL}${search}&key=${FORKIFY_API_KEY}`
      );
      setSearchResults(response.data.data);
    } catch (error) {
      console.log('💥 error');
    } finally {
      console.log('💥 triggered');
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

  return <div>SingleRecipeScreen</div>;
};

export default SingleRecipeScreen;

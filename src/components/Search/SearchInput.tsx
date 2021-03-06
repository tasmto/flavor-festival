import React, { useEffect, useState, memo, useCallback } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import InputAdornment from '@mui/material/InputAdornment';
import { useNavigate } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';
import IconButton from '@mui/material/IconButton';
import Spinner from '../Spinner';
import { supportedSearchTerms } from './supportedSearchQuerries';

const SearchInput = () => {
  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (value.label) navigate(`/search?id=${value.label}`);
  };
  const [loading, setLoading] = useState(true);
  const [recipeTerms, setRecipeTerms] = useState([]);
  const navigate = useNavigate();
  type recipeSearchTerms = { label: string };

  /**
   @todo: This looping over array is quite expensive...
   */
  const createSupportedTermsObj = useCallback(() => {
    return supportedSearchTerms.reduce(
      (termsArr: Array<recipeSearchTerms>, recipe) => {
        termsArr.push({ label: recipe });
        return termsArr;
      },
      []
    );
  }, [recipeTerms]);

  const [value, setValue] = React.useState<string | null>('');

  useEffect(() => {
    setRecipeTerms(() => createSupportedTermsObj());
    setLoading(false);
  }, []);

  if (loading) return <Spinner />;

  return (
    <form
      onSubmit={(event) => handleSearchSubmit(event)}
      style={{ display: 'flex', gap: 6 }}
    >
      <Autocomplete
        disablePortal
        id='combo-box-demo'
        options={recipeTerms}
        sx={{ width: '95%' }}
        onChange={(event: any, newValue: string | null) => {
          setValue(newValue);
        }}
        renderInput={(params) => (
          <TextField {...params} label='Find a recipe' />
        )}
      />
      <IconButton type='submit' aria-label='search'>
        <BiSearch />
      </IconButton>
    </form>
  );
};

export default SearchInput;

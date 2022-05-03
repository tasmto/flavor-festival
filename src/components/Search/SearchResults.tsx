import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import RecipeReviewCard from '../recipe/RecipeCardMajor/RecipeCardMajor';
import { recipePaginationCount } from '../../config/Config';
import Pagination from '@mui/material/Pagination';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
type Props = {
  searchResults: [
    {
      publisher: string;
      image_url: string;
      title: string;
      id: string;
    }
  ];
};

const SearchResults: React.FC<Props> = ({ searchResults }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(searchResults.length / recipePaginationCount);
  console.log(totalPages);

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  return (
    <>
      {searchResults
        .slice(
          currentPage * recipePaginationCount - recipePaginationCount,
          currentPage * recipePaginationCount
        )
        .map((recipe) => (
          <RecipeReviewCard key={recipe.id} recipe={recipe} width='100%' />
        ))}
      <Stack
        spacing={2}
        direction='row'
        alignItems='center'
        justifyContent='center'
        style={{ marginTop: '20px' }}
      >
        <Pagination
          count={totalPages}
          showFirstButton
          showLastButton
          onChange={handleChangePage}
          size='large'
          page={currentPage}
        />
      </Stack>
    </>
  );
};

export default SearchResults;

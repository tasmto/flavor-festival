import React, { useState, useEffect, useRef, FC } from 'react';
import './RecipeCardMajor.css';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import CardActions from '@mui/material/CardActions';
import Skeleton from '@mui/material/Skeleton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import {
  BiBookmarkAlt,
  BiShareAlt,
  BiTimer,
  BiDotsHorizontalRounded,
} from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

type Props = {
  width?: string;
  recipe: {
    publisher: string;
    image_url: string;
    title: string;
    id: string;
  };
};
const RecipeReviewCard: React.FC<Props> = ({ width = '300px', recipe }) => {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuAnchorElement, setMenuAnchorElement] = useState(null);
  const navigate = useNavigate();
  const { publisher, image_url, title, id } = recipe;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenuAnchorElement(event?.currentTarget);
    setMenuOpen(true);
  };
  const handleClose = () => {
    setMenuOpen(false);
  };

  //Share button or copy link initiated
  const handleCopyLink = () => {
    navigator.clipboard.writeText(`${window.location.href}`);
    handleClose();
  };

  // The image or linkable component is clicked
  const handleSeeFullRecipe = () => {
    navigate(`/recipes/${id}`);
  };

  return (
    <Card className='rcm-card-container' style={{ width }}>
      <CardMedia
        style={{ borderRadius: '15px' }}
        component='img'
        height='194'
        image={
          image_url ||
          'http://forkify-api.herokuapp.com/images/pizza292x2007a259a79.jpg'
        }
        alt={recipe.title || 'Paella dish'}
        style={{ cursor: 'pointer' }}
        onClick={handleSeeFullRecipe}
      />
      <Typography className='rcm-card-time' color='text.primary' gutterBottom>
        <BiTimer />
        {loading ? <Skeleton width='100px' /> : '15min'}
      </Typography>
      <CardHeader
        style={{ paddingBottom: 0 }}
        avatar={
          <Avatar style={{ backgroundColor: '#A9A9A9' }} aria-label='recipe'>
            {loading ? (
              <Skeleton
                animation='wave'
                variant='circular'
                width={100}
                height={100}
              />
            ) : (
              'R'
            )}
          </Avatar>
        }
        action={
          <IconButton aria-label='settings' onClick={handleOpenMenu}>
            <BiDotsHorizontalRounded />
          </IconButton>
        }
        title={
          loading ? <Skeleton animation='wave' width='80%' /> : recipe.publisher
        }
      />
      <Menu
        id='basic-menu'
        anchorEl={menuAnchorElement}
        open={menuOpen}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleSeeFullRecipe}>Open recipe</MenuItem>
        <MenuItem onClick={handleCopyLink}>Copy link</MenuItem>
        <MenuItem onClick={handleClose}>Close</MenuItem>
      </Menu>
      <CardContent>
        <Typography variant='h6' component='h6'>
          {loading ? (
            <React.Fragment>
              <Skeleton animation='wave' style={{ marginBottom: 6 }} />
              <Skeleton animation='wave' width='80%' />
            </React.Fragment>
          ) : (
            recipe.title || 'How to make sushi at home' //limit to 40 chars
          )}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className='rcm-card-actions-container'>
        <IconButton aria-label='add to favorites'>
          <BiBookmarkAlt />
        </IconButton>
        <IconButton aria-label='share' onClick={handleCopyLink}>
          <BiShareAlt />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default RecipeReviewCard;

import React, { useState, useEffect, useRef } from 'react';
import './RecipeCardPrimary.css';
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

const RecipeCardPrimary = ({ width = '300px' }) => {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuAnchorElement, setMenuAnchorElement] = useState(null);
  const navigate = useNavigate();

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
      {loading ? (
        <Skeleton sx={{ height: 194 }} animation='wave' variant='rectangular' />
      ) : (
        <CardMedia
          style={{ borderRadius: '15px' }}
          component='img'
          height='194'
          image='http://forkify-api.herokuapp.com/images/pizza292x2007a259a79.jpg'
          alt='Paella dish'
          style={{ cursor: 'pointer' }}
          onClick={handleSeeFullRecipe}
        />
      )}
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
          loading ? (
            <Skeleton animation='wave' width='80%' />
          ) : (
            'By: Shrimp and Chorizo'
          )
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
            'How to make sushi at home'
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

export default RecipeCardPrimary;

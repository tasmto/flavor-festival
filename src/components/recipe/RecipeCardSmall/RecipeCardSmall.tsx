import React, { useState, useEffect, useRef } from 'react';
import './RecipeCardSmall.css';
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

const RecipeCardSmall = () => {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuAnchorElement, setMenuAnchorElement] = useState(null);

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
    setMenuAnchorElement(null);
  };

  //Share button or copy link initiated
  const handleCopyLink = () => {
    navigator.clipboard.writeText(`${window.location.href}`);
    handleClose();
  };

  return (
    <Card className='rcs-card-container'>
      {loading ? (
        <Skeleton
          style={{ borderRadius: '25px' }}
          sx={{ height: 215 }}
          animation='wave'
          variant='rectangular'
        />
      ) : (
        <CardMedia
          component='img'
          height='200'
          image='http://forkify-api.herokuapp.com/images/pizza292x2007a259a79.jpg'
          alt='Paella dish'
          style={{ borderRadius: '25px', margin: 'auto' }}
        />
      )}
      <Typography className='rcm-card-time' color='text.primary' gutterBottom>
        <BiTimer />
        {loading ? <Skeleton width='100px' /> : '15min'}
      </Typography>

      <Menu
        id='basic-menu'
        anchorEl={menuAnchorElement}
        open={menuOpen}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Open recipe</MenuItem>
        <MenuItem onClick={handleCopyLink}>Copy link</MenuItem>
        <MenuItem onClick={handleClose}>Close</MenuItem>
      </Menu>
      <CardContent>
        <Typography variant='h6' style={{ fontWeight: '600' }} component='h6'>
          {loading ? (
            <React.Fragment>
              <Skeleton animation='wave' style={{ marginBottom: 6 }} />
              <Skeleton animation='wave' width='80%' />
            </React.Fragment>
          ) : (
            'How to make pizza in the summer'
          )}
        </Typography>
        <Typography color='text.primary' style={{ marginTop: '10px' }}>
          {loading ? <Skeleton animation='wave' /> : 'By Name namerson'}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default RecipeCardSmall;

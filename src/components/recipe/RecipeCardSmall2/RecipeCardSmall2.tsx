import React, { useState, useEffect, useRef } from 'react';
import './RecipeCardSmall2.css';
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

const RecipeCardSmall2 = () => {
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
    <Card className='rcs2-card-container'>
      {loading ? (
        <Skeleton sx={{ height: 194 }} animation='wave' variant='rectangular' />
      ) : (
        <CardMedia
          component='img'
          height='194'
          image='http://forkify-api.herokuapp.com/images/pizza292x2007a259a79.jpg'
          alt='Paella dish'
        />
      )}

      <CardContent>
        <Typography
          color='text.primary'
          variant='h6'
          style={{
            fontWeight: '600',
            marginTop: '20px',
            marginBottom: '5px',
          }}
          component='h6'
          gutterBottom
        >
          This is the heading
        </Typography>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography
            className='rcs2-card-time'
            color='text.secondary'
            gutterBottom
            variant='h6'
          >
            <BiTimer />
            {loading ? <Skeleton width='100px' /> : '15min'}
          </Typography>
          <CardActions disableSpacing className='rcm2-card-actions-container'>
            <IconButton aria-label='add to favorites'>
              <BiBookmarkAlt />
            </IconButton>
          </CardActions>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecipeCardSmall2;

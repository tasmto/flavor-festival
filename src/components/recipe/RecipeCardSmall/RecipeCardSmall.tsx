import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
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
import { toast } from 'react-toastify';

import {
  BiBookmarkAlt,
  BiShareAlt,
  BiBadgeCheck,
  BiDotsHorizontalRounded,
} from 'react-icons/bi';

type Props = {
  recipe: {
    publisher: string;
    image_url: string;
    title: string;
    id: string;
  };
};

const RecipeCardSmall: React.FC<Props> = ({ recipe }) => {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuAnchorElement, setMenuAnchorElement] = useState(null);
  const { publisher, image_url, title, id } = recipe;
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
    setMenuAnchorElement(null);
  };

  //Share button or copy link initiated
  const handleCopyLink = () => {
    navigator.clipboard.writeText(`${window.location.origin}/recipes/${id}`);
    toast('Link Copied', {
      position: 'top-left',
      hideProgressBar: true,
      progress: undefined,
    });
    handleClose();
  };

  // The image or linkable component is clicked
  const handleSeeFullRecipe = () => {
    navigate(`/recipes/${id}`);
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
          image={image_url}
          alt='Paella dish'
          style={{ borderRadius: '25px', margin: 'auto', cursor: 'pointer' }}
          onClick={handleSeeFullRecipe}
        />
      )}
      <Typography className='rcm-card-time' color='text.primary' gutterBottom>
        <BiBadgeCheck />
        {loading ? <Skeleton width='100px' /> : 'Verified'}
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
        <MenuItem onClick={handleSeeFullRecipe}>Open recipe</MenuItem>
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
          ) : recipe.title.length > 40 ? (
            recipe.title.substring(0, 40 - 3) + '...'
          ) : (
            recipe.title
          )}
        </Typography>
        <Typography color='text.primary' style={{ marginTop: '10px' }}>
          {loading ? <Skeleton animation='wave' /> : publisher}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default RecipeCardSmall;

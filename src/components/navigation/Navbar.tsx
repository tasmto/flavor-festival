import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  BiHomeAlt,
  BiBookmarkAlt,
  BiPlus,
  BiSearch,
  BiUser,
} from 'react-icons/bi';

export default function LabelBottomNavigation() {
  const location = useLocation();
  const [value, setValue] = React.useState(`${location.pathname}`);
  const navigate = useNavigate();

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    navigate(newValue);
    setValue(newValue);
  };

  return (
    <BottomNavigation
      className='navigation'
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction label='Home' value='/' icon={<BiHomeAlt />} />
      <BottomNavigationAction
        label='Favorites'
        value='/saved'
        icon={<BiBookmarkAlt />}
      />
      <BottomNavigationAction label='New' value='/create' icon={<BiPlus />} />
      <BottomNavigationAction
        label='Search'
        value='/search'
        icon={<BiSearch />}
      />
      <BottomNavigationAction
        label='Profile'
        value='/profile'
        icon={<BiUser />}
      />
    </BottomNavigation>
  );
}

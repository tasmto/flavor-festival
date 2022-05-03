import * as React from 'react';
import { useEffect } from 'react';
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
import BarImage from '../../assets/bg.svg';

export default function LabelBottomNavigation() {
  const location = useLocation();
  const [value, setValue] = React.useState(`${location.pathname}`);
  const navigate = useNavigate();

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    navigate(newValue);
    setValue(newValue);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setValue(`${location.pathname}`);
  }, [location]);

  return (
    <BottomNavigation
      className='navigation'
      value={value}
      onChange={handleChange}
      style={{
        backgroundColor: '#ffffff2b',
        backdropFilter: 'blur(1px)',
        backgroundImage: `url(${BarImage})`,
        backgroundSize: 'contain',
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat',
        height: '80px',
        boxShadow: 'none',
        paddingLeft: '10px',
        paddingRight: '10px',
        left: '-45%',
      }}
    >
      <BottomNavigationAction label='Home' value='/' icon={<BiHomeAlt />} />
      <BottomNavigationAction
        label='Favorites'
        value='/saved'
        icon={<BiBookmarkAlt />}
      />
      <BottomNavigationAction
        label='New'
        value='/create'
        style={{ transform: 'translateY(-50%)' }}
        icon={
          <span
            style={{
              backgroundColor: 'rgb(158, 43, 43)',
              color: '#ffffff',
              border: '20px solid rgb(158, 43, 43)',
              borderRadius: '100%',
              marginBottom: '5px',
            }}
          >
            <BiPlus />
          </span>
        }
      />
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

import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme/FlavorFestivalTheme';
import Navbar from './components/navigation/Navbar';
import BookmarksScreen from './screens/BookmarksScreen';
import CreateRecipe from './screens/CreateRecipe';
import HomeScreen from './screens/HomeScreen';
import NotFoundScreen from './screens/NotFoundScreen';
import ProfileScreen from './screens/ProfileScreen';
import SearchScreen from './screens/SearchScreen';
import SingleRecipeScreen from './screens/SingleRecipeScreen';
import SplashScreen from './screens/SplashScreen';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div id='application'>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path='*' element={<NotFoundScreen />} />

            <Route path='/' element={<HomeScreen />} />
            <Route path='/search' element={<SearchScreen />} />
            <Route path='/saved' element={<BookmarksScreen />} />
            <Route path='/create' element={<CreateRecipe />} />
            <Route path='/profile' element={<ProfileScreen />} />
            <Route path='/recipes/' element={<HomeScreen />} />
            <Route path='/recipes/:id' element={<SingleRecipeScreen />} />
            <Route path='/welcome' element={<SplashScreen />} />
          </Routes>

          <ToastContainer />
          <Navbar />
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;

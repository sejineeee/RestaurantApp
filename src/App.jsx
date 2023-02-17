import { Route, Routes } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { Global } from '@emotion/react';

import Header from './components/Header';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import RestaurantsPage from './pages/RestaurantsPage/RestaurantsPage';
import RestaurantPage from './pages/RestaurantPage/RestaurantPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import LoginPage from './pages/LoginPage/LoginPage';

import { setAccessToken } from './slice';

import { loadItem } from './services/storage';

import reset from './assets/resetStyle';

export default function App() {
  const dispatch = useDispatch();

  const accessToken = loadItem('accessToken');
  if (accessToken) {
    dispatch(setAccessToken(accessToken));
  }
  return (
    <div>
      <Global styles={reset} />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/restaurants" element={<RestaurantsPage />} />
        <Route path="/restaurants/:id" element={<RestaurantPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

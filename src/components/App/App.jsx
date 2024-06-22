import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { refreshUser } from '../../redux/auth/operations';
import { selectIsRefreshing } from '../../redux/auth/selectors';
import { Layout } from '/src/components/Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import RestrictedRoute from '/src/components/RestrictedRoute/RestrictedRoute';
import css from './App.module.css';

const HomePage = lazy(() => import('/src/pages/Home/Home.jsx'));
const ContactsPage = lazy(() => import('/src/pages/Contacts/Contacts.jsx'));
const RegisterPage = lazy(() => import('/src/pages/Register/Register.jsx'));
const LoginPage = lazy(() => import('/src/pages/Login/Login.jsx'));

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <div>REFRESHING USER...</div>
  ) : (
    <Layout>
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/contacts"
            element={
              <PrivateRoute component={<ContactsPage />} registerTo="/login" />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute component={<RegisterPage />} registerTo="/" />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                component={<LoginPage />}
                registerTo="/contacts"
              />
            }
          />
        </Routes>
      </Suspense>
    </Layout>
  );
}

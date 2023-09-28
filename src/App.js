/* eslint-disable no-undef */
import React,{ Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

const RegisterPage = React.lazy(() => import('./pages/register/index'))
const HomePage = React.lazy(() => import('./pages/home/index'))

function App() {

  return (
    <Router>
      <Routes>
      <Route exact path='/'
          element={<Suspense fallback={<div>Loading...</div>}>
            <HomePage />
          </Suspense>} />

        <Route path='/register'
          element={<Suspense fallback={<div>Loading...</div>}>
            <RegisterPage />
          </Suspense>} />
      </Routes>
    </Router>
  );
}


export default App;
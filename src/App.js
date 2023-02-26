import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import { Account, Articles, Authen, ErrorPage, HomePage } from './pages';

function App() {
  return (
    <React.Fragment>
      <Header />
      <div className='container m-auto px-2'>
        <Routes  errorElement={<ErrorPage/>} >
          <Route path="/" element={<HomePage />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/account" element={<Account />} />
          <Route path="/authen" element={<Authen />} />
          <Route path="/error" element={<ErrorPage />} />
        </Routes>
      </div>
    </React.Fragment>
  );
}

export default App;

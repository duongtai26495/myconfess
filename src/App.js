import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NewArticleButton from './components/article/NewArticleButton';
import Header from './components/header/Header';
import { ACCOUNT, ARTICLE, ARTICLES, ARTICLE_NEW, AUTHEN, ERRORPAGE, HOMEPAGE, TAG } from './config/constanst';
import { Account, Article, ArticleNew, Articles, Authen, ErrorPage, HomePage } from './pages';


function App() {

  return (
    <React.Fragment>
      <Header />
      <div className='container m-auto px-2 pb-10'>
        <Routes errorElement={<ErrorPage />} >
          <Route path={HOMEPAGE} element={<HomePage />} />
          <Route path={ARTICLES} element={<Articles />} />
          <Route path={ARTICLE+":id"} element={<Article />} />
          <Route path={ARTICLE_NEW} element={<ArticleNew />} />
          <Route path={ACCOUNT} element={<Account />} />
          <Route path={AUTHEN} element={<Authen />} />
          <Route path={TAG+":id"} element={<Authen />} />
          <Route path={ERRORPAGE} element={<ErrorPage />} />
        </Routes>
      </div>
      <NewArticleButton />
    </React.Fragment>
  );
}

export default App;

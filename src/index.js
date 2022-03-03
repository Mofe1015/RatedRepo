import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import Card from './components/Card';
import TopRated from './components/TopRated';
import Talks from './components/Talks';





ReactDOM.render(
  <div>
    <Header />
    <Talks/>
    <TopRated/>
  </div>,
  document.getElementById('root')
);



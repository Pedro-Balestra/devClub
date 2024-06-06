import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './containers/Home';
import Users from './containers/Users';
import GlobalStyle from './globalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Users />
    <GlobalStyle />
  </>
);


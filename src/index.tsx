import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import Router from './router/Router';
import { GlobalStyle } from './styles/GlobalStyle';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <GlobalStyle />
      <Router />
    </RecoilRoot>
  </React.StrictMode>
);

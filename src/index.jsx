import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';

import './index.scss';
import App from './components/App/App';

const root = document.getElementById('root');

const app = ReactDOMClient.createRoot(root);

app.render(
  <BrowserRouter>
  <App />
</BrowserRouter>
);
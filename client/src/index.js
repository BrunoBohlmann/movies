import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Auth0Provider } from '@auth0/auth0-react';

import './index.css';

// Archivos y constantes
import App from './App';
import store from './store';

ReactDOM.render(
  <Auth0Provider
    domain="dev-zu-lt3xv.us.auth0.com"
    clientId="gGIPAw8zWs8Jri8fT2Cla0MxaEdv42CD"
    redirectUri={window.location.origin}
  >
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </Auth0Provider>,
  document.getElementById('root')
);

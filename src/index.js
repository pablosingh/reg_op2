import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import authConfig from './auth_config.json';
import { Auth0Provider } from '@auth0/auth0-react';
import { Provider } from 'react-redux';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Auth0Provider
      domain={authConfig.domain}
      clientId={authConfig.clientId}
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
      <Provider store={store}>
        <App />
      </Provider>
    </Auth0Provider>
  // </React.StrictMode> // Lo elimino para ejecutar 1 sola vez el useEffect
);

reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Provider } from 'react-redux';
import { store, persistor } from './store/store.ts';
import { PersistGate } from 'redux-persist/integration/react';
import { Auth0Provider } from '@auth0/auth0-react';
import { Elements } from '@stripe/react-stripe-js';
import 'react-image-gallery/styles/css/image-gallery.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Auth0Provider
      domain='dev-cwqld7aacet6gyjn.us.auth0.com'
      clientId='vf5d6roMImYYlGDHqkHN0cVtXoIc6T7j'
      // use in production
      // authorizationParams={{
      //   redirect_uri: 'https://tecth-hub.netlify.app/',
      // }}

      // use in development
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Elements>
            <App />
          </Elements>
        </PersistGate>
      </Provider>
    </Auth0Provider>
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Provider } from 'react-redux';
import { store, persistor } from './store/store.ts';
import { PersistGate } from 'redux-persist/integration/react';
import { Auth0Provider } from '@auth0/auth0-react';
import 'react-image-gallery/styles/css/image-gallery.css';
import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from './utils/stripe/stripe.utils.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_DOMAIN}
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
      // use in production
      authorizationParams={{
        redirect_uri: 'https://tecth-hub.netlify.app/',
      }}
      // use in development
      // authorizationParams={{
      //   redirect_uri: window.location.origin,
      // }}
    >
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Elements stripe={stripePromise}>
            <App />
          </Elements>
        </PersistGate>
      </Provider>
    </Auth0Provider>
  </React.StrictMode>
);

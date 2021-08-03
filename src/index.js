import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
  domain="dev-03g3371b.us.auth0.com"
  clientId="tzWXBSiZfUjqNhUIA52Fz2btpfY40FTL"
  redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
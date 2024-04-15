import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
<Auth0Provider
    domain="dev-yzfcs7glm4x0qhxq.us.auth0.com"
    clientId="lk9kJEC2Rwcx9ANibh7KDo4lHBQM5dX2"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,


</>

);



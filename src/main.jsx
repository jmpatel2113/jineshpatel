import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Helmet } from 'react-helmet';

import "@fontsource/roboto";
import "@fontsource/outfit";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <Helmet>
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${import.meta.env.REACT_PUBLIC_GOOGLE_ANALYTICS_ID}`}></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${import.meta.env.REACT_PUBLIC_GOOGLE_ANALYTICS_ID}');
          `}
        </script>
      </Helmet>
      <App/>
    </>
  </React.StrictMode>,
)

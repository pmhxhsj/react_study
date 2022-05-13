import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Youtube from './service/youtube';

const youtube = new Youtube(process.env.REACT_APP_youtubeKey);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App youtube={youtube} />
  </React.StrictMode>
);

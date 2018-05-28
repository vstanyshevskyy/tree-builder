import './css/reset.css';
import './css/global.css';
import React from 'react';
import Helmet from 'preact-helmet';

import App from '../components/App';

export default () => (
  <div>
    <Helmet
      htmlAttributes={{ lang: 'en', amp: undefined }}
      title="Tree Builder Demo"
      titleAttributes={{ itemprop: 'name', lang: 'en' }}
      meta={[
        { name: 'canonical', content: 'https://tree-builder.netlify.com' },
        { name: 'description', content: 'Tree Builder Demo - see what app i can do' },
        { property: 'og:type', content: 'website' }
      ]}
      noscript={[
        { innerHTML: 'Please enable JS to see the app' }
      ]}
    />
    <header>
      <h1>Tree builder demo</h1>
    </header>
    <div id="app" class="app">
      <App />
    </div>
  </div>
);

import React from 'react';
import ReactDom from 'react-dom';

import App from './routes';

const appId = document.querySelector('#app');

ReactDom.render(<App />, appId);

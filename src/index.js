import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import './css/hover-min.css';
import './Components/css/services_top.css';
import './Components/css/nav.css';
import './Components/css/slick.css';
import './Components/css/slick-theme.css';
import App from './App';
import { hydrate, render } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './form-submission-handler.js';
const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
    hydrate(<App />, rootElement);
} else {
    render(<App />, rootElement);
}
registerServiceWorker();
	
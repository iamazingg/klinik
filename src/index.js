import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store';
import { BrowserTracing } from '@sentry/tracing';
import {
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';
Sentry.init({
  dsn: 'https://1b45f1bb7294477e95a6186822df4cc7@o1308679.ingest.sentry.io/6554247',
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});
const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

import {StrictMode} from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';
import ErrorBoundary from "./app/components/pages/ErrorBoundary/ErrorBoundary";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ErrorBoundary>
    <StrictMode>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </StrictMode>
  </ErrorBoundary>
);

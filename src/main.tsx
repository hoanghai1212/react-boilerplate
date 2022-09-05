import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { WrappedApp } from './components/App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <WrappedApp />
  </StrictMode>
);

import App from './App.tsx';
import './index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root')!);

async function deferRender() {
  const browser = (await import('./mocks/browser.mock.ts')).default;
  browser.start();
}

deferRender().then(() => {
  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
});

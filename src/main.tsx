import App from './App.tsx';
import AppContainer from './app/container/index.tsx';
import './index.css';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root')!);

async function deferRender() {
  const browser = (await import('./mocks/browser.mock.ts')).default;
  browser.start();
}

deferRender().then(() => {
  root.render(
    <AppContainer>
      <App />
    </AppContainer>,
  );
});

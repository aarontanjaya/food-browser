import '@app/configs/locale';
import queryConfig from '@app/configs/query';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StrictMode, lazy } from 'react';

const ReactQueryDevtools = import.meta.env.DEV
  ? lazy(() => import('@tanstack/react-query-devtools').then((module) => ({ default: module.ReactQueryDevtools })))
  : () => null;

const queryClient = new QueryClient(queryConfig);

export default function AppContainer({ children }: { children: React.ReactNode }) {
  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </StrictMode>
  );
}

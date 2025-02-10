import '@app/configs/locale';
import queryConfig from '@app/configs/query';
import routeConfig from '@app/configs/route/route.config';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StrictMode, lazy } from 'react';
import { RouterProvider } from 'react-router';

const ReactQueryDevtools = import.meta.env.DEV
  ? lazy(() => import('@tanstack/react-query-devtools').then((module) => ({ default: module.ReactQueryDevtools })))
  : () => null;

const queryClient = new QueryClient(queryConfig);

export default function AppContainer() {
  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={routeConfig} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </StrictMode>
  );
}

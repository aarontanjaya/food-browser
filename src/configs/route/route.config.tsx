import homeRoute from '@app/pages/Home/index.route';
import { createBrowserRouter, RouteObject } from 'react-router';

export const routes: RouteObject[] = [homeRoute];

const routeConfig = createBrowserRouter(routes);

export default routeConfig;

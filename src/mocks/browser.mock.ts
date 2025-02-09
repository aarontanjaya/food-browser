import { mockCommonHandlers } from '@app/services/common';
import { mockRestaurantHandlers } from '@app/services/restaurant';
import { setupWorker } from 'msw/browser';

const browser = setupWorker(...mockCommonHandlers, ...mockRestaurantHandlers);

export default browser;

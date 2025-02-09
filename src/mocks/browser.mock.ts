import { mockCommonHandlers } from '@app/services/common';
import { mockFoodHandlers } from '@app/services/food';
import { setupWorker } from 'msw/browser';

const browser = setupWorker(...mockCommonHandlers, ...mockFoodHandlers);

export default browser;

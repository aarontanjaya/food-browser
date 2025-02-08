import mockCommonHandlers from '@app/services/common/mocks/handlers/index.handler';
import mockFoodHandlers from '@app/services/food/mocks/handlers/index.handler';
import { setupWorker } from 'msw/browser';

const browser = setupWorker(...mockCommonHandlers, ...mockFoodHandlers);

export default browser;

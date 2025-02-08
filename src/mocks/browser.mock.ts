import mockCommonHandlers from '../services/common/mocks/handlers/index.handler';
import { setupWorker } from 'msw/browser';

const browser = setupWorker(...mockCommonHandlers);

export default browser;

import { cleanup } from '@testing-library/react';

afterEach(() => {
  /**
   * Cleanup the react-testing-library
   */
  cleanup();

  /**
   * Clear all mocks
   */
  jest.clearAllMocks();
});

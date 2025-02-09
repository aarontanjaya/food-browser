import mockTFunc from './locale.mock';

jest.mock('react-i18next', () => {
  const actual = jest.requireActual('react-i18next');
  return {
    ...actual,
    initReactI18next: {
      init: () => {},
      type: 'test',
    },
    Trans: 'react-trans',
    useTranslation: () => {
      return {
        i18n: {
          changeLanguage: async () => {},
        },
        t: mockTFunc,
      };
    },
  };
});

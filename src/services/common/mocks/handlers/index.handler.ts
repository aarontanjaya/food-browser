import { HttpHandler, HttpResponse, http } from 'msw';

const mockCommonHandlers: HttpHandler[] = [
  http.get('/ping', () => {
    return HttpResponse.json({
      status: 'ok',
    });
  }),
];

export default mockCommonHandlers;

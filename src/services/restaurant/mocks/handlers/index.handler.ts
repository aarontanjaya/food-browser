import { MOCK_RESTAURANT_LIST } from '../data/restaurant.data';
import { http, HttpHandler, HttpResponse } from 'msw';

const mockRestaurantHandlers: HttpHandler[] = [
  http.get('/restaurant', ({ request }) => {
    const url = new URL(request.url);
    const categoryId = url.searchParams.get('categoryId');
    const page = parseInt(url.searchParams.get('page') || '1', 10);
    const limit = parseInt(url.searchParams.get('limit') || '10', 10);
    const search = url.searchParams.get('search') || '';

    let filteredData = MOCK_RESTAURANT_LIST;

    if (categoryId) {
      filteredData = filteredData.filter((item) => item.categoryId === categoryId);
    }

    if (search) {
      const lowerSearch = search.toLowerCase();
      filteredData = filteredData.filter((item) => item.name.toLowerCase().includes(lowerSearch));
    }

    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedData = filteredData.slice(startIndex, endIndex);

    return HttpResponse.json({
      data: paginatedData,
      total: filteredData.length,
      page,
      limit,
    });
  }),
  http.get('/categories', () => {
    return HttpResponse.json([
      {
        id: '6288a89f1f0152b8c2cd512b',
        name: 'Sushi',
      },
      {
        id: '6288a89f7338764f2071a8a8',
        name: 'Pizza',
      },
      {
        id: '6288a89f70dc8cf93b71609b',
        name: 'Hot Meals',
      },
      {
        id: '6288a89fe6c2fe0b758360fe',
        name: 'Desserts',
      },
      {
        id: '6288a89fac9e970731bfaa7b',
        name: 'Drinks',
      },
    ]);
  }),
];

export default mockRestaurantHandlers;

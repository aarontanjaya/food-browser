import { GetRestaurantCategoriesResponse } from '../models/category.model';
import { GetRestaurantParams, GetRestaurantResponse } from '../models/restaurant.model';

export default interface IRestaurantRepository {
  getRestaurantCategories: (signal?: AbortSignal) => Promise<GetRestaurantCategoriesResponse>;
  getRestaurantList: (params: GetRestaurantParams, signal?: AbortSignal) => Promise<GetRestaurantResponse>;
}

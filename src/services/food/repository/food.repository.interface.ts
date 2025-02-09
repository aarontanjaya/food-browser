import { GetFoodCategoriesResponse } from '../models/category.model';
import { GetFoodParams, GetFoodResponse } from '../models/index.model';

export default interface IFoodRepository {
  getFoodCategories: (signal?: AbortSignal) => Promise<GetFoodCategoriesResponse>;
  getFoodList: (params: GetFoodParams, signal?: AbortSignal) => Promise<GetFoodResponse>;
}

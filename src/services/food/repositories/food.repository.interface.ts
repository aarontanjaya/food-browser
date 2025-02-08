import { GetFoodCategoriesResponse } from '../models/category.model';

export default interface IFoodRepository {
  getFoodCategories: (signal?: AbortSignal) => Promise<GetFoodCategoriesResponse>;
}

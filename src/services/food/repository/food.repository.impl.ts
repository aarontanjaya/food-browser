import { GetFoodCategoriesResponse } from '../models/category.model';
import IFoodRepository from './food.repository.interface';

export default function foodRepositoryImpl(): IFoodRepository {
  const getFoodCategories = async (signal?: AbortSignal) => {
    const response = await fetch('/categories', { signal }).then<GetFoodCategoriesResponse>((res) => res.json());

    return response;
  };

  return {
    getFoodCategories,
  };
}

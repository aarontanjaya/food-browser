import { GetFoodCategoriesResponse } from '../models/category.model';
import { GetFoodParams, GetFoodResponse } from '../models/index.model';
import IFoodRepository from './food.repository.interface';
import urlcat from 'urlcat';

export default function foodRepositoryImpl(): IFoodRepository {
  const getFoodCategories = async (signal?: AbortSignal) => {
    const response = await fetch('/categories', { signal }).then<GetFoodCategoriesResponse>((res) => res.json());

    return response;
  };

  const getFoodList = async (params: GetFoodParams, signal?: AbortSignal) => {
    const url = urlcat('/food', params);
    const response = await fetch(url, { signal }).then<GetFoodResponse>((res) => res.json());

    return response;
  };

  return {
    getFoodCategories,
    getFoodList,
  };
}

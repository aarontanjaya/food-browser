import { GetRestaurantCategoriesResponse } from '../models/category.model';
import { GetRestaurantParams, GetRestaurantResponse } from '../models/restaurant.model';
import IRestaurantRepository from './restaurant.repository.interface';
import urlcat from 'urlcat';

export default function restaurantRepositoryImpl(): IRestaurantRepository {
  const getRestaurantCategories = async (signal?: AbortSignal) => {
    const response = await fetch('/categories', { signal }).then<GetRestaurantCategoriesResponse>((res) => res.json());

    return response;
  };

  const getRestaurantList = async (params: GetRestaurantParams, signal?: AbortSignal) => {
    const url = urlcat('/restaurant', params);
    const response = await fetch(url, { signal }).then<GetRestaurantResponse>((res) => res.json());

    return response;
  };

  return {
    getRestaurantCategories,
    getRestaurantList,
  };
}

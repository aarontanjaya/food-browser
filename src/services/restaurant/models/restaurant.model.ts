import { PaginatedResponse, PaginationParams } from '@app/services/common';

// Move to a new service module e.g. promotion if usecase expands
export enum RestaurantPromotion {
  Gift = 'gift',
  Bogo = '1+1',
  Discount = 'discount',
}

export type Restaurant = {
  id: string;
  index: number;
  rating: number;
  promotion: RestaurantPromotion | null;
  isNew: boolean;
  categoryId: string;
  minCookTime: number;
  maxCookTime: number;
  restaurant: string;
  name: string;
  imageUrl: string;
};

export type GetRestaurantParams = {
  categoryId?: string;
} & PaginationParams;

export type GetRestaurantResponse = PaginatedResponse<Restaurant[]>;

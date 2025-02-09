import { PaginatedResponse, PaginationParams } from '@app/services/common';

// Move to a new service module e.g. promotion if usecase expands
export enum FoodPromotion {
  Gift = 'gift',
  Bogo = '1+1',
  Discount = 'discount',
}

export type Food = {
  id: string;
  index: number;
  rating: number;
  promotion: FoodPromotion | null;
  isNew: boolean;
  categoryId: string;
  minCookTime: number;
  maxCookTime: number;
  restaurant: string;
  name: string;
  imageUrl: string;
};

export type GetFoodParams = {
  categoryId?: string;
} & PaginationParams;

export type GetFoodResponse = PaginatedResponse<Food[]>;

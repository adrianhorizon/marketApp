import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { Products } from '../../models/products.model';
import { featureAdapter, State } from './state';

export const getError = (state: State): any => state.error;

export const getIsLoading = (state: State): boolean => state.isLoading;

export const selectProductsState: MemoizedSelector<
  object,
  State
> = createFeatureSelector<State>('products');

export const selectAllProductsItems: (
  state: object
) => Products[] = featureAdapter.getSelectors(selectProductsState).selectAll;

export const selectProductsById = (id: string) =>
  createSelector(selectAllProductsItems, (allProducts: Products[]) => {
    if (allProducts) {
      return allProducts.find(p => p.id === id);
    } else {
      return null;
    }
  });

export const selectProductsError: MemoizedSelector<object, any> = createSelector(
  selectProductsState,
  getError
);

export const selectProductsIsLoading: MemoizedSelector<
  object,
  boolean
> = createSelector(selectProductsState, getIsLoading);

import { createSelector, MemoizedSelector } from '@ngrx/store';
import { ProductsStoreSelectors } from './product-store';

export const selectError: MemoizedSelector<object, string> = createSelector(
  ProductsStoreSelectors.selectProductsError,
  (productsError: string) => {
    return productsError;
  }
);

export const selectIsLoading: MemoizedSelector<
  object,
  boolean
> = createSelector(
  ProductsStoreSelectors.selectProductsIsLoading,
  (products: boolean) => {
    return products;
  }
);

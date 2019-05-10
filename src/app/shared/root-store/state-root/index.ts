import * as fromProducts from './reducers/products.reducers';
import * as fromRoot from './ui.index';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export interface ProductsState {
  products: fromProducts.ProductState;
}

// This is a lazy loaded state, so we need to extend from the App Root State
export interface State extends fromRoot.State {
  products: ProductsState;
}

export const reducers = {
  products: fromProducts.reducer
};

/**
 * The createFeatureSelector function selects a piece of state from the root of the state object.
 * This is used for selecting feature states that are loaded eagerly or lazily.
 */

export const getProductsState = createFeatureSelector<State, ProductsState>('products');

export const getProductsEntitiesState = createSelector(
  getProductsState,
  state => state.products
);

export const getSelectedProductsId = createSelector(
  getProductsEntitiesState,
  fromProducts.getCurrentProductsId
);

export const {
  selectAll: getAllProducts,
  selectEntities: getProductsEntities
} = fromProducts.productsAdapter.getSelectors(getProductsEntitiesState);

export const getCurrentContact = createSelector(
    getProductsEntities,
  getSelectedProductsId,
  (entities, id) => id && entities[id]
);


import { Products } from '../models/Products';
import {EntityState, createEntityAdapter} from '@ngrx/entity';
import { AllProducts, ProductsActionTypes } from '../actions/products.action';


export const productsAdapter = createEntityAdapter<Products>({
  selectId: (contact: Products) => contact.id,
  sortComparer: false
});

export interface ProductState extends EntityState<Products> {
  currentProductsId?: number;
}

export const INIT_STATE: ProductState = productsAdapter.getInitialState({
  currentProductsId: undefined
});


export function reducer(
  state: ProductState = INIT_STATE,
  action: AllProducts
) {

  switch (action.type) {

    case ProductsActionTypes.SET_CURRENT_PRODUCTS_ID : {
      return {
        ...state,
        currentProductsId: action.payload
      };
    }

    case ProductsActionTypes.LOAD_ALL_SUCCESS : {
      return productsAdapter.addAll(action.payload, state);
    }

    case ProductsActionTypes.LOAD_SUCCESS : {
      return productsAdapter.addOne(action.payload, {
        ...state,
        currentProductsId: action.payload.id
      });
    }

    case ProductsActionTypes.CREATE_SUCCESS : {
        return productsAdapter.addOne(action.payload, {
          ...state
        });
      }

      case ProductsActionTypes.PATCH_SUCCESS : {
        return productsAdapter.updateOne(action.payload, state);
      }

      case ProductsActionTypes.DELETE_SUCCESS : {
        return productsAdapter.removeOne(action.payload, state);
      }

    default: return state;

  }
}

export const getCurrentProductsId = (state: ProductState) => state.currentProductsId;

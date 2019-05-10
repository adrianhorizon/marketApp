import { Action } from '@ngrx/store';
import { Products } from 'src/app/shared/root-store/state-root/models/Products';
import { Update } from '@ngrx/entity';

export enum ProductsActionTypes {
    LOAD_ALL = '[PRODUCTS] LOAD ALL',
    LOAD_ALL_SUCCESS = '[PRODUCTS] LOAD ALL SUCCESS',

    LOAD = '[PRODUCTS] LOAD',
    LOAD_SUCCESS = '[PRODUCTS] LOAD SUCCESS',

    CREATE = '[PRODUCTS] CREATE',
    CREATE_SUCCESS = '[PRODUCTS] CREATE SUCCESS',

    PATCH = '[PRODUCTS] PATCH',
    PATCH_SUCCESS = '[PRODUCTS] PATCH SUCCESS',

    DELETE = '[PRODUCTS] DELETE',
    DELETE_SUCCESS = '[PRODUCTS] DELETE SUCCESS',

    FAILURE = '[PRODUCTS] FAILURE',

    SET_CURRENT_PRODUCTS_ID = '[PRODUCTS] SET CURRENT PRODUCTS ID'
}

export class SetCurrentProductsId implements Action {
  readonly type = ProductsActionTypes.SET_CURRENT_PRODUCTS_ID;
  constructor(public payload: object) {}
}

export class LoadAllProducts implements Action {
  readonly type = ProductsActionTypes.LOAD_ALL;
}

export class LoadProducts implements Action {
  readonly type = ProductsActionTypes.LOAD;
  constructor(public payload: number) {}
}

export class CreateProducts implements Action {
  readonly type = ProductsActionTypes.CREATE;
  constructor(public payload: Products) {}
}

export class PatchProducts implements Action {
  readonly type = ProductsActionTypes.PATCH;
  constructor(public payload: Products) {}
}

export class DeleteProducts implements Action {
  readonly type = ProductsActionTypes.DELETE;
  constructor(public payload: number) {}
}

export class LoadAllSuccessProducts implements Action {
  readonly type = ProductsActionTypes.LOAD_ALL_SUCCESS;
  constructor(public payload: Products[]) {}
}

export class LoadSuccessProducts implements Action {
  readonly type = ProductsActionTypes.LOAD_SUCCESS;
  constructor(public payload: Products) {}
}

export class CreateSuccessProducts implements Action {
    readonly type = ProductsActionTypes.CREATE_SUCCESS;
    constructor(public payload: Products) {}
  }

export class PatchSuccess implements Action {
    readonly type = ProductsActionTypes.PATCH_SUCCESS;
    constructor(public payload: Update < Products > ) {}
}

export class DeleteSuccessProducts implements Action {
    readonly type = ProductsActionTypes.DELETE_SUCCESS;
    constructor(public payload: number) {}
}

export class Failure implements Action {
    readonly type = ProductsActionTypes.FAILURE;
    constructor(public payload: {concern: 'CREATE' | 'PATCH', error: any}) {}
  }

export type AllProducts = |
  SetCurrentProductsId |
  LoadAllProducts |
  LoadProducts |
  CreateProducts |
  PatchProducts |
  DeleteProducts |
  LoadAllSuccessProducts |
  LoadSuccessProducts |
  CreateSuccessProducts |
  PatchSuccess |
  DeleteSuccessProducts;

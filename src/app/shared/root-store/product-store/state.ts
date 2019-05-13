import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Products } from '../../models/products.model';

export const featureAdapter: EntityAdapter<
  Products
> = createEntityAdapter<Products>({
  selectId: model => model.id,
  sortComparer: (a: Products, b: Products): number =>
    b.id.toString().localeCompare(a.id.toString())
});

export interface State extends EntityState<Products> {
  isLoading?: boolean;
  error?: any;
}

export const initialState: State = featureAdapter.getInitialState(
  {
    isLoading: false,
    error: null
  }
);

import { Injectable } from '@angular/core';
import { catchError, exhaustMap, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as productsActions from '../actions/products.action';
import { Actions, Effect, ofType} from '@ngrx/effects';
import { Products } from '../models/Products';
import { ProductsService } from 'src/app/shared/services/Products.service';

@Injectable()
export class ContactsEffects {

  @Effect()
  loadAll$ = this.actions$.pipe(
      ofType<productsActions.LoadAllProducts>(
          productsActions.ProductsActionTypes.LOAD_ALL
          ),
      switchMap(() => this.productsService.index().pipe(
        map( products => new productsActions.LoadAllSuccessProducts(products) )
      )),
    );

  @Effect()
  load$ = this.actions$.pipe(
    ofType<productsActions.LoadProducts>(productsActions.ProductsActionTypes.LOAD),
    map( action => action.payload),
    switchMap( id => this.productsService.show(id).pipe(
      map( contact => new productsActions.LoadSuccessProducts(contact))
    ))
  );

  @Effect()
  create$ = this.actions$.pipe(
    ofType<productsActions.CreateProducts>(productsActions.ProductsActionTypes.CREATE),
    map( action => action.payload),
    exhaustMap((contact) => this.productsService.create(contact).pipe(
      map( (createdContact: Products) => new productsActions.CreateSuccessProducts(createdContact)),
      catchError(err => {
        alert(err.message);
        return of(new productsActions.Failure({concern: 'CREATE', error: err}));
      })
    ))
  );

  @Effect()
  update$ = this.actions$.pipe(
    ofType<productsActions.PatchProducts>(productsActions.ProductsActionTypes.PATCH),
    map( action => action.payload ),
    exhaustMap( contact => this.productsService.update(contact).pipe(
      map((updatedContact: Products) => new productsActions.PatchSuccess({
        id: updatedContact.id,
        changes: updatedContact
      })),
      catchError(err => {
        alert(err.message);
        return of(new productsActions.Failure({concern: 'PATCH', error: err}));
      })
    ))

  );

  @Effect()
  destroy$ = this.actions$.pipe(
    ofType<productsActions.DeleteProducts>(productsActions.ProductsActionTypes.DELETE),
    map( action => action.payload ),
    switchMap(
      id => this.productsService.destroy(id).pipe(
        map( () => new productsActions.DeleteSuccessProducts(id))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private productsService: ProductsService
  ) {}

}

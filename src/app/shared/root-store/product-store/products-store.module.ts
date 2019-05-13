import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ProductsStoreEffects } from './effects';
import { featureReducer } from './reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('products', featureReducer),
    EffectsModule.forFeature([ProductsStoreEffects])
  ],
  providers: [ProductsStoreEffects]
})
export class ProductsStoreModule {}

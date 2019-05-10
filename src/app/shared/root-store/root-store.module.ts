import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducers } from './state-root/index';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('products', reducers),
  ]
})
export class RootStoreModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPipe } from './pipes/search.pipe';
import { RootStoreModule } from './root-store/root-store.module';

@NgModule({
  declarations: [
    SearchPipe
  ],
  imports: [
    CommonModule,
    RootStoreModule
  ],
  exports: [
    SearchPipe
  ]
})
export class SharedModule { }

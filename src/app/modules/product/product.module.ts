import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ProductPage } from './pages/product-page/product.page';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProductPage
      }
    ])
  ],
  declarations: [
    ProductPage
  ]
})
export class ProductModule {}

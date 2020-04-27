import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { CategoryPage } from './pages/category-page/category.page';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: CategoryPage
      }
    ])
  ],
  declarations: [
    CategoryPage
  ]
})
export class CategoryModule {}

import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { CategoriesPage } from './pages/categories-page/categories.page';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: CategoriesPage
      }
    ])
  ],
  declarations: [
    CategoriesPage
  ]
})
export class CategoriesModule {}

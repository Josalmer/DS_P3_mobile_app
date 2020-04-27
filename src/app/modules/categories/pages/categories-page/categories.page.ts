import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../shared/services/category-service.service';
import { ArrayType } from '@angular/compiler';

@Component({
  selector: 'app-categories',
  templateUrl: 'categories.page.html'
})
export class CategoriesPage implements OnInit {

  categories: any;

  constructor(
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.loadCateogories();
  }

  loadCateogories(event?): void {
    this.categoryService.getCategories().subscribe(
      response => {
        this.categories = response.categories;
        //console.log(this.categories);
        if(event) {
          event.target.complete();
        }
      }
    )
  }

  doRefresh(event): void {
    this.loadCateogories(event);
   }

}

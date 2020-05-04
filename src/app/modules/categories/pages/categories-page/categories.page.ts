import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../shared/services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: 'categories.page.html'
})
export class CategoriesPage implements OnInit {

  categories: any;

  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadCateogories();
  }

  loadCateogories(event?): void {
    this.categoryService.getCategories().subscribe(
      response => {
        this.categories = response.categories;
        if (event) {
          event.target.complete();
        }
      }
    )
  }

  doRefresh(event): void {
    this.loadCateogories(event);
  }

  navigateToCategory(id: string): void {
    this.router.navigateByUrl('/category/' + id);
  }

}

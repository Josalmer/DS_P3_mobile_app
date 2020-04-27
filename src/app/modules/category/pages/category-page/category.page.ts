import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../shared/services/category-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: 'category.page.html'
})
export class CategoryPage implements OnInit {

  products: any;
  id: any;

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('categoryId');
    console.log("Id: " + this.id);
    this.loadProducts();
  }

  loadProducts(event?): void {
    this.categoryService.getCategory(this.id).subscribe(
      response => {
        this.products = response.products;
        if(event) {
          event.target.complete();
        }
      }
    )
  }

  doRefresh(event): void {
    this.loadProducts(event);
   }

}

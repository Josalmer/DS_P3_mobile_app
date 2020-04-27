import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../shared/services/category-service.service';
import { ArrayType } from '@angular/compiler';
import { ActivatedRoute } from '@angular/router';
//import { categories } from '../../../categories/pages/categories-page/categories.page';

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
    this.route.paramMap.subscribe(params=>{
      this.id = 1;// [+params.get('id')];
    })
    console.log("Id: " + this.id);
    this.loadProducts();
  }

  loadProducts(event?): void {
    this.categoryService.getCategory(this.id).subscribe(
      response => {
        //this.products = response.categories;
        console.log("Respuesta: " + response);
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

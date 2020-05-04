import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../shared/services/category.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: 'category.page.html'
})
export class CategoryPage implements OnInit {
  category: any;

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.loadProducts(id);
    });
  }

  loadProducts(id, event?): void {
    this.categoryService.getCategory(id).subscribe(
      response => {
        this.category = response;
        if (event) {
          event.target.complete();
        }
      }
    )
  }

  doRefresh(event): void {
    this.loadProducts(this.category.id, event);
  }

  navigateToProduct(id: string): void {
    this.router.navigateByUrl('/product/' + id);
  }

}

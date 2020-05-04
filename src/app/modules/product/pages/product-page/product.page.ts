import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: 'product.page.html'
})
export class ProductPage implements OnInit {
  product: any;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.loadProduct(id);
    });
  }

  loadProduct(id): void {
    this.productService.getProduct(id).subscribe(
      response => {
        this.product = response;
        console.log(this.product);
      }
    )
  }

}

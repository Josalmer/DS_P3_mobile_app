import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { ToastMessageService } from 'src/app/modules/shared/services/toast-messages.service';
import { error } from 'util';

@Component({
  selector: 'app-category',
  templateUrl: 'product.page.html'
})
export class ProductPage implements OnInit {
  product: any;
  has_product: boolean;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private alert: ToastMessageService,
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
        this.has_product = this.product.belongs_to_user_shopping_basket;
        console.log(this.product);
      }
    )
  }

  addProductToBasket(): void {
    this.productService.addProductToBasket(this.product.id).subscribe(
      response => {
        this.has_product = !this.has_product;
        this.alert.showMessage("Producto añadido a la cesta", "primary");
      },
      error => {
        this.alert.showMessage("No se ha podido añadir a la cesta", "alert");
      }
    )
  }

  removeProductToBasket() {
    this.productService.removeProductToBasket(this.product.id).subscribe(
      response => {
        this.has_product = !this.has_product;
        this.alert.showMessage("Producto eliminado de la cesta", "primary");
      },
      error => {
        this.alert.showMessage("No se ha podido eliminar de la cesta", "alert");
      }
    )
  }

}

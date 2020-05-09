import { Component } from '@angular/core';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html'
})
export class HomePage {

  products: any;

  constructor(
    private productService: HomeService
  ) {}

  ngOnInit(): void {
      this.loadProduct();
  }

  loadProduct(): void {
    this.productService.getBasketProducts().subscribe(
      response => {
        //this.products = response;
        console.log("respuesta=> ", response);
      }
    )
  }

  doRefresh(event): void {

   }
}

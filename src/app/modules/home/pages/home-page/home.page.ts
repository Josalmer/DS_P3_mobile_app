import { Component } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastMessageService } from 'src/app/modules/shared/services/toast-messages.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html'
})
export class HomePage {

  products: any;
  totalCost: number;

  constructor(
    private productService: HomeService,
    private alert: ToastMessageService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(_ => {
      this.loadProduct();
    });
  }

  loadProduct(event?): void {
    this.productService.getBasketProducts().subscribe(
      response => {
        this.products = response.products;
        this.totalCost = response.total_cost;
        if (event) {
          event.target.complete();
        }
      }
    )
  }

  buyAll() {
    this.productService.buyAll().subscribe(
      response => {
        this.loadProduct();
        this.alert.showMessage("Compra realizada correctamente", "primary");
      },
      error => {
        this.alert.showMessage(error.error.errors, "danger");
      }
    )
  }

  navigateToProduct(id: string): void {
    this.router.navigateByUrl('/product/' + id);
  }

  doRefresh(event): void {
    this.loadProduct(event);
  }
}

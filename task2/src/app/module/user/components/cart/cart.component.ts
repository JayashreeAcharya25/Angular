import { Component, OnInit } from '@angular/core';
import { ProductsComponent } from '../products/products.component';
import { map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [ProductsComponent]
})
export class CartComponent implements OnInit {

  qty: any = 1
  item_price:any = 200
  total_price:any = this.item_price

  items: any = []
  
  constructor(private _service: ProductsComponent, private router: Router) {
    // this._service.addToCart(product)
    
    console.log(this.router.getCurrentNavigation()?.extras.state)
  }

  ngOnInit() {
    // this.items = this._service.addToCart()
    
  }

  increment_qty(){

    ++this.qty;
    this.total_price = this.qty* this.item_price

  }

  decrement_qty(){

    (this.qty == 1) ? this.qty : --this.qty;
    
  }

}



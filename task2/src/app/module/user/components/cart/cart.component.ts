import { Component, OnInit } from '@angular/core';
import { map, tap, share } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ProductsService } from '../products/products.service';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  // providers: [ProductsService]
})

export class CartComponent implements OnInit {

  qty: any
  amt: any
  id: any
  selectedProducts: any = [];
  total: number = 0;
  sgst: number = 2/100;
  cgst: number = 2/100;
  netPrice: number = 0;

  constructor(private _service: ProductsService) {

  }

  ngOnInit() {

    this.selectedProducts = this._service.retrievePassedObject()
    console.log("Products",this.selectedProducts)

    this.grandTotal();
    this.netAmt();
  }

  increment_qty(item: any) {
   
    this.selectedProducts.find((i: any) => {
      i.id === item.id;
      i.pro_price === item.pro_price;
    });
    item.pro_qty = item.pro_qty+ 1;
    this.grandTotal()
    this.netAmt()
  }

  decrement_qty(item: any) {

    // (this.qty == 1) ? this.qty : --this.qty;
    this.selectedProducts.find((i: any) => {
      i.id === item.id;
      i.pro_price === item.pro_price;
    });
    (item.pro_qty === 1) ? item.pro_qty : item.pro_qty = item.pro_qty - 1;

    this.grandTotal()
    this.netAmt()

  }

  remove(item: any){
    const index = this.selectedProducts.indexOf(item)
    this.selectedProducts.splice(index, 1)
    console.log(this.selectedProducts)
  }

  grandTotal(){
    this.total = this.selectedProducts.reduce(function(acc: number, val: { pro_price: number; pro_qty: number; }){
      return acc + (val.pro_price * val.pro_qty)
    }, 0)
  }

  netAmt(){
    this.netPrice = this.total + this.cgst + this.sgst
  }
  

}



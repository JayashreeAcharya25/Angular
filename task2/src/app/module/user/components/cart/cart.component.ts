import { Component, OnInit } from '@angular/core';
import { map, tap, share } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ProductsService } from '../products/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  // providers: [ProductsService]
})

export class CartComponent implements OnInit {

  qty: any = 1
  item_price:any = 200
  total_price:any = this.item_price

  // selectedProducts: any = [];

  public passedData!: Observable<any[]>;
  
  constructor(private _service: ProductsService) {
    this._service.allData.pipe(share())
   }

  ngOnInit() {
   
  //  this._service
  //   .allPassedData
  //   .subscribe((allPassedData) =>{
  //     this.selectedProducts = allPassedData;
  //     console.log(this.selectedProducts);
  //   })

    
  }

  increment_qty(){

    ++this.qty;
    this.total_price = this.qty* this.item_price

  }

  decrement_qty(){

    (this.qty == 1) ? this.qty : --this.qty;
    
  }

}



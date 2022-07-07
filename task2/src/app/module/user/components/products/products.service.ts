import { Injectable } from '@angular/core';
import { ProductModel } from './product.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: ProductModel,
})
export class ProductsService {

  // allPassedData: any[] = [];
  // public allPassedData: BehaviorSubject<any> = new BehaviorSubject<any>([]);


  private passedData: any[] = [];
  public allData:  BehaviorSubject<any> = new BehaviorSubject<any>([]);


  constructor() { }

  // storePassedObject(passedData: any) {
  //   // this.allPassedData.next(passedData);
   
  // }

  additems(item: any){
    this.passedData.push(item);
    this.allData.next(this.passedData)
  }

  // retrievePassedObject() {
  //   return this.allPassedData;
    
  // }
}

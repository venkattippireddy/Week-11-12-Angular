import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url = 'http://localhost:8080/products/';

  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<any> {
    return this.httpClient.get(this.url);

  }

  getMockProducts(): Product[] {
    return [
      new Product(1, 'Samsung TV', 'Samsung TV', 5, 12345),
      new Product(1, 'Dell Laptop', 'Dell Laptop', 4, 9999),
    ]
  }
}
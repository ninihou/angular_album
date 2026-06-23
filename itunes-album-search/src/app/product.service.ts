import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './Models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'https://dummyjson.com/products';
  private http = inject(HttpClient);

  getProducts(): Observable<{ products: Product[] }> {
    return this.http.get<{ products: Product[] }>(this.apiUrl);
  }

  createProduct(title: string, description: string): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, { title, description });
  }

  deleteProduct(pid: number): Observable<Product> {
    return this.http.delete<Product>(`${this.apiUrl}/${pid}`);
  }

  updateProduct(pid: number, title: string, description: string): Observable<Product> {
    return this.http.put<Product>(`${this.apiUrl}/${pid}`, { title, description });
  }


}

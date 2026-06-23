import { Component, inject, OnInit, signal } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../Models/product';


@Component({
  selector: 'app-crud',
  imports: [],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.scss',
})
export class CrudComponent implements OnInit{

  private productService = inject(ProductService);
  products = signal<any[]>([]);
  newTitle = '';
  newDescription = '';
  ngOnInit() {
    // call api
    this.productService.getProducts().subscribe({
      next: (data:any) => this.products.set(data.products),
      error: (err) => console.log(err)
    });
  }

  createProduct() {
  this.productService.createProduct(this.newTitle, this.newDescription).subscribe({
    next: (product: any) => {
      this.products.update(p => [...p, product]);
      this.newTitle = '';
      this.newDescription = '';
    },
    error: (err) => console.error(err)
  });
  }
  deleteProduct() {
    this.productService.deleteProduct(1).subscribe({
      next: () => {

        //remove from signal to update UI
        this.products.update(p => p.filter(product => product.id !== 1));
      },
      error: (err) => console.error(err)
    });
  }
  updateProduct(id: number, title: string, description: string) {
  this.productService.updateProduct(id, title, description).subscribe({
    next: (updated: Product) => {
      this.products.update(p =>
        p.map(product => product.id === id ? updated : product) //if not found , keep original one
      );
    },
    error: (err) => console.error(err)
  });
}

  
  //http

// Develop a ProductService with methods for CRUD operations (Create, Read, Update, Delete) on a product list.
// Use HttpClient for fetching products from a mock API: https://dummyjson.com/products .
// Provide methods to fetch all products.

// Inject the ProductService into a component and use it to fetch the list of products when the component initializes.
// Return an observable from the service methods for fetching products. Use the subscribe() method in the component to handle asynchronous data.
// Ensure the Component handles the HTTP responses correctly, including error handling.
// Save the data into a signal, and display the list of products by title, description, and category
}

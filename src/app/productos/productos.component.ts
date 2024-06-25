import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  products: any[] = [];
  productRows: any[] = [];

  constructor(private productService: ServiceService) {}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(
      (response) => {
        this.products = response.productos;
        this.organizeProductsIntoRows();
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  addToCart(product: any) {
    this.productService.addToCart(product); // Pasa el producto seleccionado
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Producto agregado al carrito',
      showConfirmButton: false,
      timer: 1500
    });
  }
  
  organizeProductsIntoRows(): void {
    const productsPerRow = 5;
    let rowIndex = 0;
    this.productRows = [];

    for (let i = 0; i < this.products.length; i += productsPerRow) {
      this.productRows[rowIndex] = this.products.slice(i, i + productsPerRow);
      rowIndex++;
    }
  }
}

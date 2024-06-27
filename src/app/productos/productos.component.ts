import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import Swal from 'sweetalert2';

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
    this.productService.addToCart(product);
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Producto agregado al carrito',
      showConfirmButton: false,
      timer: 1500
    });
  }
  
  eliminarProducto(rowIndex: number, product: any): void {
    // Elimina el producto del arreglo products
    this.products = this.products.filter(p => p !== product);
    
    // Vuelve a organizar los productos en filas
    this.organizeProductsIntoRows();

    // Opcional: Mostrar una alerta o mensaje de éxito
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Producto eliminado',
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

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
      position: 'center',
      icon: 'success',
      title: 'Producto agregado al carrito',
      showConfirmButton: false,
      timer: 1500,
      background: '#e0ffe0',  // Fondo verde claro
      iconColor: '#28a745',  // Color del icono verde
      color: '#333',  // Color del texto
      toast: true,
      timerProgressBar: true
    });
  }
  
  eliminarProducto(rowIndex: number, product: any): void {
    // Elimina el producto del arreglo products
    this.products = this.products.filter(p => p !== product);
    
    // Vuelve a organizar los productos en filas
    this.organizeProductsIntoRows();

    // Opcional: Mostrar una alerta o mensaje de éxito
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Producto eliminado',
      text: 'El producto ha sido eliminado correctamente.',
      showConfirmButton: false,
      timer: 1500,
      background: '#ffe0e0',  // Fondo rojo claro
      iconColor: '#d9534f',  // Color del icono rojo
      color: '#333',  // Color del texto
      toast: true,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      }
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

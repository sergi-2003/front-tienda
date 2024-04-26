import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ServiceService) {}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(
      (response) => {
        this.products = response.productos;
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private apiUrl = 'https://serverorenda.onrender.com/api';
  private products: any[] = [];
  private cart = new BehaviorSubject<any[]>([]);

  cart$ = this.cart.asObservable();

  constructor(private http: HttpClient) {}

  addToCart(product: any) {
    this.products.push(product);
    this.cart.next(this.products);
  }

  removeFromCart(product: any) {
    this.products = this.products.filter(p => p.id !== product.id); // Comparar por id
    this.cart.next(this.products);
  }

  createProduct(formData: FormData): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/CrearProducto`, formData);
  }

  getAllProducts(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/ObtenerProductos`);
  }
  
  createPayment(paymentData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/create-payment`, paymentData);
  }
  
  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { email, contrasena: password });
  }
}

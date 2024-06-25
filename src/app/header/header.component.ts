import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { AuthService } from '../Auth/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  productCount = 0;
  isMenuOpen = false;
  userName: string | null = null;
  isAdmin$: Observable<boolean>; // Observable para el estado de administrador

  constructor(
    private cartService: ServiceService,
    private authService: AuthService
  ) {
    this.cartService.cart$.subscribe(products => {
      this.productCount = products.length;
    });
    this.isAdmin$ = this.authService.isAdmin$; // Usar el observable isAdmin$ del AuthService
  }

  ngOnInit(): void {
    this.loadUserInfo();
    this.authService.isAdminStatus(); // Comprobar estado de administrador al iniciar
  }

  loadUserInfo() {
    const usuario = localStorage.getItem('usuario');
    if (usuario) {
      const user = JSON.parse(usuario);
      this.userName = `${user.nombre} ${user.apellido}`;
    }
    this.userName = localStorage.getItem('userName');
  }

  logout() {
    this.authService.logout();
    // Actualiza la información del usuario después de cerrar sesión
    this.loadUserInfo();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}

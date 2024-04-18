import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuFijoComponent } from './menu-fijo/menu-fijo.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { PrincipalComponent } from './principal/principal.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { SliderComponent } from './slider/slider.component';
import { ConsejosComponent } from './consejos/consejos.component';
import { FooterComponent } from './footer/footer.component';
import { ProductoloadComponent } from './productoload/productoload.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuFijoComponent,
    CategoriasComponent,
    PrincipalComponent,
    NosotrosComponent,
    SliderComponent,
    ConsejosComponent,
    FooterComponent,
    ProductoloadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

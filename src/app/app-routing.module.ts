import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasComponent } from './categorias/categorias.component';
import { PrincipalComponent } from './principal/principal.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ConsejosComponent } from './consejos/consejos.component';

const routes: Routes = [
  { path: '', component: PrincipalComponent},
  { path: 'Categoria', component: CategoriasComponent},
  {path: 'Nosotros', component: NosotrosComponent},
  {path: 'Consejos', component:ConsejosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

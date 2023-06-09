import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './components/productos/productos.component';
import { TeatroComponent } from './components/teatro/teatro.component';
import { TransaccionesComponent } from './components/transacciones/transacciones.component';
import { ProductosFormComponent } from './components/productos-form/productos-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TransaccionesFormComponent } from './components/transacciones-form/transacciones-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/Transacciones', pathMatch: 'full' },
  {path: 'Producto', component: ProductosComponent},
  {path: 'Teatro', component: TeatroComponent},
  {path: 'Transacciones',component: TransaccionesComponent},
  {path: 'ProductoForm', component: ProductosFormComponent},
  {path: 'Navbar',component: NavbarComponent},
  {path: 'TransaccionesList',component: TransaccionesFormComponent} 
  
];

@NgModule({
  imports:  [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

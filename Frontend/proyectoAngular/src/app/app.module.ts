import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransaccionesComponent } from './components/transacciones/transacciones.component';
import { ProductosComponent } from './components/productos/productos.component';
import { TeatroComponent } from './components/teatro/teatro.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductosFormComponent } from './components/productos-form/productos-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TransaccionesFormComponent } from './components/transacciones-form/transacciones-form.component';
import { TicketFormComponent } from './components/ticket-form/ticket-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TransaccionesComponent,
    ProductosComponent,
    TeatroComponent,
    ProductosFormComponent,
    NavbarComponent,
    TransaccionesFormComponent,
    TicketFormComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

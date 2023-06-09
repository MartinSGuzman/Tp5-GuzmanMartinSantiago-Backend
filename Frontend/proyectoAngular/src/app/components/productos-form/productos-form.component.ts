import { Component, OnInit } from '@angular/core';
import { error } from 'console';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-productos-form',
  templateUrl: './productos-form.component.html',
  styleUrls: ['./productos-form.component.css']
})
export class ProductosFormComponent implements OnInit {

  devuelto:any={};
  nombre!: string;
  descripcion!: string;
  imagen!: string;
  precio!: number;
  stock!: number;
  destacado: boolean = false;
  constructor(public servicio: ProductosService) { }

  ngOnInit(): void {
  }

  public cargarProducto(nombre: string, descripcion: string, imagen: string, precio: number, stock: number, destacado: boolean) {
    this.servicio.postProducto(nombre,descripcion,imagen,precio,stock,destacado).subscribe(
      respuesta=>{
          this.devuelto=respuesta;
          alert(this.devuelto);
      },error=>{
        console.log("no ai guardar");
      }
    )

    
  }

}

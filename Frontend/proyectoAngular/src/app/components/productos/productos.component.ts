import { Component, OnInit } from '@angular/core';
import { error } from 'console';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor(public servicio: ProductosService) { }

  obtenido:any={};
  ngOnInit(): void {
    this.obtenerProductos();
  }

  public obtenerProductos(){
    this.servicio.getProductosLista().subscribe(
    respuesta=>{
      this.obtenido = respuesta;
    },error=>{
      console.log("no ai productos");
    }
    )
    
  }

}
